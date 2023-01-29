import { useMemo, useReducer } from 'react'
import { ProductState } from '../types'
import ProductContext from './ProductContext'
import productReducer from './productReducer'

type ProductProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: ProductState = {
  productImagesActiveIndex: 0,
  isModalOpen: true,
}

function ProductProvider({ children }: ProductProviderProps) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  function setProductImagesActiveIndex(index: number) {
    dispatch({
      type: 'setProductImagesActiveIndex',
      payload: index,
    })
  }

  function setIsModalOpen(isModalOpen: boolean) {
    dispatch({
      type: 'setIsModalOpen',
      payload: isModalOpen,
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      setProductImagesActiveIndex,
      setIsModalOpen,
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
