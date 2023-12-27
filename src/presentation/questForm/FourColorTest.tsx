import React, { useEffect, useState } from "react"
import { data } from "../../domain/repository/FourColorTest"
import QuestService, { FourTypeAnswer } from "../../domain/entity/Quest"
import "./FourColorTest.css"

const FourColorTest = () => {
  const { questions, results } = data
  const [idx, setIdx] = useState(0)
  const onNext = () => {
    setIdx((prevIdx) => prevIdx + 1)
  }
  const [userAnswers, setUserAnswers] = useState<FourTypeAnswer[]>([])
  const [result, setResult] = useState("")
  useEffect(() => {
    if (idx === questions.length) {
      setResult(QuestService.getFourTypeResult(userAnswers))
    }
  }, [idx])
  return (
    <div className="Quest-body">
      {idx < questions.length ? (
        <>
          <div>{`${idx + 1}/${questions.length}`}</div>
          <div className="question">{questions[idx].question}</div>
          <div>
            {questions[idx].answers.map((answer) => {
              return (
                <div
                  className="answer"
                  onClick={() => {
                    setUserAnswers((prev) => [
                      ...prev,
                      answer as FourTypeAnswer,
                    ])
                    onNext()
                  }}
                >
                  {answer.content}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className="Quest-result">
          <p>
            {userAnswers.map(
              (answer) => `
              type: ${answer.content}, level: ${answer.level}
              \n .
              `
            )}
          </p>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}

export default FourColorTest
