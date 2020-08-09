const INITIAL_STATE = {
  globalCases: null,
  loading: true,
  error: null,
};
const totalCasesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MAKE_REQUEST":
      return {
        loading: true,
      };
    case "GLOBAL_CASES":
      return {
        ...state,
        loading: false,
        globalCases: { ...action.payload },
      };
    case "GLOBAL_CASES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default totalCasesReducers;
