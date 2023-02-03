import { useMemo, useReducer } from 'react'
import { ProductState } from '../types'
import ProductContext from './ProductContext'
import productReducer from './productReducer'

type ProductProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: ProductState = {
  cartItems: 2,
  productImagesActiveIndex: 0,
  isModalOpen: false,
  showCart: false,
  isSidebarOpen: false,
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

  function setCartItems(item: number) {
    dispatch({
      type: 'setCartItems',
      payload: item,
    })
  }

  function setShowCart(shouldShowCart: boolean) {
    dispatch({
      type: 'setShowCart',
      payload: shouldShowCart,
    })
  }

  function setIsSidebarOpen(isSidebarOpen: boolean) {
    dispatch({
      type: 'setIsSidebarOpen',
      payload: isSidebarOpen,
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      setProductImagesActiveIndex,
      setIsModalOpen,
      setCartItems,
      setShowCart,
      setIsSidebarOpen,
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
