import { createContext } from 'react'
import { ProductState } from '../types'

type ProductContextProps = {
  state: ProductState
  setProductImagesActiveIndex: (index: number) => void
  setIsModalOpen: (isModalOpen: boolean) => void
  setCartItems: (items: number) => void
  setShowCart: (shouldShowCart: boolean) => void
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
}

const ProductContext = createContext({} as ProductContextProps)

export default ProductContext
