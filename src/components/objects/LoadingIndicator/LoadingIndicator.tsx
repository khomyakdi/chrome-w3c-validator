import styles from './LoadingIndicator.module.scss';
import { useContext } from "react";
import { AppContext } from "../../../AppBehavior";

const LoadingIndicator = () => {
  const {state: { loading }} = useContext(AppContext);

  if(!loading)
    return null;

  return <div className={styles.indicator}/>;
};

export default LoadingIndicator;
