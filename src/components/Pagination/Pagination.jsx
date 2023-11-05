import styles from "./Pagination.module.css";
import generatePageNumbers from "../../helpers/generatePageNumbers";
import scrollToTop from "../../helpers/scrollToTop";

const Pagination = ({ info, currentPage, handlePage }) => {
  const pages = generatePageNumbers(currentPage, info?.pages);

  if (!currentPage || !info?.pages) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <span
          className={`${styles.btn} ${styles.item}`}
          onClick={() => {
            handlePage(currentPage - 1);
          }}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </span>
      )}

      {pages.map((page) => (
        <span
          className={`${styles.item} ${page === currentPage && styles.active}`}
          onClick={() => {
            handlePage(page);
          }}
          key={page}
        >
          {page}
        </span>
      ))}

      {currentPage < info?.pages && (
        <span
          className={`${styles.btn} ${styles.item}`}
          onClick={() => {
            handlePage(currentPage + 1);
          }}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </span>
      )}
    </div>
  );
};

export default Pagination;
