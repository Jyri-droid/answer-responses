import React from 'react'
import './App.css';
import { useState } from "react";
import TaskBox from './TaskBox.tsx';
import texts from "./texts.tsx";
import AllCorrect from './AllCorrect.tsx';
import getCorrectAnswers from './getCorrectAnswers.tsx';

const defaultAnswers = new Array(texts.length).fill(null);

function App() {
  const [selection, setSelection] = useState(defaultAnswers);
  return (
    <section>
      <article>
        <i className="material-symbols-outlined large-icon">cognition</i>
        <h1>Quiz</h1>
        <p>Which animal? Place each animal to its right description.</p>
        <main>
          {texts.map((object, index) => 
            <TaskBox 
              index={index} 
              selection={selection}
              setSelection={setSelection}
              key={`taskbox ${index}`}
            >
              {object.text}
            </TaskBox>)
          }
          <AllCorrect correctAnswerIds={getCorrectAnswers(selection)} />
        </main>
      </article>
    </section>

  );
}

export default App;
