import styles from './Source.module.scss';
import { useMemo } from "react";
import { useAppState } from "../../../utils/hooks";

const Source = () => {
  const {source, result, selectedLine } = useAppState();

  if(!source || !result)
    return null;

  const highlightedRows = useMemo(() => {
    const rows = source.split('\n');

    return rows;

  }, [source, result]);

  return (
    <ol className={styles.source}>
      {highlightedRows.map(
        (row, index) => (
          <li
            key={index}
            className={selectedLine && selectedLine - 1 === index ? styles.selected : undefined}
            id={`sl${index+1}`}
          >
            <code>{row}</code>
          </li>
        ))
      }
    </ol>
  );
};

export default Source;
