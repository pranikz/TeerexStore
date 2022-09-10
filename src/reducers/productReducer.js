export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_COLOR":
      return { ...state, byColor: [...state.byColor, action.payload] };
    case "FILTER_BY_GENDER":
      return { ...state, byGender: [...state.byGender, action.payload] };
    case "FILTER_BY_PRICE":
      return { ...state, byPrice: action.payload };
    case "FILTER_BY_TYPE":
      return { ...state, byType: [...state.byType, action.payload] };
    case "SEARCH_FILTER":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byColor: [], byGender: [], byPrice: [], byType: [] };
    default:
      return state;
  }
};
