import React from 'react'
import { answerObject } from '../App'
import { ButtonWrapper, WrapperQ } from '../styles/questionCart.styles'


type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnwser: answerObject | undefined,
    questionNr: number,
    totalQuestion: number
}
const QuestionCart = ({question,answers,callback,userAnwser,questionNr,totalQuestion}: Props) => {
  return (
    <WrapperQ key={questionNr}>
        <p className="number">Question: {questionNr} / {totalQuestion}</p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        {answers.map(answer => (
            <ButtonWrapper
                key={answer}
                correct={userAnwser?.correctAnswer === answer}
                userClick={userAnwser?.answer === answer}
            >
                <button disabled={userAnwser? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </ButtonWrapper>
        ))}
    </WrapperQ>
  )
}
export default QuestionCart;