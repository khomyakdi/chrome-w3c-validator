import styles from './Source.module.scss';
import { useMemo } from "react";
import { useAppState } from "../../../utils/hooks";

const Source = () => {
  const {source, result, selectedLine } = useAppState();

  const rows = useMemo(() => {
    if(!source || !result)
      return [];

    const rows = source.split('\n');

    return rows;
  }, [source, result]);
  
  if(!rows)
    return null;

  return (
    <ol className={styles.source}>
      {rows.map(
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
