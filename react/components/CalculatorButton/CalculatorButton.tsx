import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Button } from 'vtex.styleguide'

type Props = {
  buttonVariation: string
  buttonPrint: string
  buttonOperation: (e: React.MouseEvent) => void
}

const CSS_HANDLES = ['numberButtons']

function CalculatorButton({
  buttonVariation,
  buttonPrint,
  buttonOperation,
}: Props) {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <Button
      className={`${handles.numberButtons}`}
      variation={buttonVariation}
      value={buttonPrint}
      id={buttonPrint}
      onClick={buttonOperation}
    >
      {buttonPrint}
    </Button>
  )
}

export default CalculatorButton
