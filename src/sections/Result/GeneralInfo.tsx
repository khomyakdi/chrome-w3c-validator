import styles from './Result.module.scss';
import { ValidationMessage } from "../../types";

type Props = {
  result: ValidationMessage[];
};

function GeneralInfo({ result }: Props) {
  const info =  {
    warnings: 0,
    errors: 0,
  };

  result.forEach(message => {
    if(message.type === 'error')
      info.errors = info.errors + 1;

    if(message.type === 'info' && message.subType === 'warning')
      info.warnings = info.warnings + 1;
  });

  return (
      <table className={styles.general}>
        <caption>General Info:</caption>
        <tbody>
          <tr>
            <th scope="row">Warnings</th>
            <td>{info.warnings}</td>
          </tr>
          <tr>
            <th scope="row">Errors</th>
            <td>{info.errors}</td>
          </tr>
        </tbody>
      </table>
  );
}

export default GeneralInfo;
