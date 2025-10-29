import React, { useState } from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import "./SnackFrequency.css";

export default function SnackFrequency() {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["One Time", "Two Times", "Three Times", "Four Times", "Five Times"];

  return (
    <div className="page-container">
      <FaPlus className="plus-icon" />
      <h2>How often do you snack daily?</h2>

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

      <button className="continue-btn">
        Continue <FaArrowRight />
      </button>
    </div>
  );
}
