import React from 'react'
import Select from './Select.tsx';
import Result from './Result.tsx';
import texts from "./texts.tsx";

const options: string[] = [];
texts.forEach((object) => !options.includes(object.answer) && options.push(object.answer));
console.log(options);

const TaskBox = (props: any) => {
    return <div className="task-box-container">
        <h2>{props.id}</h2>
        <p>{props.children}</p>
        <Select options={options}/>
        <Result />
    </div>
}

export default TaskBox;