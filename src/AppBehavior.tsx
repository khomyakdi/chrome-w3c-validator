import React, { createContext, useState } from "react";
import { ValidationMessage } from "./types";

type ValidationResult = ValidationMessage[];

type AppState = {
  loading: boolean;
  result?: ValidationResult;
  source?: string;
  selectedLine?: number;
};

const defaultState: AppState = {
  loading: false,
};

type AppActions = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setResult: React.Dispatch<React.SetStateAction<ValidationResult | undefined>>
  setSource: React.Dispatch<React.SetStateAction<string | undefined>>
  setSelectedLine: React.Dispatch<React.SetStateAction<number | undefined>>
};

const defaultActions: AppActions = {
  setLoading: () => {},
  setResult: () => {},
  setSource: () => {},
  setSelectedLine: () => {},
};

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
  const [source, setSource] = useState<string>();
  const [selectedLine, setSelectedLine] = useState<number>();

  const state = {
    loading,
    result,
    source,
    selectedLine
  };

  const actions: AppActions= {
    setLoading,
    setResult,
    setSource,
    setSelectedLine,
  };

  return (
    <AppContext.Provider value={{state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

