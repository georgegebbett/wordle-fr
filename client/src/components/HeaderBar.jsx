import {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faAward, faCogs } from "@fortawesome/free-solid-svg-icons";

import "../styles/header-bar.css"

export default function HeaderBar(props) {

    return(
        <div className="header-bar">
            <div className="left-icon-container">
                <FontAwesomeIcon icon={faQuestionCircle} size="2x"/>
            </div>
            <span className="header-text">WORDLE</span>
            <div className="right-icon-container">
                <FontAwesomeIcon icon={faAward} size="2x"/>
                <FontAwesomeIcon icon={faCogs} size="2x"/>
            </div>
        </div>
    )

}
