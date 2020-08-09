import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL = "https://api.thevirustracker.com/free-api?global=stats";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, globalCases: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default function useFetchGlobalCases() {
  const [state, dispatch] = useReducer(reducer, {
    globalCases: null,
    loading: true,
  });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
      })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: data.results[0] });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
    };
  });

  return state;
}
