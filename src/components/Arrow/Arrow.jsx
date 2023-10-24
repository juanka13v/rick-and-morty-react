import styles from "./Arrow.module.css"

const Arrow = ({direction, onClick, className}) => {
  return (
    <button  className={`${className} ${styles.button}`} onClick={onClick}>
      <i className={`bx bx-${direction}-arrow`} ></i>
    </button>
  )
}

export default Arrow
