import React, { useMemo } from "react";
import { useAppState } from "../../../utils/hooks";

const Source = () => {
  const {source, result} = useAppState();

  if(!source || !result)
    return null;

  const highlightedRows = useMemo(() => {
    const rows = source.split('\n');

    return rows;

  }, [source, result]);

  return (
    <ul>
      {highlightedRows.map(
        (row, index) => (
          <li key={index}>
            <b id={`sl${index+1}`}>{index+1}</b>
            <code>{row}</code>
          </li>
        ))
      }
    </ul>
  );
};

export default Source;
