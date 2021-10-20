import React, { Fragment, useState } from 'react'
import { Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import { keys, operators } from './data/objects'

const CSS_HANDLES = [
  'container',
  'numberButtons',
  'operatorButtons',
  'equalButton',
  'visor',
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

  const { handles } = useCssHandles(CSS_HANDLES)

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
      <section className={`${handles.container} c-muted-1 db tc`}>
        <div className={`${handles.visor} bg-light-silver pa4`}>
          {stringArray.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
          {<span>{mainNumber}</span>}
        </div>
        <div>
          {keys.map((key, index) => (
            <Button
              className={`${handles.numberButtons}`}
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
        <div>
          {operators.map((operator, index) => (
            <Button
              className={`${handles.operatorButtons}`}
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
        <div>
          <button
            className={`${handles.equalButton}`}
            onClick={handleButtonEqual}
          >
            =
          </button>
        </div>
      </section>
    </Fragment>
  )
}

export default Calculator
