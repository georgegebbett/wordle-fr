import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

import "../styles/modal.css";
import {config} from "@fortawesome/fontawesome-svg-core";

export default function ScoreModal(props) {

    const {isOpen, onRequestClose, success, guesses, complete, puzzleNo} = props;

    const ScoreHero = (props) => {
        return (
            <div className="score-hero">
                <div>
                    You completed today's challenge in
                </div>
                <div className="score-hero-score">
                    {props.score}
                </div>
                <div>
                    tries!
                </div>
            </div>
        )
    }

    const generateEmojiBlock = () => {

        let emojiBlock = `Wordle FR - #${puzzleNo} - ${guesses.length}/6\n\n`;

        for (let guess of guesses) {
            for (let guessItem of guess.result) {
                switch (guessItem){
                    case 1:
                        emojiBlock += "⬜️️";
                        break;
                    case 2:
                        emojiBlock += "🟨";
                        break;
                    case 3:
                        emojiBlock += "🟩"
                        break;
                }
            }
            emojiBlock += "\n";
        }

        emojiBlock += "(c) George Gebbett";
        console.log(emojiBlock);

        navigator.share({text: emojiBlock});
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="modal">
                <div className="modal-header">
                    Your Score
                    <span onClick={onRequestClose}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </span>
                </div>
                <div className="modal-body">
                    {
                        complete ? (success ?
                            <ScoreHero score={guesses.length}/>
                            : "Better luck next time!") : (
                                "Come back when you've completed the challenge!"
                        )
                    }
                </div>
                <div className="modal-footer">
                    <button className="share-button" hidden={!complete} onClick={generateEmojiBlock}>Share!</button>
                </div>
            </div>
        </Modal>
    )
}
