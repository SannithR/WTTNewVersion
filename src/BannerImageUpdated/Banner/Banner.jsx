import React, { useState, useEffect } from "react";
import { Line2 } from "../Line2/Line2";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslation } from "../../translations";
import "./style.css";

export const Banner = () => {
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

  // Format dates based on current language
  const formatDateRange = () => {
    if (!tournamentData?.data?.[0]?.attributes?.StartDate || !tournamentData?.data?.[0]?.attributes?.EndDate) {
      return t('eventDate');
    }

    try {
      const locale = getLocaleCode();
      const startDate = new Date(tournamentData.data[0].attributes.StartDate);
      const endDate = new Date(tournamentData.data[0].attributes.EndDate);

      const startFormatted = startDate.toLocaleDateString(locale, { day: 'numeric', month: 'short' });
      const endFormatted = endDate.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });

      return `${startFormatted} - ${endFormatted}`;
    } catch (err) {
      console.error("Error formatting dates:", err);
      return t('eventDate');
    }
  };

  return (
    <div className="banner">
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
  );
};
