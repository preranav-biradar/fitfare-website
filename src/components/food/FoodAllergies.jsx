import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodAllergies.css";

const FoodAllergies = () => {
  const [allergies, setAllergies] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (allergies.trim()) {
      navigate("/summary");
    } else {
      setShowModal(true); // show modal if no input
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="allergy-page">
      <div className="overlay"></div>

      <div className="allergy-card">
        <h2 className="allergy-heading">
          Do you have any food allergies or other notes?
        </h2>

        <p className="allergy-subtext">
          Knowing your allergies helps us personalize meal suggestions and avoid
          foods that might not suit you.
        </p>

        <textarea
          className="allergy-input"
          placeholder="Type here about your allergies..."
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />

        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <p>
            You can include lifestyle notes like “Avoid fried food” or “Prefer
            high-protein meals.”
          </p>
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          Continue →
        </button>
      </div>

      {/* ---------- Modal ---------- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>⚠️ Please Fill This Field</h3>
            <p>
              Mention your allergies or dietary notes before continuing. This
              helps us tailor your experience.
            </p>
            <button className="modal-btn" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodAllergies;
