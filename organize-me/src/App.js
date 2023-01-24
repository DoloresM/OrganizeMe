import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home.js";
import Services from "./Pages/Services.js";
import Pricing from "./Pages/Pricing.js";
import Blog from "./Pages/Blog.js";
import SignIn from "./Pages/SignIn.js";
import DashHome from "./Dashboard/Home.js";
import Dashboard from "./Dashboard/Dashboard.js";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>s
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route exact path="/Dashboard/Home" element={<DashHome/>}></Route>
      <Route exact path="/Dashboard/Board/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}


