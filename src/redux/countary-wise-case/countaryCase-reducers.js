const INITIAL_STATE = {
  countryCase: null,
  notExistMsg: "",
  loading: true,
  error: null,
};

const countryCaseReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MAKE_REQUEST":
      return {
        loading: true,
      };
    case "GET_COUNTRY_CASE":
      return {
        ...state,
        loading: false,
        countryCase: { ...action.payload },
      };
    case "COUNTRY_NOT_EXIST":
      return {
        ...state,
        loading: false,
        countryCase: null,
        notExistMsg: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        notExistMsg: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
export default countryCaseReducers;
