import KeyboardRow from "./KeyboardRow";
import "../styles/keyboard.css";

const PropTypes = require("prop-types");

function Keyboard(props) {

    const {layout, appendLetter, evaluateGuess} = props;

    return (
        <div className="keyboard">
            {layout.map(row => (
                <KeyboardRow
                    keyArr={row}
                    key={row}
                    appendLetter={appendLetter}
                    evaluateGuess={evaluateGuess}
                />
            ))}
        </div>
    )

}

Keyboard.propTypes = {
    layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    appendLetter: PropTypes.func,
    evaluateGuess: PropTypes.func
}

export default Keyboard;
