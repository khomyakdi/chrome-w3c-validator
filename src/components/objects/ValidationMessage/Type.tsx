import styles from './ValidationMessage.module.scss';

type Props = {
  type: 'error' | 'warning' | 'Info';
};

function Type({ type }: Props) {
  return (
    <div className={styles.type}>{type}</div>
  )
}

export default Type