import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";

const App = () => {
  return (
    <>
      {/* Fixed animated mesh gradient background */}
      <div className="bg-mesh-container">
        <div className="mesh-glow mesh-1"></div>
        <div className="mesh-glow mesh-2"></div>
        <div className="mesh-glow mesh-3"></div>
        <div className="mesh-grid-overlay"></div>
      </div>

      <CustomCursor />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </PageTransition>
      <Footer/>
    </>
  );
};

export default App;
