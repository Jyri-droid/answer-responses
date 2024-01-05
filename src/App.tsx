import React from 'react'
import './App.css';
import { useState } from "react";
import TaskBox from './TaskBox.tsx';
import texts from "./texts.tsx";
import AllCorrect from './AllCorrect.tsx';

function App() {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  return (
    <section>
      <article>
        <i className="material-symbols-outlined large-icon">cognition</i>
        <h1>Quiz</h1>

        <main>
          {texts.map((object, index) => 
            <TaskBox 
              id={object.id} 
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
              key={`taskbox ${index}`}
            >
              {object.text}
            </TaskBox>)
          }
          <AllCorrect correctAnswers={correctAnswers} />
        </main>
      </article>
    </section>

  );
}

export default App;
