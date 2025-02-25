import React from "react";
import Home from "./Pages/Home_page/home_page";
import { BrowserRouter, Routes,Route } from "react-router-dom" ;
import Training from "./Pages/Training/training";
import Coaches from "./Pages/About_ /Coaches";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<Home/>}/>
          <Route path= "/training" element= {<Training/>}/>
          <Route path = "/coach" element= {<Coaches/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
