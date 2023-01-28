import { createContext } from 'react'
import { Image, ProductState } from '../types'

type ProductContextProps = {
  state: ProductState
  setSelectedImage: (image: Image) => void
}

const ProductContext = createContext({} as ProductContextProps)

export default ProductContext
