import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CalorieIntake.css";

const CalorieIntake = () => {
  const [calories, setCalories] = useState(2000);
  const navigate = useNavigate();

  const increaseCalories = () => setCalories((prev) => prev + 100);
  const decreaseCalories = () =>
    setCalories((prev) => (prev > 100 ? prev - 100 : prev));

  // calculate approximate range progress
  const progress = Math.min((calories / 4000) * 100, 100);

  const handleContinue = () => {
    navigate("/food-allergies"); 
  };

  return (
    <div className="calorie-container">
      <div className="calorie-card">
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <h2 className="calorie-heading">What’s your daily calorie intake?</h2>

        <p className="subtext">
          Your daily calorie needs depend on your age, gender, and activity level. 
          Adjust as per your lifestyle for balanced nutrition.
        </p>

        <p className="label">Daily Intake (kcal)</p>

        {/* Calorie Adjuster */}
        <div className="calorie-input">
          <button className="change-btn" onClick={decreaseCalories}>
            <span className="symbol">−</span>
          </button>

          <span className="calorie-value">
            {calories.toLocaleString("en-US")}
          </span>

          <button className="change-btn" onClick={increaseCalories}>
            <span className="symbol">+</span>
          </button>
        </div>

        <p className="note-text">
          I consume around <strong>{calories.toLocaleString("en-US")} kcal</strong> daily.
        </p>



        {/* Continue Button */}
        <button className="continue-btn1" onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};

export default CalorieIntake;
