import styles from "./BoxGlass.module.css";

const BoxGlass = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
};

export default BoxGlass;
