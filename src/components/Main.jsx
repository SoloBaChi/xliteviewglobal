import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import PageNotFound from "./NotFound/PageNotFound";
import Aboutus from "./Home/Aboutus";
import Header from "./Header/Header";



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <> 
//       <Route path="/" element={<Home/>} />
//       <Route path="/about" element={<Aboutus/>} />
//       <Route path="*" element={<PageNotFound/>} />
//     </>
//   ),
// );

function Main(props) {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<Aboutus/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
