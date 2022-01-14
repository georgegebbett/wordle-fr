import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faAward, faCogs } from "@fortawesome/free-solid-svg-icons";

import "../styles/header-bar.css"

export default function HeaderBar(props) {

    const {openScoreModal} = props;

    return(
        <div className="header-bar">
            <div className="left-icon-container">
                <FontAwesomeIcon icon={faQuestionCircle} size="2x"/>
            </div>
            <span className="header-text">WORDLE</span>
            <div className="right-icon-container">
                <span onClick={openScoreModal}>
                    <FontAwesomeIcon icon={faAward} size="2x"/>
                </span>
                <span>
                    <FontAwesomeIcon icon={faCogs} size="2x"/>
                </span>
            </div>
        </div>
    )

}
