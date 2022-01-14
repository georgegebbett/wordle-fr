const PropTypes = require("prop-types");

function LetterBox(props) {

    const {letter, result} = props;

    const resultClasses = {
        1: "letter-box grey",
        2: "letter-box yellow",
        3: "letter-box green"
    };


    return (
        <div
            className={result ? resultClasses[result] : "letter-box"}
        >
            {letter}
        </div>
    )

}

LetterBox.propTypes = {
    letter: PropTypes.string
}

export default LetterBox;
