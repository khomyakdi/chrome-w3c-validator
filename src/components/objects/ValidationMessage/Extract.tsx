import styles from './ValidationMessage.module.scss';

type Props = {
  extract?: string;
  start: number;
  length: number;
}

function Extract({
  extract,
  start,
  length,
}: Props) {
  if(!extract)
    return null;
  
  const firstPart = extract.substring(0, start),
    highlightedPart = extract.substring(start, start +length),
    lastPart = extract.substring(start + length);
    
  return (
    <code>
      {firstPart}
      <span className={styles.highlighted}>{highlightedPart}</span>
      {lastPart}
    </code>
  );
}

export default Extract;