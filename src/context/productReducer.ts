// type ProductAction = { type: 'setCounter' }

function productReducer(state: any, action: any): any {
  switch (action.type) {
    case 'setCounter':
      return {
        ...state,
        counter: state.counter + 1,
      }

    default:
      return state
  }
}

export default productReducer
