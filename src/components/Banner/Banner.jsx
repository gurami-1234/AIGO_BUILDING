import React from "react";
import Background from "../../assets/bg-next-bg.png";
import Wyndham from "../../assets/Wyndham.png";
import Wyndham2 from "../../assets/Wyndham.png";
import BannerCSS from "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* ---- BACKGROUND UMAGE ---- */}

      <div className="background-image">
        <img src={Background} alt="" />
      </div>

      {/* ---- COMPANY IMFO ---- */}

      <div className="company-info">
        <div className="banner-title">
          <h1 className="investment-countries">
            Luxury Property Investment in Batumi, Dubai and Kenya
          </h1>
          <p className="highest-income">
            Get the highest income from your own hotel room
          </p>
        </div>

        {/* ---- COMPANY PROJECTS IMAGES ---- */}

        <div className="company-projects-images">
          <div className="company-project">
            <img src={Wyndham} />
          </div>
          <div className="company-project1">
            <img src={Wyndham2} />
          </div>
        </div>

        {/* ---- INVESTMENT CONTAINER ---- */}

        <div className="investment-container">
          <div className="return-on-investment">
            <h3 className="roi-title">ROI</h3>
            <h1>12%</h1>
          </div>
          <div className="first-payment">
            <h3 className="first-payment-title">First Payment from</h3>
            <h1>15%</h1>
          </div>
          <div className="installment-plan">
            <h3 className="installment-plan-title">
              Installment plan is up to
            </h3>
            <h1>48 months</h1>
          </div>
          <div className="interest-rate">
            <h2 className="interest-rate-title">Interest rate</h2>
            <h1>0%</h1>
          </div>
        </div>

        {/* ---- REQUEST CALL ---- */}

        <div className="request-call">
          <button>Request a call</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
