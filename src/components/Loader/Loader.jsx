import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.container}>
        <i className='bx bx-loader bx-spin'></i>
    </div>
  )
}

export default Loader
