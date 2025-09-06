import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import BottomNav from "./components/BottomNav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home Page */}
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
