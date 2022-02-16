import styles from './ValidationMessage.module.scss';

type Props = {
  firstLine: number;
  lastLine: number;
  firstColumn?: number;
  lastColumn: number;
}

const Location = (props: Props) => {
  const  {
    firstLine,
    lastLine,
    firstColumn,
    lastColumn,
  } = props;
  const locationString = `From line ${firstLine || lastLine}, column ${firstColumn}; to line ${lastLine}, column ${lastColumn}`
  
  return (
    <div className={styles.location}>{locationString}</div>
  )
}

export default Location