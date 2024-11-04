import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topic from "./components/Topic";
import FAQ from "./components/FAQ";
import TEAM from "./components/TEAM";
import SPONSORS from "./components/SPONSORS";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Topic />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<TEAM />} />
        <Route path="/sponsors" element={<SPONSORS />} />
      </Routes>
    </Router>
  );
};

export default App;
