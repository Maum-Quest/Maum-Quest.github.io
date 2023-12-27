import { Link } from "react-router-dom"

const Main = () => {
  return (
    <>
      <div className="title">오늘의 마음을 알아볼까요?</div>
      <img
        className="Test-main-img"
        src="https://github.com/Maum-Quest/Maum-Quest.github.io/assets/26381972/e01792df-ca0c-431c-b618-b62deff1a769"
      />
      <Link className="Test-start-link" to="four-color-test">
        테스트 하러가기
      </Link>
    </>
  )
}

export default Main
