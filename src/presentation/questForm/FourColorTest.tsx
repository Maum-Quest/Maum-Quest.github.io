import React, { useEffect, useState } from "react"
import { data } from "../../domain/repository/FourColorTest"
import QuestService, {
  FourTypeAnswer,
  FourTypeResult,
} from "../../domain/entity/Quest"
import "./FourColorTest.css"

const FourColorTest = () => {
  const { questions, results } = data
  const [idx, setIdx] = useState(0)
  const onNext = () => {
    setIdx((prevIdx) => prevIdx + 1)
  }
  const [userAnswers, setUserAnswers] = useState<FourTypeAnswer[]>([])
  const [result, setResult] = useState<FourTypeResult>()
  useEffect(() => {
    if (idx === questions.length) {
      const selectedType = QuestService.getFourTypeResult(userAnswers)
      setResult(
        results.reduce((prev, curr) => {
          if (curr.type === selectedType) {
            return curr
          }
          return prev
        }, results[0])
      )
    }
  }, [idx])
  return (
    <div className="quest-body">
      {idx < questions.length ? (
        <>
          <div className="index">{`${idx + 1}/${questions.length}`}</div>
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
        <div className="quest-result">
          <p>{result?.content}</p>
          <p>{result?.description}</p>
        </div>
      )}
    </div>
  )
}

export default FourColorTest
