import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
            
        <ul>
            <li>
                <h1><Link to="/">Organize Me</Link></h1>
            </li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;