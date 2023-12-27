const questions = [
  {
    question: "당신이 주로 선호하는 계절은 무엇인가요?",
    answers: [
      {
        content: "봄",
        type: "A",
        level: 1,
      },
      {
        content: "여름",
        type: "B",
        level: 1,
      },
      {
        content: "가을",
        type: "C",
        level: 1,
      },
      {
        content: "겨울",
        type: "D",
        level: 1,
      },
    ],
  }, {
    question: "어떤 활동이 당신을 가장 행복하게 만들나요?",
    answers: [
      {
        content: "독서",
        type: "A",
        level: 1,
      },
      {
        content: "여행",
        type: "B",
        level: 1,
      },
      {
        content: "예술 & 공예",
        type: "C",
        level: 1,
      },
      {
        content: "운동",
        type: "D",
        level: 1,
      },
    ],
  }, {
    question: "친구들과의 모임에서 당신은 주로 어떤 역할을 맡나요?",
    answers: [
      {
        content: "이야기 들어주기",
        type: "A",
        level: 1,
      },
      {
        content: "여행 계획 세우기",
        type: "B",
        level: 1,
      },
      {
        content: "분위기 띄우기",
        type: "C",
        level: 1,
      },
      {
        content: "모임 만들기",
        type: "D",
        level: 1,
      },
    ],
  }, {
    question: "당신이 즐겨 듣는 음악은?",
    answers: [
      {
        content: "팝 또는 발라드",
        type: "A",
        level: 1,
      },
      {
        content: "찬송가",
        type: "B",
        level: 1,
      },
      {
        content: "클래식 또는 재즈",
        type: "C",
        level: 1,
      },
      {
        content: "록 또는 헤비메탈",
        type: "D",
        level: 1,
      },
    ],
  }, {
    question: "당신이 좋아하는 향은?",
    answers: [
      {
        content: "부드러운 꽃 향기",
        type: "A",
        level: 1,
      },
      {
        content: "달콤한 과일향",
        type: "B",
        level: 1,
      },
      {
        content: "묵직한 우드향",
        type: "C",
        level: 1,
      },
      {
        content: "아무 향도 나지 않는 깨끗한 상태",
        type: "D",
        level: 1,
      },
    ],
  }
];

const results = [
  {
    content: "연한 장미빛의 분홍",
    type: "A" as const,
    description: "따뜻하고 친근한 성격, 이해심 깊고 부드러움을 지니고 있습니다. 타인과의 조화를 중요시하며 포근한 분위기를 선호합니다. 아주 섬세하면서도 자상한 면이 있습니다.",
  },{
    content: "석양같이 밝게 빛나는 노랑",
    type: "B" as const,
    description: "긍정적이고 활기찬 성격, 열정적이며 자유로운 영혼을 지니고 있습니다. 새로운 경험을 즐기며 삶을 밝게 바라봅니다. 소통과 사회적인 활동을 중요시하는 편입니다.",
  },{
    content: "숲을 닮은 진한 녹색",
    type: "C" as const,
    description: "신중하고 안정된 성격, 자연과 조용한 환경을 즐기며 평온함을 중요시합니다. 깊이 있는 사고를 가지고 있으며, 미적 감각과 예술적인 면을 갖추고 있습니다.",
  },{
    content: "진한 밤하늘 색 남색",
    type: "D" as const,
    description: "차분하면서도 신비로운 성격, 자기 주관이 뚜렷하며 독립심이 강합니다. 감수성이 풍부하고 심오한 생각을 자주 합니다. 타고난 리더십과 결단력이 있습니다.",
  }
]

export const data = {
  questions,
  results,
};
