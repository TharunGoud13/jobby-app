import React from "react";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDesc from "./components/JobDesc";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jobs/:id" element={<JobDesc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
