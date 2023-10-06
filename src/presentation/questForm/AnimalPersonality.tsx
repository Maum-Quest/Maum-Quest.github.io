import React, { useState } from "react"
import data from "../../domain/repository/AnimalPersonailty"
import "./AnimalPersonality.css"

const AnimalPersonality = () => {
  const [idx, setIdx] = useState(0)
  const onNext = () => {
    setIdx((prevIdx) => prevIdx + 1)
  }
  return (
    <div className="Quest-body">
      {idx < data.length ? (
        <>
          <div className="question">{data[idx].question}</div>
          <div>
            {data[idx].answers.map((answer) => {
              return (
                <div className="answer" onClick={() => onNext()}>
                  {answer.content}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className="Quest-result"> Result </div>
      )}
    </div>
  )
}

export default AnimalPersonality
