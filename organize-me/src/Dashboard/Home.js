import {Link} from "react-router-dom";
import Nav from "../Pages/Nav.js";

const Home = ()=>{
    return(
        <>
        <Nav/>
            <div className="dash-home content">
                
                <div><h1>Dashboard</h1></div>
            
                <div className="dash-intro">

                    <div className="dash-selector">

                        <div className="selection">
                            <div className="icon">
                                ICON
                            </div> 
                            <button><Link className="link-services" to="">Task</Link></button>
                        </div>

                        <div className="selection">
                            <div className="icon">
                                    ICON
                            </div> 
                            <button><Link className="link-services" to="">Schedule</Link></button>
                        </div>

                        <div className="selection">
                            <div className="icon">
                                ICON
                            </div> 
                            <button><Link className="link-services" to="">Project</Link></button>
                        </div>
                    </div>

                    <div id="button"><button><Link className="link-services" to="/Dashboard/Board/Dashboard">View Dashboad</Link></button></div>

                </div>
            </div>
        </>
    )
    };
 export default Home; 