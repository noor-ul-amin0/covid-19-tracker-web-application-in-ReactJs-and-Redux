import axios from "axios";

export const getGlobalCases = () => async (dispatch) => {
  dispatch({ type: "MAKE_REQUEST" });
  try {
    const { data } = await axios(
      "https://api.thevirustracker.com/free-api?global=stats"
    );
    dispatch({ type: "GLOBAL_CASES", payload: data.results[0] });
  } catch (error) {
    dispatch({ type: "GLOBAL_CASES_ERROR", payload: error.message });
    // console.log("from global cases actions error==>", error);
  }
};
