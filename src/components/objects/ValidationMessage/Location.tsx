import { useAppActions } from '../../../utils/hooks';
import styles from './ValidationMessage.module.scss';

type Props = {
  firstLine?: number;
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
  const { setSelectedLine } = useAppActions();
  const locationString = `From line ${firstLine || lastLine}, column ${firstColumn || lastColumn}; to line ${lastLine}, column ${lastColumn}`;
  
  const onClick = () => setSelectedLine(firstLine || lastLine);

  return (
    <div className={styles.location}>
      <a onClick={onClick} href={`#sl${firstLine || lastLine}`}>{locationString}</a></div>
  );
};

export default Location;