
import '../App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Body from "./Body.js";
import Footer from "./Footer.js";



function Home() {
  return (
    <div className="main">
      <Nav/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
export default Home;

