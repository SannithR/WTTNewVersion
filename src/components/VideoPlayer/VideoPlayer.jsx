import React, { useState, useEffect } from "react";
import { Line2 } from "../../BannerImageUpdated/Line2/Line2";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslation } from "../../translations";
import "./style.css";

export const VideoPlayer = () => {
  const { language, getLocaleCode } = useLanguage();
  const [tournamentData, setTournamentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch tournament data when language changes
  useEffect(() => {
    const fetchTournamentData = async () => {
      setLoading(true);
      setError(null);

      try {
        const locale = getLocaleCode();
        const response = await fetch(`https://rdv.radiant.digital/api/smash-tournaments?locale=${locale}&populate=localizations`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Tournament data for ${locale}:`, data);
        setTournamentData(data);
      } catch (err) {
        console.error("Error fetching tournament data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTournamentData();
  }, [language, getLocaleCode]);

  // Function to get translation
  const t = (key) => getTranslation(language, key);

  // Format date range for display
  const formatDateRange = () => {
    if (!tournamentData?.data?.[0]?.attributes) return "";
    
    const startDate = tournamentData.data[0].attributes.StartDate;
    const endDate = tournamentData.data[0].attributes.EndDate;
    
    if (!startDate || !endDate) return "";
    
    // Format: "30 APR - 7 MAY 2025"
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startDay = start.getDate();
    const startMonth = start.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const endDay = end.getDate();
    const endMonth = end.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const endYear = end.getFullYear();
    
    if (startMonth === endMonth) {
      return `${startDay} - ${endDay} ${endMonth} ${endYear}`;
    } else {
      return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`;
    }
  };

  // Get video URL from tournament data
  const getVideoUrl = () => {
    return tournamentData?.data?.[0]?.attributes?.Smash || "";
  };

  return (
    <div className="video-player">
      {loading ? (
        <div className="loading-container">Loading...</div>
      ) : error ? (
        <div className="error-container">Error loading video</div>
      ) : getVideoUrl() ? (
        <video 
          className="tournament-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={getVideoUrl()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="fallback-banner"></div>
      )}
      
      <div className="video-overlay">
        <div className="frame">
          <p className="EXPERIENCE-a-GRAND">
            {loading ? "Loading..." : error ? "Error loading content" : tournamentData?.data?.[0]?.attributes?.Tittle || t('experienceGrandLegacy')}
          </p>

          <div className="div">
            <div className="background" />
            <div className="text-wrapper">{t('worldTableTennis')}</div>
            <div className="background" />
          </div>

          <div className="frame-2">
            <div className="text-wrapper">
              {loading ? "..." : error ? "Error" : tournamentData?.data?.[0]?.attributes?.place || t('singapore')}
            </div>

            <Line2 className="line" />
            <div className="text-wrapper">
              {loading ? "..." : error ? "Error" : tournamentData?.data?.[0]?.attributes?.locationHub || t('singaporeSportsHub')}
            </div>

            <Line2 className="line" />
            <p className="text-wrapper">
              {loading ? "..." : error ? "Error" : formatDateRange()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
