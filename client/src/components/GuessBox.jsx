import GuessRow from "./GuessRow";
import "../styles/guess-box.css"

function GuessBox(props) {

    const emptyArr = ["", "", "", "", "", ""];

    const {guesses, currentGuess} = props;

    return (
        <div className="guess-box">
            <GuessRow
                guess={currentGuess.number === 0 ? currentGuess.letters : (guesses[0] ? guesses[0].letters : emptyArr)}
                result={guesses[0] ? guesses[0].result : null}
            />
            <GuessRow
                guess={currentGuess.number === 1 ? currentGuess.letters : (guesses[1] ? guesses[1].letters : emptyArr)}
                result={guesses[1] ? guesses[1].result : null}
            />
            <GuessRow
                guess={currentGuess.number === 2 ? currentGuess.letters : (guesses[2] ? guesses[2].letters : emptyArr)}
                result={guesses[2] ? guesses[2].result : null}
            />
            <GuessRow
                guess={currentGuess.number === 3 ? currentGuess.letters : (guesses[3] ? guesses[3].letters : emptyArr)}
                result={guesses[3] ? guesses[3].result : null}
            />
            <GuessRow
                guess={currentGuess.number === 4 ? currentGuess.letters : (guesses[4] ? guesses[4].letters : emptyArr)}
                result={guesses[4] ? guesses[4].result : null}
            />
            <GuessRow
                guess={currentGuess.number === 5 ? currentGuess.letters : (guesses[5] ? guesses[5].letters : emptyArr)}
                result={guesses[5] ? guesses[5].result : null}
            />
        </div>
    )

}



export default GuessBox;
