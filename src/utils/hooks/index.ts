import { useContext } from "react";
import { AppContext } from "../../AppBehavior";

export const useAppState = () => {
  const { state } = useContext(AppContext);

  return state;
};

export const useAppActions = () => {
  const { actions } = useContext(AppContext);

  return actions;
};
