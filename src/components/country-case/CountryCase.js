import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryCase } from "../../redux/countary-wise-case/countaryCase-actions";
import Wraper from "../wraper/Wraper";

const filterCountaryName = (country) => {
  if (
    country.toUpperCase() === "US" ||
    country.toUpperCase() === "AMERICA" ||
    country.toUpperCase() === "USA"
  )
    return "USA";
  if (country.toUpperCase() === "UAE") return "UAE";

  let filteredName = "";
  for (let char = 0; char < country.length; char++) {
    if (char === 0) {
      filteredName += country[char].toUpperCase();
    } else if (country[char - 1] === " ") {
      filteredName += country[char].toUpperCase();
    } else {
      filteredName += country[char].toLowerCase();
    }
  }
  return filteredName;
};

function CountryCase(props) {
  const { country } = props.match.params;
  const { loading, error, countryCase, notExistMsg } = useSelector(
    (state) => state.countryCase
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCountryCase(filterCountaryName(country)));
  }, []);

  return (
    <Wraper
      loading={loading}
      error={error}
      title={
        notExistMsg
          ? "INVALID COUNTRY NAME IS PROVIDED! TRY CORRECT ONE."
          : `CORONA CASES IN ${country.toUpperCase()}`
      }
      info={countryCase}
      notExistMsg={notExistMsg}
      barChartLabel={
        notExistMsg
          ? "INVALID COUNTRY NAME IS PROVIDED! TRY CORRECT ONE."
          : `Chart Bar of Corona Cases in ${country}`
      }
    />
  );
}

export default CountryCase;
