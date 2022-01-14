import {faCheckSquare, faBackspace} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PropTypes = require("prop-types");

function KeyboardKey(props) {
    const {character, appendLetter, evaluateGuess} = props;

    const getKey = (char) => {
        switch (char) {
            case "ENTER":
                return (
                    <div className="keyboard-key" onClick={evaluateGuess}>
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </div>
                );
            case "BSPACE":
                return (
                    <div className="keyboard-key">
                        <FontAwesomeIcon icon={faBackspace}/>
                    </div>
                );
            default:
                return (
                    <div className="keyboard-key" onClick={() => appendLetter(char)}>
                        {char}
                    </div>
                );
        }
    }

    return (
        <div>
            {getKey(character)}
        </div>
    )
}

KeyboardKey.propTypes = {
    character: PropTypes.string,
    appendLetter: PropTypes.func,
    evaluateGuess: PropTypes.func
};

export default KeyboardKey;
