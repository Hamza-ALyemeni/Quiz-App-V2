import { useState } from "react"
import QUESTIONS from "../questions.js"
import trophyImage from "../assets/quiz-complete.png"

export default function Quiz() {
    const [userAnswers , setUserAnswers] = useState([]);

    const actievQuistionIndex = userAnswers.length;
   
    const quizIsCompleted = actievQuistionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer]
        });
    }


    if(quizIsCompleted){
        return <div id="summary">
            <img src={trophyImage} alt="Trophy Image" />
            <h2>QUIZ COMPLETED</h2>
        </div>
    }
    
    const shuffledAnswers = [...QUESTIONS[actievQuistionIndex].answers];
    shuffledAnswers.sort(() => Math.random - 0.5);

    return (
    <div id="quiz">
        <div id="quesiton">
            <h2>{QUESTIONS[actievQuistionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map(answer => (
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