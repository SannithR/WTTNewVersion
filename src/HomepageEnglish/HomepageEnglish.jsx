import React from "react";
import { ArrowDropDownFilled } from "../ArrowDropDownFilled/ArrowDropDownFilled";
import { Component6 } from "../Component6/Component6";
import { Component7 } from "../Component7/Component7";
import { Component7_1 } from "../Component71/Component7_1";
import { Component7_2 } from "../Component72/Component7_2";
import { Component7_3 } from "../Component73/Component7_3";
import { Component7_4 } from "../Component74/Component7_4";
import { Component7_5 } from "../Component75/Component7_5";
import { Component7_6 } from "../Component76/Component7_6";
import { Component7_7 } from "../Component77/Component7_7";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { NavItem } from "../NavItem/NavItem";
import { Playercard } from "../PlayerCard/PlayerCard";
import { LanguageDropdown } from "../components/LanguageDropdown/LanguageDropdown";
import { SimpleLanguageDropdown } from "../components/SimpleLanguageDropdown/SimpleLanguageDropdown";
import { Translation } from "../components/Translation/Translation";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../translations";
import { VideoPlayer } from "../components/VideoPlayer/VideoPlayer";
import { Draws } from "../Draws/DrawsComponents/DrawsComponents";
import { Results } from "../Results/ResultsComponent/ResultsComponent";
import { Schedule } from "../Schedule/ScheduleComponent/ScheduleComponent";


import image1 from "./image-1.png";
import "./style.css";
import "../styleguide1.css"

