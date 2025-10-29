import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Allergies.css";
import { FaCheese, FaEgg, FaFish } from "react-icons/fa";
import { MdOutlineGrain, MdCancel, MdSettings, MdInfoOutline } from "react-icons/md";
import { GiWheat, GiMilkCarton } from "react-icons/gi";

const Allergies = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const options = [
    { name: "Gluten", icon: <MdOutlineGrain /> },
    { name: "Wheat", icon: <GiWheat /> },
    { name: "Lactose", icon: <FaCheese /> },
    { name: "Milk", icon: <GiMilkCarton /> },
    { name: "Egg", icon: <FaEgg /> },
    { name: "Shellfish", icon: <FaFish /> },
    { name: "Other", icon: <MdSettings /> },
    { name: "None", icon: <MdCancel /> },
  ];

  const toggleSelect = (item) => {
    if (item === "None") {
      setSelected(["None"]);
    } else {
      setSelected((prev) => {
        const newSelection = prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev.filter((i) => i !== "None"), item];
        return newSelection;
      });
    }
  };

  const handleContinue = () => {
    navigate("/snack-frequency");
  };

  return (
    <div className="allergy-container">
      <div className="allergy-card">
        <div className="plus-icon1">+</div>
        <h2>Do you have any allergies or intolerances?</h2>

        <div className="chips-container">
          {options.map((item) => (
            <div
              key={item.name}
              className={`chip ${selected.includes(item.name) ? "selected" : ""}`}
              onClick={() => toggleSelect(item.name)}
            >
              <span className="chip-icon">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>

        <div className="note">
          <MdInfoOutline className="note-icon" />
          You can select multiple options
        </div>

        <button className="continue-btn1" onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};

export default Allergies;
