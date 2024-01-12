import React from 'react'

interface Props {
    selection: string[];
    index: number;
    correctAnswerIds: number[];
};

const Result = (props: Props) => {
    const selectedValue: string = props.selection[props.index];
    const isCorrect: boolean = props.correctAnswerIds.includes(props.index);
    if (selectedValue) {
        return <div className={isCorrect ? "result-container correct" :  "result-container false"}>
            <i className="material-symbols-outlined">{isCorrect ? "check": "toys_and_games"}</i>
            <p>{isCorrect ? "Correct" : "Try again!"}</p>
        </div>
    }
}

export default Result;