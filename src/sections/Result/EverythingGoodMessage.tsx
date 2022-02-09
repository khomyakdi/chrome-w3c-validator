import styles from './Result.module.scss';

const EverythingGoodMessage = () => {
  return (
    <div className={styles["all-good"]}>
      Document checking completed. No errors or warnings to show.
    </div>
  );
};

export default EverythingGoodMessage;
