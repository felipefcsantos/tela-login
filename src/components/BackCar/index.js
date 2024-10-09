import styles from './BackCar.module.css'

const BackCar = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default BackCar