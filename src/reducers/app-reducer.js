const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GREET':
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
