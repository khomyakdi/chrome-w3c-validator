import styles from './Result.module.scss';
import { useAppState } from "../../utils/hooks";
import EverythingGoodMessage from "./EverythingGoodMessage";
import {ValidationMessage } from "../../components/objects/ValidationMessage";
import { Source } from '../../components/objects/Source';

const ResultSection = () => {
  const {result} = useAppState();
  
  if(!result)
    return null;

  if(!result.length)
    return <EverythingGoodMessage />;

  return (
    <>
      <ol className={styles.list}>
        {result.map((message, index) => (
          <li key={index}>
            <ValidationMessage message={message} />
          </li>
        ))}
      </ol>
      <Source />
    </>
  );
};

export default ResultSection;
