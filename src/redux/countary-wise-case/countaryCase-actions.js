import axios from "axios";
export const getCountryCase = (country) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.thevirustracker.com/free-api?countryTotals=ALL"
    );
    let countryExists = false;
    const countryitems = { ...data.countryitems[0] };
    for (let index in countryitems) {
      if (countryitems[index].title === country) {
        countryExists = true;
        dispatch({
          type: "GET_COUNTRY_CASE",
          payload: { ...countryitems[index] },
        });
        return;
      }
    }
    if (!countryExists)
      return dispatch({
        type: "COUNTRY_NOT_EXIST",
        payload:
          "The country name you entered either does not exist or is not a correct country name!",
      });
  } catch (err) {
    dispatch({ type: "ERROR", payload: err.message });
    console.log(err);
  }
};
