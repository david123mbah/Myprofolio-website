
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Collaborator from "./components/pages/Collaborateur";
import Training from "./components/pages/Training";
import Reports from "./components/pages/Raport";
import Performance from "./components/pages/performance";
import Sidebar from "./components/Sidebar/Sidebar";



const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/collaborator" element={<Collaborator />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/training" element={<Training />} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;