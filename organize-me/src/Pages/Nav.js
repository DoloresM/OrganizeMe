import { Link } from "react-router-dom";

function Nav() {
    return (
      <div>
        <nav className="home-nav" >   
          <ul className="content">
              <li>
                  <h1><Link className="nav-links" to="/">Organize Me ++ </Link></h1>
              </li>
              <li><Link className="nav-links" to="/Services">Services</Link></li>
              <li><Link className="nav-links " to="/Pricing">Pricing</Link></li>
              <li><Link className="nav-links" to="/Blog">Blog</Link></li>
              <li><button><Link className="nav-links" to="/SignIn"> <span>Sign In</span></Link></button></li>
          </ul>
          
        </nav>


        
      </div>

    );
  }
  
  export default Nav;