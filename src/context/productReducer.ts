import { Image, ProductState } from '../types'

type ProductAction = { type: 'setSelectedImage'; payload: Image }

function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case 'setSelectedImage':
      return {
        ...state,
        selectedImage: action.payload,
      }

    default:
      return state
  }
}

export default productReducer
