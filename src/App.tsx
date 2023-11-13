import { Outlet } from "react-router-dom"
import AnimalPersonalityQuestForm from "./presentation/questForm/AnimalPersonality"
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
      <Outlet />
    </div>
  )
}

export default App
