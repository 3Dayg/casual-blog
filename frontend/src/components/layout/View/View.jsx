import styles from "./View.module.css";

const View = ({ children }) => {
  return (
    <div className={styles.view}>
      {children}
    </div>
  );
}

export default View;