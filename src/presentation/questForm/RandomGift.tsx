import { useState } from "react"

const gifts = [
  {
    name: "곰인형",
    coupangUrl: [
      "https://coupa.ng/cewTJC",
      "https://coupa.ng/cewTJ7",
      "https://coupa.ng/cewTKj",
      "https://coupa.ng/cewTKH",
      "https://coupa.ng/cewTK7",
    ],
  },
  {
    name: "토끼인형",
    coupangUrl: [
      "https://coupa.ng/cewTLW",
      "https://coupa.ng/cewTLb",
      "https://coupa.ng/cewTMi",
      "https://coupa.ng/cewTLH",
    ],
  },
  {
    name: "시계",
    coupangUrl: [
      "https://coupa.ng/cewTMT",
      "https://coupa.ng/cewTNg",
      "https://coupa.ng/cewTNk",
      "https://coupa.ng/cewTNK",
    ],
  },
  {
    name: "반지",
    coupangUrl: [
      "https://coupa.ng/cewTO2",
      "https://coupa.ng/cewTPa",
      "https://coupa.ng/cewTOI",
      "https://coupa.ng/cewTOE",
    ],
  },
  {
    name: "트리",
    coupangUrl: [
      "https://coupa.ng/cewTNY",
      "https://coupa.ng/cewTN4",
      "https://coupa.ng/cewTOy",
    ],
  },
  {
    name: "목도리",
    coupangUrl: ["https://coupa.ng/cewTUp", "https://coupa.ng/cewTUr"],
  },

  { name: "초코케잌", coupangUrl: ["https://coupa.ng/cewTWb"] },
  {
    name: "딸기케잌",
    coupangUrl: ["https://coupa.ng/cewTWH", "https://coupa.ng/cewTXn"],
  },
  {
    name: "생크림케잌",
    coupangUrl: ["https://coupa.ng/cewTXS", "https://coupa.ng/cewTXM"],
  },
  {
    name: "운동화",
    coupangUrl: [
      "https://coupa.ng/cewT94",
      "https://coupa.ng/cewUai",
      "https://coupa.ng/cewUak",
      "https://coupa.ng/cewUau",
    ],
  },
  { name: "나", coupangUrl: ["https://coupa.ng/cewTSU"] },
  {
    name: "아이폰",
    coupangUrl: [
      "https://coupa.ng/cewTTh",
      "https://coupa.ng/cewTTo",
      "https://coupa.ng/cewTTA",
      "https://coupa.ng/cewTTO",
    ],
  },
  {
    name: "갤럭시워치",
    coupangUrl: [
      "https://coupa.ng/cewT9q",
      "https://coupa.ng/cewT9s",
      "https://coupa.ng/cewT9u",
    ],
  },
  {
    name: "애플워치",
    coupangUrl: [
      "https://coupa.ng/cewUej",
      "https://coupa.ng/cewUel",
      "https://coupa.ng/cewUet",
    ],
  },
  {
    name: "플립5",
    coupangUrl: [
      "https://coupa.ng/cewTPY",
      "https://coupa.ng/cewTP6",
      "https://coupa.ng/cewTPs",
      "https://coupa.ng/cewTPS",
    ],
  },
  {
    name: "드림캐쳐",
    coupangUrl: [
      "https://coupa.ng/cewTQw",
      "https://coupa.ng/cewTRE",
      "https://coupa.ng/cewTQZ",
      "https://coupa.ng/cewTQz",
    ],
  },
  {
    name: "탁상스탠드",
    coupangUrl: [
      "https://coupa.ng/cewTYg",
      "https://coupa.ng/cewTYG",
      "https://coupa.ng/cewTYV",
      "https://coupa.ng/cewTYc",
    ],
  },
  {
    name: "조명",
    coupangUrl: ["https://coupa.ng/cewTs4", "https://coupa.ng/cewUb2"],
  },
  {
    name: "양말",
    coupangUrl: [
      "https://coupa.ng/cewT5x",
      "https://coupa.ng/cewT5z",
      "https://coupa.ng/cewT5P",
    ],
  },
  {
    name: "오르골",
    coupangUrl: [
      "https://coupa.ng/cewUaV",
      "https://coupa.ng/cewUa1",
      "https://coupa.ng/cewUbh",
      "https://coupa.ng/cewUbx",
      "https://coupa.ng/cewUbz",
      "https://coupa.ng/cewUbC",
    ],
  },
  {
    name: "스노우볼",
    coupangUrl: [
      "https://coupa.ng/cewUci",
      "https://coupa.ng/cewUcB",
      "https://coupa.ng/cewUcw",
    ],
  },
  {
    name: "팔찌",
    coupangUrl: [
      "https://coupa.ng/cewT4d",
      "https://coupa.ng/cewT4p",
      "https://coupa.ng/cewT4r",
    ],
  },
  { name: "잠옷", coupangUrl: ["https://coupa.ng/cewT6J"] },
  {
    name: "담요",
    coupangUrl: ["https://coupa.ng/cewUdJ", "https://coupa.ng/cewUdN"],
  },
  {
    name: "티세트",
    coupangUrl: [
      "https://coupa.ng/cewUdi",
      "https://coupa.ng/cewUdv",
      "https://coupa.ng/cewUde",
    ],
  },
  {
    name: "귤",
    coupangUrl: ["https://coupa.ng/cewT87", "https://coupa.ng/cewT8P"],
  },
  {
    name: "핸드크림",
    coupangUrl: [
      "https://coupa.ng/cewT6U",
      "https://coupa.ng/cewT7e",
      "https://coupa.ng/cewT7g",
    ],
  },
  {
    name: "커피",
    coupangUrl: [
      "https://coupa.ng/cewT7N",
      "https://coupa.ng/cewT7L",
      "https://coupa.ng/cewT7v",
    ],
  },
  {
    name: "향수",
    coupangUrl: [
      "https://coupa.ng/cewT8C",
      "https://coupa.ng/cewT8x",
      "https://coupa.ng/cewT8A",
    ],
  },
  {
    name: "손편지",
    coupangUrl: [
      "https://coupa.ng/cewT10",
      "https://coupa.ng/cewT2m",
      "https://coupa.ng/cewT1S",
    ],
  },
  {
    name: "초콜렛",
    coupangUrl: [
      "https://coupa.ng/cewT2s",
      "https://coupa.ng/cewT2P",
      "https://coupa.ng/cewT2R",
    ],
  },
  {
    name: "립스틱",
    coupangUrl: [
      "https://coupa.ng/cewT3f",
      "https://coupa.ng/cewT3t",
      "https://coupa.ng/cewT3L",
    ],
  },
  {
    name: "손난로",
    coupangUrl: [
      "https://coupa.ng/cewTU7",
      "https://coupa.ng/cewTVr",
      "https://coupa.ng/cewTVx",
      "https://coupa.ng/cewTVv",
    ],
  },
  { name: "캔들워머", coupangUrl: ["https://coupa.ng/cewTZw"] },
  {
    name: "족발",
    coupangUrl: ["https://coupa.ng/cewTY5", "https://coupa.ng/cewTZj"],
  },
  {
    name: "피자",
    coupangUrl: ["https://coupa.ng/cewTZM", "https://coupa.ng/cewTZO"],
  },
  {
    name: "아이스크림",
    coupangUrl: [
      "https://coupa.ng/cewT0e",
      "https://coupa.ng/cewT0O",
      "https://coupa.ng/cewT0K",
      "https://coupa.ng/cewT0I",
    ],
  },
  {
    name: "비타민",
    coupangUrl: ["https://coupa.ng/cewT1a", "https://coupa.ng/cewT1m"],
  },
]

const getRandomIndex = (maxIndex: number) =>
  Math.floor(Math.random() * maxIndex)

const RandomGift = () => {
  const [idx, setIdx] = useState(getRandomIndex(gifts.length))
  return (
    <>
      <div>두근두근, 랜덤 선물 고르기.</div>
      <div>{gifts[idx].name}</div>
      <div>
        {gifts[idx].coupangUrl.map((x) => (
          <iframe src={`${x}`} width="120" height="240" scrolling="no"></iframe>
        ))}
      </div>
      <div
        onClick={() => {
          setIdx(getRandomIndex(gifts.length))
        }}
      >
        {" "}
        다시 뽑기{" "}
      </div>
      <div>
        "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다."
      </div>
    </>
  )
}

export default RandomGift
