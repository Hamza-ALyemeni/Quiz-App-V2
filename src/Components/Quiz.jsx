import { useState } from "react"
import QUESTIONS from "../questions.js"

export default function Quiz() {
    const [userAnswers , setUserAnswers] = useState([]);

    const actievQuistionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer]
        });
    }

    return (
    <div id="quiz">
        <div id="quesiton">
            <h2>{QUESTIONS[actievQuistionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[actievQuistionIndex].answers.map(answer => (
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>
                        {answer}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </div>)
}