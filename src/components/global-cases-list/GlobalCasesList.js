import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGlobalCases } from "../../redux/global-cases/globalCases-actions";
import Wraper from "../wraper/Wraper";

const GlobalCasesList = () => {
  const { loading, globalCases, error } = useSelector(
    (state) => state.globalCases
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGlobalCases());
    return () => {};
  }, []);
  return (
    <Wraper
      loading={loading}
      error={error}
      title="GLOBAL CONDITION OF WORLD"
      info={globalCases}
      barChartLabel="Chart Bar of Global Corona Cases"
    />
  );
};
export default GlobalCasesList;
