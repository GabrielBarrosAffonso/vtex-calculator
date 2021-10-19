import React, { Fragment, useState } from 'react'
import { Button } from 'vtex.styleguide'

const keys = [
  { print: '1', value: 1 },
  { print: '2', value: 2 },
  { print: '3', value: 3 },
  { print: '4', value: 4 },
  { print: '5', value: 5 },
  { print: '6', value: 6 },
  { print: '7', value: 7 },
  { print: '8', value: 8 },
  { print: '9', value: 9 },
  { print: '0', value: 0 },
]

const operators = [
  { print: '*' },
  { print: '+' },
  { print: '/' },
  { print: '-' },
]

function Calculator() {
  const [mainNumber, SetMainNumber] = useState<string>('')
  const [lastOperator, SetLastOperator] = useState<string>('')
  const [stringArray, SetStringArray] = useState<string[]>([])
  const [numberArray, SetNumbersArray] = useState<number[]>([])

  let handleStringArray = stringArray
  let handleNumberArray = numberArray
  let handleLastOperator = lastOperator
  let finalNumber = 0

  // ---------------------------------------
  function handleButtonNumber(e: React.MouseEvent) {
    e.preventDefault()
    const elementValue = (e.target as HTMLButtonElement).innerHTML
    let thisNumber = ''

    thisNumber = mainNumber + elementValue
    SetMainNumber(thisNumber)
  }

  // ---------------------------------------
  function handleButtonOperator(e: React.MouseEvent) {
    e.preventDefault()
    handleNumberArray.push(parseFloat(mainNumber))
    handleLastOperator = (e.target as HTMLButtonElement).innerHTML
    handleStringArray.push(mainNumber)
    handleStringArray.push(handleLastOperator)

    if (numberArray.length === 2) {
      calculator(numberArray, lastOperator)
    }

    SetLastOperator(handleLastOperator)
    SetStringArray(handleStringArray)
    SetNumbersArray(handleNumberArray)
    SetMainNumber('')
  }

  // ---------------------------------------
  function handleButtonEqual(e: React.MouseEvent) {
    e.preventDefault()
  }

  // ----------------------------------------
  function calculator(numbers: number[], operator: string) {
    const firstNumber = numbers[0]
    const secondNumber = numbers[1]

    if (operator === '+') {
      finalNumber = firstNumber + secondNumber
    }

    if (operator === '-') {
      finalNumber = firstNumber - secondNumber
    }

    if (operator === '*') {
      finalNumber = firstNumber - secondNumber
    } else if (operator === '/') {
      finalNumber = firstNumber / secondNumber
    }

    handleNumberArray = [finalNumber]
    handleStringArray = [finalNumber.toString(), handleLastOperator]
  }

  return (
    <Fragment>
      <h1 className="t-heading-4">Calculator</h1>
      <section>
        <div id="visor" className="bg-light-silver pa4">
          {stringArray.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
          {<span>{mainNumber}</span>}
        </div>
        <div id="first-num-keys">
          {keys.map((key, index) => (
            <Button
              variation="primary"
              value={key.value}
              key={index}
              id={`${key.value}`}
              onClick={handleButtonNumber}
            >
              {key.print}
            </Button>
          ))}
        </div>
        <div id="operator">
          {operators.map((operator, index) => (
            <Button
              variation="secondary"
              value={operator.print}
              key={index}
              id={`${operator.print}`}
              onClick={handleButtonOperator}
            >
              {operator.print}
            </Button>
          ))}
        </div>
        <div id="equal">
          <button onClick={handleButtonEqual}>=</button>
        </div>
      </section>
    </Fragment>
  )
}

export default Calculator
