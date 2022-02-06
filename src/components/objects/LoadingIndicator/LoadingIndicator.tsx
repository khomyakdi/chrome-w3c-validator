import { useContext } from "react";
import { AppContext } from "../../../AppBehavior";

const LoadingIndicator = () => {
  const {state: { loading }} = useContext(AppContext);

  if(!loading)
    return null;

  return <div>loading</div>;
};

export default LoadingIndicator;
