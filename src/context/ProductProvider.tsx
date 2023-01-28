import { useMemo, useReducer } from 'react'
import { images } from '../components/constants'
import { Image, ProductState } from '../types'
import ProductContext from './ProductContext'
import productReducer from './productReducer'

type ProductProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: ProductState = {
  selectedImage: images[0],
}

function ProductProvider({ children }: ProductProviderProps) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  function setSelectedImage(image: Image) {
    dispatch({
      type: 'setSelectedImage',
      payload: image,
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      setSelectedImage,
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
