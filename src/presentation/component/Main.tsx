import { Link } from "react-router-dom"

const Main = () => {
  return (
    <>
      <img
        className="Test-main-img"
        src="https://user-images.githubusercontent.com/26381972/273206989-24da237c-8553-4edc-9916-0f8772dcdddd.png"
      />
      <Link className="Test-start-link" to="four-color-test">
        테스트 하러가기
      </Link>
    </>
  )
}

export default Main
