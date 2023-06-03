import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

const Partners = ()=>{
    return(
        <div className="content" style={{backgroundColor: "#790928"}}>
            <div className="sectionTitle">
                <h4>Partnerships</h4>
                <span></span>
                <hr></hr>
                <FontAwesomeIcon icon={faYoutube}/> 
            </div>
            <div className="pBrands">
                <span>sss</span>
                <span>ddd</span>
                <span>ggg</span>
                <span>hhh</span>
                <span>jjj</span>
            </div>
        </div>
    );
}

export default Partners;