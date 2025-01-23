import React from "react";
import Home from "./Pages/Home_page/home_page";
import { BrowserRouter, Routes,Route } from "react-router-dom" ;
import Training from "./Pages/Training/training";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<Home/>}/>
          <Route path= "/training" element= {<Training/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
