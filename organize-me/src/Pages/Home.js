
"use client"
import '../App.css';
import {createContext, React} from"react";
import Nav from './Nav.js';
import Header from './Header.js';
import Body from "./Body.js";
import Footer from "./Footer.js";
import products from "../AppContent";


export const BodyContent = createContext();






function Home()  {
  
  return (
    <div className="main">
      <Nav />
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
export default Home;

