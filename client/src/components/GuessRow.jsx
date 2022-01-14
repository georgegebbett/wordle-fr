import LetterBox from "./LetterBox";

function GuessRow(props) {

    const {guess, result} = props;

    return (
        <div className="guess-row">
            <LetterBox
                letter={guess ? guess[0] : ""}
                result={result ? result[0] : null}
            />
            <LetterBox
                letter={guess ? guess[1] : ""}
                result={result ? result[1] : null}
            />
            <LetterBox
                letter={guess ? guess[2] : ""}
                result={result ? result[2] : null}
            />
            <LetterBox
                letter={guess ? guess[3] : ""}
                result={result ? result[3] : null}
            />
            <LetterBox
                letter={guess ? guess[4] : ""}
                result={result ? result[4] : null}
            />
        </div>

    )

}

export default GuessRow;
