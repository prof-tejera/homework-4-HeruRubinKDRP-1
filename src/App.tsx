import Calculator from "./components/Calculator/Calculator";
import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Calculator />
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&family=Roboto&display=swap');`}
      </style>
    </div>
  );
}

export default App;
