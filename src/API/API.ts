import { shuffleArray } from "../utiles/utiles";

export type Question = {
    question: string
    correct_answer: string;
    category: string
    incorrect_answers: string[]
    difficulty: string
    type: string
}
export type QuestionState = Question & {
    answers: string[]
}
export enum Difficulty  {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard'
}
export async function fetchQuestion(number: number, difficulty: Difficulty){
    const api = await fetch(`https://opentdb.com/api.php?amount=${number}&difficulty=${difficulty}&type=multiple`)
    const data = await api.json();
    console.log(api)
    console.log(data);
    
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])

        }
    )) 
}