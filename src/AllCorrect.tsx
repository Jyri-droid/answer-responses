import React from 'react'
import texts from "./texts.tsx";

interface Props {
    correctAnswerIds: number[];
};

const AllCorrect = (props: Props) => {
    const allCorrect: boolean = props.correctAnswerIds.length === texts.length;
    return allCorrect && (<div className="all-correct-container">
        <i className="material-symbols-outlined large-icon">check</i>
        <h5>Well done! All answers are correct.</h5>
    </div>)
}

export default AllCorrect;