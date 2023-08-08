
import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { ShowDetails } from "./components/ShowDetails";
import { ListOfShows } from "./components/ListOfShows";

function App() {
  return (
    <div>
      <Router>
      
        <Routes>
          <Route exact path="/" element={<ListOfShows/>} />
          <Route path="/showdetails" element={<ShowDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;