import styles from './ValidationMessage.module.scss';

type Props = {
  type: 'error' | 'warning' | 'Info';
};

const Type = ({ type }: Props) => <div className={styles.type}>{type}</div>;

export default Type