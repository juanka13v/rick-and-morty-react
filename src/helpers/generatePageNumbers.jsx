function generatePageNumbers(page, pages) {
  let startPage = Math.max(2, page - 3);
  let endPage = Math.min(pages - 1, page + 4);

  if (page < 4) {
    startPage = 1;
    endPage = Math.min(7, pages);
  }

  if (page > pages - 3) {
    startPage = Math.max(pages - 6, 1);
    endPage = pages;
  }

  let numbers = [];
  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  return numbers;
}

export default generatePageNumbers
