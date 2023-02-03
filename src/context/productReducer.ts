import { ProductState } from '../types'

type ProductAction =
  | { type: 'setProductImagesActiveIndex'; payload: number }
  | { type: 'setIsModalOpen'; payload: boolean }
  | { type: 'setCartItems'; payload: number }
  | { type: 'setShowCart'; payload: boolean }
  | { type: 'setIsSidebarOpen'; payload: boolean }

function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case 'setProductImagesActiveIndex':
      return {
        ...state,
        productImagesActiveIndex: action.payload,
      }

    case 'setIsModalOpen':
      return {
        ...state,
        isModalOpen: action.payload,
      }

    case 'setCartItems':
      return {
        ...state,
        cartItems: action.payload,
      }

    case 'setShowCart':
      return {
        ...state,
        showCart: action.payload,
      }

    case 'setIsSidebarOpen':
      return {
        ...state,
        isSidebarOpen: action.payload,
      }

    default:
      return state
  }
}

export default productReducer
