import React from "react"
import githubLogo from "./github-logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>마음 퀘스트</div>
        <img
          className="Github-logo"
          src={githubLogo}
          onClick={() =>
            window.open("https://github.com/hon9g/personality-test")
          }
        />
      </header>
      <img
        className="Test-main-img"
        src="https://user-images.githubusercontent.com/26381972/273206989-24da237c-8553-4edc-9916-0f8772dcdddd.png"
      />
      <a className="Test-start-link" href="/" rel="noopener noreferrer">
        테스트 하러가기
      </a>
    </div>
  )
}

export default App
