import React from 'react'
import { useState } from "react";
import Select from './Select.tsx';
import Result from './Result.tsx';
import texts from "./texts.tsx";

interface Text {
    id: number;
    text: string;
    answer: string;
};

const options: string[] = [];
texts.forEach((object) => !options.includes(object.answer) && options.push(object.answer));

const TaskBox = (props: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // Get correct answer
        const thisId = Number(event.target.id);
        const thisObject: Text | undefined = texts.find((object) => object.id === thisId);
        const correctAnswer = thisObject?.answer;
        // Compare selected value to correct answer
        const selectValue = event.target.value;
        if (selectValue === correctAnswer) {
            props.setCorrectAnswers([...props.correctAnswers, thisId]);
        } else {
            const thisExcluded = props.correctAnswers.filter((element: number) => element !== thisId);
            props.setCorrectAnswers(thisExcluded);
        }
        // Set not empty
        setIsEmpty(false);
    };
    return <div className="task-box-container">
        <h2>{props.id}</h2>
        <p>{props.children}</p>
        <Select id={props.id} options={options} onChange={handleChange} defaultValue="default" />
        <Result id={props.id} correctAnswers={props.correctAnswers} isEmpty={isEmpty} />
    </div>
}

export default TaskBox;