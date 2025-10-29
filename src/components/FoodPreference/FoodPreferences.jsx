import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodPreferences.css";
import { FaFish, FaLeaf, FaCarrot, FaDrumstickBite, FaBreadSlice } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const FoodPreferences = () => {
  const [selected, setSelected] = useState("I'm vegetarian");
  const navigate = useNavigate();

  const options = [
    { label: "I don't have any preferences", icon: <MdOutlineCancel /> },
    { label: "I'm a pescatarian", icon: <FaFish /> },
    { label: "I'm vegetarian", icon: <FaLeaf /> },
    { label: "I am vegan", icon: <FaCarrot /> },
    { label: "I like eating meat", icon: <FaDrumstickBite /> },
    { label: "I eat wheat", icon: <FaBreadSlice /> },
  ];

  const handleContinue = () => {
    navigate("/allergies"); 
  };

  return (
    <div className="food-page">
      <div className="food-container">
        <div className="plus-icon"></div>
        <h2 className="heading">What are your food preferences?</h2>

        <div className="options">
          {options.map((item) => (
            <label
              key={item.label}
              className={`option ${selected === item.label ? "selected" : ""}`}
              onClick={() => setSelected(item.label)}
            >
              <div className="icon-box">{item.icon}</div>
              <span className="option-text">{item.label}</span>
              <input type="radio" checked={selected === item.label} readOnly />
            </label>
          ))}
        </div>

        <button className="continue-btn2" onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};

export default FoodPreferences;
