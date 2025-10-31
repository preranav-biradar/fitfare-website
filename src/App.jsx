import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SetupPage from "./components/SetupIntro/SetupIntro";
import FoodPreferences from "./components/FoodPreference/FoodPreferences";
import Allergies from "./components/Allergies/Allergies";
import SnackFrequency from "./components/SnackFrequency/SnackFrequency";
import CalorieIntake from "./components/callories/CalorieIntake";
import FoodAllergies from "./components/food/FoodAllergies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/food" element={<FoodPreferences />} />
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/snack-frequency" element={<SnackFrequency />} />
        <Route path="/callori-intake" element={<CalorieIntake/>} />
        <Route path="/food-allergies" element={<FoodAllergies/>}/>
             </Routes>
    </Router>
  );
}

export default App;
