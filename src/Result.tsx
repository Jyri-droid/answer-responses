import React from 'react'

const Result = (props: any) => {
    const isCorrect: boolean = props.correctAnswers.includes(props.id);
    if (!props.isEmpty) {
        return <div className={isCorrect ? "result-container correct" :  "result-container false"}>
            <i className="material-symbols-outlined">{isCorrect ? "check": "toys_and_games"}</i>
            <p>{isCorrect ? "Correct" : "Try again!"}</p>
        </div>
    }
}

export default Result;