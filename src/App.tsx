import React from 'react'
import './App.css';
import { useState } from "react";
import TaskBox from './TaskBox.tsx';
import texts from "./texts.tsx";
import AllCorrect from './AllCorrect.tsx';

function App() {
  const [answers, setAnswers] = useState(null);
  return (
    <section>
      <article>
        <i className="material-symbols-outlined large-icon">cognition</i>
        <h1>Choose right answers</h1>
        <p>Select answers from the dropdown and place them where they belong</p>
        <main>
          {texts.map((object, index) => 
            <TaskBox 
              id={object.id} 
              answers={answers}
              setAnswers={setAnswers}
              key={`taskbox ${index}`}
            >
              {object.text}
            </TaskBox>)
          }
          <AllCorrect />
        </main>
      </article>
    </section>

  );
}

export default App;
