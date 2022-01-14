import KeyboardKey from "./KeyboardKey";

const PropTypes = require("prop-types");

function KeyboardRow(props) {

    const {keyArr, appendLetter, evaluateGuess, backspace} = props;

    return (
        <div className="keyboard-row">
            {
                keyArr.map(key => (
                    <KeyboardKey
                        character={key}
                        key={key}
                        appendLetter={appendLetter}
                        evaluateGuess={evaluateGuess}
                        backspace={backspace}
                    />
                ))
            }
        </div>
    )

}

KeyboardRow.propTypes = {
    keyArr: PropTypes.arrayOf(PropTypes.string),
    appendLetter: PropTypes.func,
    evaluateGuess: PropTypes.func,
    backspace: PropTypes.func
}

export default KeyboardRow;
