import React, { useEffect, useState } from "react"
import data from "../../domain/repository/AnimalPersonailty"
import QuestService, { PersonalityAnswer } from "../../domain/entity/Quest"
import "./AnimalPersonality.css"

const AnimalPersonality = () => {
  const [idx, setIdx] = useState(0)
  const onNext = () => {
    setIdx((prevIdx) => prevIdx + 1)
  }
  const [userAnswers, setUserAnswers] = useState<PersonalityAnswer[]>([])
  const [result, setResult] = useState("")
  useEffect(() => {
    if (idx === data.length) {
      setResult(QuestService.getPersonalityResult(userAnswers))
    }
  }, [idx])
  return (
    <div className="Quest-body">
      {idx < data.length ? (
        <>
          <div className="question">{data[idx].question}</div>
          <div>
            {data[idx].answers.map((answer) => {
              return (
                <div
                  className="answer"
                  onClick={() => {
                    setUserAnswers((prev) => [
                      ...prev,
                      answer as PersonalityAnswer,
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

export default AnimalPersonality
