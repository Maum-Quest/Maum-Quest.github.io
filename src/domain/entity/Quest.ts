export type QuestType = "BCDLS"

interface Answer {
  content: string
  type: string | string[]
  level: number
}

type PersonalityType = "Lovely" | "Bright" | "Cool" | "Dark" | "Serious"
type PersonalityResult =  "BB" | "CC" | "DD" | "LL" | "SS" | "BL" | "CL" | "DL" | "LS" | "BC" | "BD" | "BS" | "CD" | "CS" | "DS"

export interface PersonalityAnswer extends Answer {
  type: PersonalityType | PersonalityType[]
}


class Quest {
  static getContent() {
    return {}
  }

  static getPersonalityResult(selectedAnswers: PersonalityAnswer[]): PersonalityResult {
    const count: Record<PersonalityType, number> = {
      "Lovely": 0,
      "Bright": 0,
      "Cool": 0,
      "Dark": 0,
      "Serious": 0,
    }
    selectedAnswers.forEach((answer) => {
      if (typeof answer.type === 'string') {
        count[answer.type] += answer.level
      } else {
        answer.type.forEach((type) => {
          count[type] += answer.level
        })
      }
    })
    const order: PersonalityType[] = Object.keys(count) .sort((a, b) => count[a as PersonalityType] > count[b as PersonalityType] ? - 1 : 1) as PersonalityType[]
    const result = [
      order[0][0],
      count[order[0]] >= count[order[1]] * 2 ? order[0][0] : order[1][0]
    ]
    console.log(selectedAnswers)
    return result.sort().join('') as PersonalityResult
  }
}

export default Quest;
