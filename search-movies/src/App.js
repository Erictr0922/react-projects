import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./components/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<SingleMovie />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
