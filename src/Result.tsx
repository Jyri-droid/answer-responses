import React from 'react'

const Result = (props: any) => {
    const selectedValue = props.selection[props.index];
    const isNotEmpty: boolean = selectedValue;
    const isCorrect: boolean = props.correctAnswerIds.includes(props.index);
    if (isNotEmpty) {
        return <div className={isCorrect ? "result-container correct" :  "result-container false"}>
            <i className="material-symbols-outlined">{isCorrect ? "check": "toys_and_games"}</i>
            <p>{isCorrect ? "Correct" : "Try again!"}</p>
        </div>
    }
}

export default Result;