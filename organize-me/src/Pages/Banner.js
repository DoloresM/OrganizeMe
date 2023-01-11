import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

// const element = <FontAwesomeIcon icon={faCoffee} />

function Banner(){
    return(
        <div className="banner">
            <h3>How OrganizeMe Works</h3>
            <FontAwesomeIcon icon={faCoffee}/> 
            <FontAwesomeIcon icon={faYoutube}/> 
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet a mauris quis semper. Nunc nulla ligula, euismod vel eros eu, commodo ornare ipsum.</p>
        </div>
    )
}

export default Banner;