import React from "react";
import Videos from "./containers/connectedVideos";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid">
      <Videos />
    </div>
  );
}

export default App;
