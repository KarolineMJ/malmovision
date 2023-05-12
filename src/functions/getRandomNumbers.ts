import { BingoText } from '../data/bingeData'

const guessNumber = 20
export const getRandomNumbers = () => {
  var array = [] as number[]

  while (array.length < guessNumber) {
    var r = Math.floor(Math.random() * BingoText.length) + 1
    if (array.indexOf(r) === -1) array.push(r)
  }
  localStorage.numbers = JSON.stringify(array)

  return array
}

export const getRandomItem = ({ arr }: { arr: string[] }) => {
  var storedNumbers: number[] = JSON.parse(localStorage.numbers)

  let testArr = [] as string[]
  if (storedNumbers.length === guessNumber) {
    storedNumbers?.map(array1 => {
      arr.find((_, index) => {
        if (index === array1) {
          testArr.push(_)
        }

        return index === array1
      })
    })
  } else {
    const numbers = getRandomNumbers()
    numbers.map(array1 => {
      arr.find((_, index) => {
        if (index === array1) {
          testArr.push(_)
        }

        return index === array1
      })
    })
  }
  return testArr
}
