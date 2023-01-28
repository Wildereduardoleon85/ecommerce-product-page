import { createContext } from 'react'

type ProductContextProps = {
  //     // state
  //   state: StepState
  //   // actions
  //   updateStep: (step: Steps) => void
}

const ProductContext = createContext({} as ProductContextProps)

export default ProductContext
