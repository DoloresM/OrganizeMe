import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav >   
        <ul className="content">
            <li>
                <h1><Link className="link-react" to="/">Organize Me</Link></h1>
            </li>
            <li><Link className="link-react" to="/Services">Services</Link></li>
            <li><Link className="link-react" to="/Pricing">Pricing</Link></li>
            <li><Link className="link-react" to="/Blog">Blog</Link></li>
            <li><button><Link className="link-react" to="/SignIn">Sign In</Link></button></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;