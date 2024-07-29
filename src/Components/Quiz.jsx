import { useState, useCallback } from "react"
import QUESTIONS from "../questions.js"
import trophyImage from "../assets/quiz-complete.png"
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers , setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;  
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prevSelectedAnswers) => {
                return [...prevSelectedAnswers, selectedAnswer]
            });
        }
    ,[]);

    const handleSkipAnswer = useCallback(()=>{
        handleSelectAnswer(null)
    },[handleSelectAnswer])

    if(quizIsCompleted){
        return <div id="summary">
            <img src={trophyImage} alt="Trophy Image" />
            <h2>QUIZ COMPLETED</h2>
        </div>
    }
    
    
    return (
    <div id="quiz">
        <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}      
        skipAnswer={handleSkipAnswer}
        />
    </div>)
}