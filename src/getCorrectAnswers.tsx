import texts from "./texts.tsx";

const getCorrectAnswers = (answers: string[]) => {
    const correctAnswers: number[] = [];
    answers.forEach((answer: string, index: number) => answer === texts[index].answer && correctAnswers.push(index));
    return correctAnswers;
}

export default getCorrectAnswers;