import React, { createContext, useState } from "react"
import { ValidationMessage } from "./types";

type ValidationResult = ValidationMessage[];

type AppState = {
  loading: boolean;
  result?: ValidationResult;
};

const defaultState: AppState = {
  loading: false,
};

type AppActions = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setResult: React.Dispatch<React.SetStateAction<ValidationResult | undefined>>
};

const defaultActions: AppActions = {
  setLoading: () => {},
  setResult: () => {},
}

type Context = {
  state: AppState,
  actions: AppActions,
};

const defaultContext: Context =  {
  state: defaultState,
  actions: defaultActions,
};

export const AppContext = createContext(defaultContext);

export const AppBehavior: React.FC = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult>();

  const state = {
    loading,
    result,
  };

  const actions: AppActions= {
    setLoading,
    setResult,
  }

  return (
    <AppContext.Provider value={{state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

