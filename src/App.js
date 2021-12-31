import React from "react";
import ColorSet from "./components/ColorSet.js";
import "./App.css";
function FilterableProductTable({ products }) {
  return (
    <div style={{ textAlign: "center" }}>
      <ColorSet />
    </div>
  );
}

export default function App() {
  return <FilterableProductTable />;
}
