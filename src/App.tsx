import React, { useEffect, useState } from "react";
import QuestionCart from "./components/QuestionCart";
import { Difficulty, fetchQuestion, QuestionState } from "./API/API";
import {GlobalStyle, Wrapper} from './styles/app.styles'
const TOTAL_QUESTION = 10;

export type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const App = () => {
  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnwser, setUserAnswer] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [time, setTime] = useState(20)
  const startGame = async () => {
    setLoading(true);
    setGameOver(false);
    const question = await fetchQuestion(TOTAL_QUESTION, Difficulty.easy);
    setQuestions(question);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number],
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (number === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  //this because time number is updated async  because we but it in setTimeout we solved this by useEffect Hook 
  useEffect(() => {
    setTime(time)
  },[time])
  
  const TimeDead = () => {
    if(!gameOver && !Loading){
      if(time === 0 || userAnwser.length + 1 === TOTAL_QUESTION){
        setGameOver(true)
      }else{
        setTimeout(() => {setTime(time >= 0? time - 1: 0)},1000)
      }
    }
  }
  console.log(gameOver)
  TimeDead()
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz</h1>
      {gameOver || userAnwser.length === TOTAL_QUESTION ? (
        <button className="start" onClick={startGame}>Start</button>
      ) : null}
      {time !== -1 ? <div className="time">Time: <span className="counter">{time}</span></div>: null}
      <p className="score">Score: <span className="score-number">{score}</span></p>
      {Loading && <p>Loading Question...</p>}
     {!Loading && !gameOver && time !== 0 && (
        <QuestionCart
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnwser={userAnwser ? userAnwser[number] : undefined}
          questionNr={number + 1}
          totalQuestion={TOTAL_QUESTION}
        />
      )} 
      {!Loading &&
      !gameOver &&
      userAnwser.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <button className="next" onClick={nextQuestion}>next</button>
      ) : null}
    </Wrapper>
    </>
  );
};
export default App;
