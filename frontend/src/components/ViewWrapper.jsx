import styles from "./ViewWrapper.module.css";

const ViewWrapper = ({ children }) => {
  return (
    <div className={styles.viewWrapper}>
      {children}
    </div>
  );
}

export default ViewWrapper;