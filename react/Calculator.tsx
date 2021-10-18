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
  { value: '*' },
  { value: '+' },
  { value: '/' },
  { value: '-' },
]

function Calculator() {
  const [firstNum, SetFirstNum] = useState<string>('')
  const [operationArray, SetOperationArray] = useState<string[]>([])

  function handleButton(e: React.MouseEvent) {
    e.preventDefault()
    const elementValue = (e.target as HTMLButtonElement).innerHTML
    let firstNumber = ''

    firstNumber = firstNum + elementValue
    SetFirstNum(firstNumber)
  }

  function handleButtonOperator(e: React.MouseEvent) {
    e.preventDefault()
    if (firstNum !== '') {
      operationArray.push(firstNum)
      operationArray.push((e.target as HTMLButtonElement).innerHTML)
    }

    SetOperationArray(operationArray)
    SetFirstNum('')
  }

  function handleButtonEqual(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault()
  }

  return (
    <Fragment>
      <h1 className="t-heading-4">Calculator</h1>
      <section>
        <div id="visor" className="bg-light-silver pa4">
          {operationArray.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
          {<span>{firstNum}</span>}
        </div>
        <div id="first-num-keys">
          {keys.map((key, index) => (
            <Button
              variation="primary"
              value={key.value}
              key={index}
              id={`${key.value}`}
              onClick={handleButton}
            >
              {key.print}
            </Button>
          ))}
        </div>
        <div id="operator">
          {operators.map((operator, index) => (
            <Button
              variation="secondary"
              value={operator.value}
              key={index}
              id={`${operator.value}`}
              onClick={handleButtonOperator}
            >
              {operator.value}
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
