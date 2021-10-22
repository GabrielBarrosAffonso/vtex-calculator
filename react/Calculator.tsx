import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { keys, operators } from './utils/constants'
import CalculatorVisor from './components/CalculatorVisor/CalculatorVisor'
import CalculatorButton from './components/CalculatorButton/CalculatorButton'

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
      calculate(numberArray, lastOperator)
    }

    SetLastOperator(handleLastOperator)
    SetStringArray(handleStringArray)
    SetNumbersArray(handleNumberArray)
    SetMainNumber('')
  }

  // ----------------------------------------
  function calculate(numbers: number[], operator: string) {
    const useNumbers = numbers
    const [first, second] = useNumbers

    if (operator === '+') {
      finalNumber = first + second
    } else if (operator === '-') {
      finalNumber = first - second
    } else if (operator === '*') {
      finalNumber = first * second
    } else if (operator === '/') {
      finalNumber = first / second
    }

    handleNumberArray = [finalNumber]
    handleStringArray = [finalNumber.toString(), handleLastOperator]
  }

  return (
    <section
      className={`${handles.container} c-muted-1 db tc flex-column w-25`}
    >
      <h1 className="t-heading-4">Calculator</h1>
      <CalculatorVisor printArray={stringArray} printNumber={mainNumber} />
      <div className="flex-wrap">
        {keys.map((key, index) => (
          <CalculatorButton
            key={index}
            buttonVariation="primary"
            buttonPrint={key.print}
            buttonOperation={handleButtonNumber}
          />
        ))}
      </div>
      <div>
        {operators.map((operator, index) => (
          <CalculatorButton
            key={index}
            buttonVariation="secondary"
            buttonPrint={operator.print}
            buttonOperation={handleButtonOperator}
          />
        ))}
      </div>
    </section>
  )
}

export default Calculator
