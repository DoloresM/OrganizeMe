import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

const DownloadIcons = ()=>{
    return(
        <div className="download-section">
            <h4>Download OrganizeMe Today</h4>
            <div className="slideIcons">
                <section className="sIcon">
                    <ul>
                        <li>a</li>
                        <li>cs</li>
                        <li>c</li>
                    </ul>
                </section>
                <section className="sIcon">
                <ul>
                        <li>a</li>
                        <li>d</li>
                        <li>d</li>
                    </ul>
                </section>
                <section className="sIcon">
                <ul>
                        <li>d</li>
                        <li>e</li>
                        <li>c</li>
                    </ul>
                </section>
                <section className="sIcon">
                <ul>
                        <li>g</li>
                        <li>b</li>
                        <li>g</li>
                    </ul>
                </section>
            </div>
            <div className="appIcons">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default DownloadIcons;