export const HomepageEnglish = () => {
  const { language, direction } = useLanguage();

  // Function to get translation
  const t = (key) => getTranslation(language, key);

  return (
    <div className={`homepage-english ${direction}`} dir={direction}>
      <div className="div-2">
        <div className="frame-8">
          <div className="custom-sidenav">
            <div className="ul">
              <NavItem className="nav-item-instance" property1="default" navKey="home" />
              <NavItem className="nav-item-instance" property1="variant-2" text={t('draws')} navKey="draws" />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('results')}
                navKey="results"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('schedule')}
                navKey="schedule"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('players')}
                navKey="players"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('para')}
                navKey="para"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('youth')}
                navKey="youth"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('news')}
                navKey="news"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('visit')}
                navKey="visit"
              />
              <NavItem
                className="nav-item-instance"
                property1="variant-2"
                text={t('about')}
                navKey="about"
              />
            </div>
          </div>

          <div className="main-content">
          {/*
            <div className="banner-image" />
            */ }

            <div className="banner-image" >
            <VideoPlayer />
            </div>

            <div className="app-latest-article">
              <div className="frame-9">
                <div className="latest">{t('latest')}</div>

                <div className="background" />
              </div>

              <div className="frame-10">
                <div className="component">
                  <div className="div-wrapper-2">
                    <div className="kanak-JHA-USA" />
                  </div>

                  <div className="overlay">
                    <p className="singapore-shocks-the">
                      {t('headline1')}
                    </p>
                  </div>
                </div>

                <div className="container-2">
                  <div className="component-2">
                    <div className="div-wrapper-2">
                      <div className="element" />
                    </div>

                    <div className="overlay-2">
                      <p className="p">
                        {t('headline2')}
                      </p>
                    </div>
                  </div>

                  <div className="component-2">
                    <div className="div-wrapper-2">
                      <div className="award-ceremony" />
                    </div>

                    <div className="overlay-2">
                      <p className="p">
                        {t('headline3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-11">
                <ArrowDropDownFilled className="arrow-drop-down" />
                <div className="component-3">
                  <div className="text">{t('allNews')}</div>
                </div>
              </div>
            </div>

            <div className="app-who-is-playing">
              <div className="frame-12">
                <div className="who-is-playing">{t('whoIsPlaying')}</div>

                <div className="mat-tab-group-mat">
                  <div className="tablist">
                    <div className="tab">
                      <div className="men-s-singles">{t('menSingles')}</div>

                      <div className="vertical-divider" />
                    </div>

                    <div className="tab-2">
                      <div className="text-wrapper-8">{t('womenSingles')}</div>

                      <div className="vertical-divider" />
                    </div>

                    <div className="tab-3">
                      <div className="text-wrapper-8">{t('menDoubles')}</div>

                      <div className="vertical-divider" />
                    </div>

                    <div className="tab-2">
                      <div className="text-wrapper-8">{t('womenDoubles')}</div>

                      <div className="vertical-divider" />
                    </div>

                    <div className="mixed-doubles-wrapper">
                      <div className="text-wrapper-8">{t('mixedDoubles')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-players-list">
                <div className="frame-13">
                  <div className="frame-14">
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                  </div>

                  <div className="frame-14">
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                  </div>

                  <div className="frame-14">
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                  </div>

                  <div className="frame-14">
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                    <Playercard
                      appCountryFlagCnClassName="playercard-instance"
                      country="default"
                    />
                  </div>
                </div>

                <div className="container-3">
                  <p className="world-ranking">
                    *World Ranking correct at time of entry. For the latest
                    World Rankings please see
                  </p>

                  <div className="component-4">
                    <div className="text-2">here</div>
                  </div>

                  <div className="text-wrapper-9">.</div>
                </div>
              </div>
            </div>

            <div className="background-2">
              <div className="frame-15">
                <div className="replay">REPLAY</div>

                <div className="background-3" />
              </div>

              <div className="ngx-slick-carousel">
                <div className="component-wrapper">
                  <Component6 className="component-6" />
                </div>

                <div className="container-4">
                  <div className="component-5">
                    <div className="component-7">
                      <div className="maxresdefault" />

                      <div className="component-7-wrapper">
                        <Component7 className="component-7-instance" />
                      </div>
                    </div>
                  </div>

                  <div className="component-5">
                    <div className="component-7">
                      <div className="smash-food" />

                      <div className="component-7-wrapper">
                        <Component7 className="component-7-instance" />
                      </div>
                    </div>
                  </div>

                  <div className="component-5">
                    <div className="component-7">
                      <div className="TPQ" />

                      <div className="component-7-wrapper">
                        <Component7 className="component-7-instance" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="component-6-wrapper">
                  <IconComponentNode className="component-6" />
                </div>
              </div>
            </div>

            <div className="sponsers">
              <div className="sponsors-partners">SPONSORS &amp; PARTNERS</div>

              <div className="frame-16">
                <div className="frame-17">
                  <div className="container-5">
                    <p className="text-wrapper-10">
                      In Support of Sport Promotion
                    </p>

                    <div className="component-8">
                      <div className="element-december" />
                    </div>
                  </div>

                  <div className="container-5">
                    <div className="text-wrapper-10">Official Hotel</div>

                    <div className="component-8">
                      <div className="element-january" />
                    </div>
                  </div>

                  <div className="container-5">
                    <div className="text-wrapper-11">Official Ball</div>

                    <div className="component-8">
                      <div className="element-november" />
                    </div>
                  </div>
                </div>

                <div className="frame-17">
                  <div className="container-5">
                    <div className="text-wrapper-12">
                      Official Venue Partner
                    </div>

                    <div className="component-8">
                      <div className="element-2" />
                    </div>
                  </div>

                  <div className="container-5">
                    <div className="text-wrapper-10">Official Petrol Kiosk</div>

                    <div className="component-8">
                      <div className="element-3" />
                    </div>
                  </div>
                </div>

                <div className="frame-17">
                  <div className="container-5">
                    <div className="text-wrapper-11">
                      Global Premier Partner
                    </div>

                    <div className="component-8">
                      <div className="element-4" />
                    </div>
                  </div>

                  <div className="container-5">
                    <div className="text-wrapper-13">
                      Global Apparel Supplier
                    </div>

                    <div className="component-8">
                      <div className="element-5" />
                    </div>
                  </div>
                </div>

                <div className="frame-18">
                  <div className="container-6">
                    <div className="text-wrapper-12">Official Table</div>

                    <div className="component-8">
                      <div className="element-6" />
                    </div>
                  </div>

                  <div className="container-6">
                    <div className="text-wrapper-10">Official Floor</div>

                    <div className="component-8">
                      <div className="element-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="background-4">
              <div className="frame-19">
                <div className="explore-more-WTT">EXPLORE MORE WTT</div>

                <div className="background-5" />
              </div>

              <div className="frame-20">
                <div className="WTT-logo-png" />

                <div className="component-9">
                  <div className="app-store-png" />
                </div>

                <div className="component-9">
                  <div className="google-play-png" />
                </div>

                <div className="vertical-border">
                  <p className="text-wrapper-14">
                    Or watch on YouTube at the WTT channel
                  </p>

                  <div className="youtube-logo-white" />
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="background-border-wrapper">
                <div className="background-border">
                  <div className="paragraph">
                    <p className="sign-up-for">SIGN UP FOR EXCLUSIVE UPDATES</p>

                    <p className="text-wrapper-15">
                      Sign up for free to get first access to exclusive offers,
                      news and more
                    </p>
                  </div>

                  <button className="button">
                    <div className="base">
                      <button className="button-2">Sign Up</button>
                    </div>
                  </button>
                </div>
              </div>

              <div className="footer-2">
                <p className="text-wrapper-16">
                  Copyright 2024 World Table Tennis Pte. Ltd. All Rights
                  Reserved
                </p>

                <div className="list">
                  <div className="component-8">
                    <div className="WTT-logo-png-2" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_1 className="icon-instance-node" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_2 className="icon-instance-node" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_3 className="component-10" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_4 className="icon-instance-node" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_5 className="component-11" />
                  </div>

                  <div className="component-7-instance-wrapper">
                    <Component7_6 className="icon-instance-node" />
                  </div>

                  <div className="component-12">
                    <Component7_7 className="component-13" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer">
            <div className="paper">
              <div className="card-content">
                <div className="logo">
                  <img className="image" alt="Image" src={image1} />

                  <div className="text-wrapper-17">CHAMPIONS 2025</div>
                </div>
              </div>

              <div className="frame-21">
              {/*
                <Playercard
                  className="player-card-instance"
                  property1="variant-2"
                />
                <Playercard
                  className="player-card-instance"
                  property1="default"
                />
                */}
                <div className="player-card-2">
                  <div className="app-player-profile-3" />

                  <div className="app-player-profile-4" />

                  <div className="frame-22">
                    <div className="women-s-singles-3">Men&#39;s Doubles</div>

                    <div className="container-7">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>

                    <div className="container-7">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>
                  </div>
                </div>

                <div className="player-card-2">
                  <div className="frame-23">
                    <div className="women-s-singles-4">Women&#39;s Doubles</div>

                    <div className="div-wrapper-2">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>

                    <div className="div-wrapper-2">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>
                  </div>

                  <div className="app-player-profile-3" />

                  <div className="app-player-profile-4" />
                </div>

                <div className="player-card-2">
                  <div className="app-player-profile-3" />

                  <div className="app-player-profile-4" />

                  <div className="frame-22">
                    <div className="women-s-singles-3">Mixed Doubles</div>

                    <div className="container-7">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>

                    <div className="container-7">
                      <div className="SUN-yingsha-3">SUN YINGSHA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="logo-2" />
            </div>
          </div>
        </div>

        <div className="app-bar">
          <div className="toolbar-wrapper">
            <div className="toolbar">
              <div className="left-side">
                <img className="img" alt="Image" src={image1} />
              </div>

              <div className="min-height" />

              <div className="frame-24">
                <button className="base-wrapper">
                  <div className="base-2">
                    <button className="button-2">{t('smashMap')}</button>
                  </div>
                </button>

                <div className="language-dropdown-container">
                  <SimpleLanguageDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
