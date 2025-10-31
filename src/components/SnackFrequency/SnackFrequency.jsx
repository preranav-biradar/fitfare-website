import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SnackFrequency.css";

export default function SnackFrequency() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const options = ["One Time", "Two Times", "Three Times", "Four Times", "Five Times"];

  const handleContinue = () => {
    if (selectedOption) {
      navigate("/callori-intake");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="snack-page">
      <div className="snack-card">
        <h2>Tell Us About Your Snack Routine 🍪</h2>
        <p>
          Select how many times you usually snack in a day. This helps us
          personalize your nutrition recommendations for you.
        </p>

        <div className="options">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`option ${selectedOption === opt ? "selected" : ""}`}
              onClick={() => setSelectedOption(opt)}
            >
              {opt}
            </div>
          ))}
        </div>

        <button className="continue-btn3" onClick={handleContinue}>
          Continue <FaArrowRight />
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>⚠️ Please Select an Option</h3>
            <p>You must select your snack frequency before continuing.</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
