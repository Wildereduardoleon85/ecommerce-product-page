import { useMemo, useReducer } from 'react'
import ProductContext from './ProductContext'
import productReducer from './productReducer'

type ProductProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: { counter: number } = {
  counter: 1,
}

function ProductProvider({ children }: ProductProviderProps) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  function setCounter() {
    dispatch({
      type: 'setCounter',
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      setCounter,
    }),
    [state, dispatch]
  )

  return (
    <ProductContext.Provider value={memoizedState}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
