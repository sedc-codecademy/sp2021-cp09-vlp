import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AcademyPage from "./pages/AcademyPage/AcademyPage";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CompanyLogo from "./components/UI/CompanyLogo/CompanyLogo";
import { SUBFOLDER_PATH } from "./components/UI/Navbar/link-data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CompanyLogo />
        <Navbar />
        <Routes>
          <Route path={SUBFOLDER_PATH} element={<HomePage />} />
          <Route
            path={`${SUBFOLDER_PATH}/:academyId/:programI`}
            element={<AcademyPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
