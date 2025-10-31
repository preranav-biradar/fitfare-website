import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAppleAlt } from "react-icons/fa";
import "./SetupIntro.css";

const SetupIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="setup-page">
      <div className="overlay">
        <div className="text-section">
          <h1>
            Hey, Mori! I’m <span className="highlight">FitFare AI</span>
            <br />
            I’ll guide you through setting up your nutrition today. Are you ready?
            <FaAppleAlt className="apple-icon" />
          </h1>

          <p className="info-text">
            FitFare AI helps you personalize your nutrition with
            <b> smart meal planning</b>, <b>AI-based insights</b>, and
            <b> progress tracking</b> — everything you need to stay fit and focused.
          </p>

          <div className="features">
            <div className="feature-item">🍽️ Smart Meal Planning</div>
            <div className="feature-item">⚡ AI-based Nutrition Program</div>
            <div className="feature-item">💪 Progress & Goal Tracking</div>
          </div>
        </div>

        <div className="button-section">
          <button className="btn primary" onClick={() => navigate("/food")}>
            Yes, start →
          </button>
          <button className="btn outline">No, I’ll set up manually ✏️</button>
          <button className="btn danger" onClick={() => navigate("/")}>
            No, go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupIntro;
