import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const apiRequest = () =>
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    apiRequest();
  }, []);

  return (
    <div className="App">
      <h1>フロントエンド2</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
