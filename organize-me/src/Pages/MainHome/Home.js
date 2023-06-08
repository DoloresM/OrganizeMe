
"use client"
// import '../App.css';
import Nav from './MainHeader/Nav.js';
import Header from './MainHeader/Header.js';
import Body from "./Body.js";
import Footer from "./Footer/Footer.js";

function Home()  {
  
  return (
    <div className="main ">
        <Nav />
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}
export default Home;

