import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  printArray: string[]
  printNumber: string
}

const CSS_HANDLES = ['visor', 'visorText']

function CalculatorVisor({ printNumber, printArray }: Props) {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.visor} bg-light-silver pa4 w-100 h2`}>
      {printArray.map((value, index) => (
        <span className={`${handles.visorText}`} key={index}>
          {value}
        </span>
      ))}
      {<span>{printNumber}</span>}
    </div>
  )
}

export default CalculatorVisor
