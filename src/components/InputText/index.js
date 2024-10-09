import styles from './InputText.module.css'

const InputText = ({ placeholder, type = "text", onChange }) => {
  return (
    <input 
        placeholder={placeholder} 
        type={type} 
        onChange={onChange}
        className={styles.input}
    />
  );
};

export default InputText;
