import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AcademyPage from "./pages/AcademyPage/AcademyPage";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CompanyLogo from "./components/UI/CompanyLogo/CompanyLogo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CompanyLogo />
        <Navbar />
        <Routes>
          <Route path="appacademy" element={<HomePage />} />
          <Route path="appacademy/:academyId/:programId" element={<AcademyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
