import React from 'react'
import Select from './Select.tsx';
import Result from './Result.tsx';
import texts from "./texts.tsx";
import getCorrectAnswers from './getCorrectAnswers.tsx';

interface Text {
    text: string;
    answer: string;
};

// Create options for select
const options: string[] = [];
texts.forEach((object: Text) => !options.includes(object.answer) && options.push(object.answer));

const TaskBox = (props: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const index = Number(event.target.id);
        const copy = [...props.selection];
        copy.splice(index, 1, value);
        props.setSelection(copy);
    };
    return <div className="task-box-container">
        <h2>{props.index + 1}</h2>
        <p>{props.children}</p>
        <Select id={props.index} options={options} onChange={handleChange} defaultValue="default" />
        <Result index={props.index} selection={props.selection} correctAnswerIds={getCorrectAnswers(props.selection)} />
    </div>
}

export default TaskBox;