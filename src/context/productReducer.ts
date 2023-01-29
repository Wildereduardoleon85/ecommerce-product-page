import { ProductState } from '../types'

type ProductAction =
  | { type: 'setProductImagesActiveIndex'; payload: number }
  | { type: 'setIsModalOpen'; payload: boolean }

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

    default:
      return state
  }
}

export default productReducer
