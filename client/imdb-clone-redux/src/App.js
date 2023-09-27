import React from 'react';
import Header from "./components/header/Header";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/home/Home"
function App() {
  return (
      <div className="App">
          <Header />
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
