import React from "react";
import { useGlobalContext } from "./context";
import { Circles } from "react-loading-icons";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <Circles fill="hsl(205, 84%, 74%)" />
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
