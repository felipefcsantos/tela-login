import styles from "./ButtonGlass.module.css";

const ButtonGlass = ({ children, type = "button", onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonGlass;
