import React from "react";
import { useNavigate } from "react-router-dom";
import "./SetupIntro.css";

const SetupIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="setup-page">
      
      <div className="plus-icon">+</div>

      <div className="text-section">
        <h1>
          Hey, Mori! I’m <span className="highlight">FitFare AI</span>, and I’ll guide you through setting up your nutrition today.
          Are you ready? 🍎
        </h1>
      </div>

      {/* Bottom Right Buttons */}
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
  );
};

export default SetupIntro;
