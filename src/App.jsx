import Footer from "./components/Footer/Footer";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import WorkoutDetailsPage from "./pages/WorkoutDetailsPage/WorkoutDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<LandingPage />}/>
          <Route path="/home" element= {<HomePage />}/>
          <Route path="/workoutdetails/:positionid" element= {<WorkoutDetailsPage />}/>
          <Route path="/workout" element= {<WorkoutPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
