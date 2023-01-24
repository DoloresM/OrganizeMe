import {Link} from "react-router-dom";
import Nav from "../Pages/Nav.js";

const Home = ()=>{
    return(
        <div className="dash-home">
            <Nav/>
            <h1>Dashboard</h1>
            <div className="dash-intro">
                <div className="dash-selector">
                    <div className="selection">
                    ICON
                    <button><Link className="link-services" to="">Task</Link></button>
                    </div>
                    <div className="selection">
                    ICON
                    <button><Link className="link-services" to="">Schedule</Link></button>
                    </div>
                    <div className="selection">
                    ICON
                    <button><Link className="link-services" to="">Project</Link></button>
                    </div>
                </div>
                <button><Link className="link-services" to="/Dashboard/Board/Dashboard">View Dashboad</Link></button>
            </div>
        </div>
    )
    };
 export default Home; 