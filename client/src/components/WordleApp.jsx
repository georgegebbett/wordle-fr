import {useState} from "react";
import HeaderBar from "./HeaderBar";
import GuessBox from "./GuessBox";
import Keyboard from "./Keyboard";

import "../styles/wordle-app.css";

import JSConfetti from "js-confetti";
import ScoreModal from "./ScoreModal";
const jsConfetti = new JSConfetti();


const {useEffect} = require("react");
const axios = require("axios");

const GB_KEYBOARD = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BSPACE']
];

function WordleApp() {

    const [word, setWord] = useState({});
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState({number: 0, letters: []});
    const [complete, setComplete] = useState(false);
    const [success, setSuccess] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getWord = async () => {
            const {data} = await axios.get("/api/word");
            setWord({word: data.todaysWord, splitWord: data.todaysWord.split(""), number: data.puzzleNumber});
        }
        getWord()
    }, [])

    useEffect(() => {
        if (complete === false) return;
        if (success) {
            console.log("Yay!");
            jsConfetti.addConfetti({
                confettiRadius: 6,
                confettiNumber: 500,
            });

        } else {
            console.log("Oh no :(");
        }
        setModalOpen(true);
    }, [complete])

    const evaluateGuess = () => {

        if (currentGuess.letters.length !== 5) return false;

        let resultObj = {letters: [], result: []};
        for (let i = 0; i < currentGuess.letters.length; i++) {
            if (currentGuess.letters[i] === word.splitWord[i]) {
                resultObj.letters.push(currentGuess.letters[i]);
                resultObj.result.push(3);
            } else if (word.splitWord.includes(currentGuess.letters[i])) {
                resultObj.letters.push(currentGuess.letters[i]);
                resultObj.result.push(2);
            } else {
                resultObj.letters.push(currentGuess.letters[i]);
                resultObj.result.push(1);
            }
        }

        if (resultObj.result.reduce((pv, cv) => pv + cv) === 15) {
            setComplete(true);
            setSuccess(true);
        }

        if (currentGuess.number === 5) {
            setComplete(true);
            return;
        }

        setGuesses([...guesses, resultObj]);
        setCurrentGuess({number: currentGuess.number + 1, letters: []});
    }

    const appendLetterToCurrentGuess = (letter) => {
        if (complete) return false;
        if (currentGuess.letters.length < 5) {
            setCurrentGuess({
                ...currentGuess,
                letters: [...currentGuess.letters, letter]
            });
            return true;
        }
        return false;
    }

    const removeLastLetterFromCurrentGuess = () => {
        if (currentGuess.letters.length === 0) return false;

        setCurrentGuess({
            ...currentGuess,
            letters: currentGuess.letters.slice(0, -1)
        })

    }

    return (
        <div className="wordle-app">
            <HeaderBar
                openScoreModal={() => setModalOpen(true)}
            />
            <ScoreModal
                isOpen={modalOpen}
                success={success}
                onRequestClose={()=> setModalOpen(false)}
                guesses={guesses}
                complete={complete}
                puzzleNo={word.number}
            />
            <GuessBox
                guesses={guesses}
                currentGuess={currentGuess}
            />
            <Keyboard
                layout={GB_KEYBOARD}
                appendLetter={appendLetterToCurrentGuess}
                backspace={removeLastLetterFromCurrentGuess}
                evaluateGuess={evaluateGuess}
            />
        </div>
    )
}


export default WordleApp;
