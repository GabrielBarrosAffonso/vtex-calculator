import React, { Fragment, useState } from 'react'

type Props = {

}

const keys = [
  { print: "1", value: 1, type: "number" },
  { print: "2", value: 2, type: "number" },
  { print: "3", value: 3, type: "number" },
  { print: "4", value: 4, type: "number" },
  { print: "5", value: 5, type: "number" },
  { print: "6", value: 6, type: "number" },
  { print: "7", value: 7, type: "number" },
  { print: "8", value: 8, type: "number" },
  { print: "9", value: 9, type: "number" },
  { print: "0", value: 0, type: "number" }
]

const operators = [
  { value: "*", type: "operator" },
  { value: "+", type: "operator" },
  { value: "/", type: "operator" },
  { value: "-", type: "operator" }
]

function Calculator({ }: Props) {

  const [firstNum, SetFirstNum] = useState<String>("")

  function handleButton(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault()
    let elementType = (e.target as HTMLButtonElement).name
    let elementValue = (e.target as HTMLButtonElement).value
    let firstNumber = ""

    if (elementType == "number") {
      firstNumber = (firstNum + elementValue)
    }

    if (elementType == "operator") {

    }

    SetFirstNum(firstNumber)
  }

  console.log(firstNum)

  return (
    <Fragment>
      <section>
        <div className="">
          {firstNum}
        </div>
        <div>
          {
            keys.map((key, index) => (
              <button name={key.type} value={key.value} key={index} id={`${key.value}`} onClick={handleButton}>{key.print}</button>
            ))
          }
        </div>
        <div>
          {
            operators.map((operator, index) => (
              <button name={operator.type} value={operator.value} key={index} id={`${operator.value}`} onClick={handleButton}>{operator.value}</button>
            ))
          }
        </div>
      </section>
    </Fragment>
  )
}

export default Calculator
