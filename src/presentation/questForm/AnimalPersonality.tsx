import React, { useState } from "react"
import data from "../../domain/repository/AnimalPersonailty"

const AnimalPersonality = () => {
  const [idx, setIdx] = useState(0)
  const onNext = () => {
    setIdx((prevIdx) => prevIdx + 1)
  }
  return (
    <div>
      {idx < data.length ? (
        <>
          <div>{data[idx].question}</div>
          <div>
            {data[idx].answers.map((answer) => {
              return <div onClick={() => onNext()}>{answer.content}</div>
            })}
          </div>
        </>
      ) : (
        <p> Result </p>
      )}
    </div>
  )
}

export default AnimalPersonality
