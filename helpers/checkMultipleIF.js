export const checkText = (i, id) =>
  document.getElementById(`${i}-${id}`).innerHTML

export function checkMultipleIF(i, q) {
  if (
    (checkText(i, 1) == q && checkText(i, 2) == q && checkText(i, 3) == q) ||
    (checkText(i, 4) == q && checkText(i, 5) == q && checkText(i, 6) == q) ||
    (checkText(i, 7) == q && checkText(i, 8) == q && checkText(i, 9) == q) ||
    (checkText(i, 1) == q && checkText(i, 5) == q && checkText(i, 9) == q) ||
    (checkText(i, 3) == q && checkText(i, 5) == q && checkText(i, 7) == q) ||
    (checkText(i, 1) == q && checkText(i, 4) == q && checkText(i, 7) == q) ||
    (checkText(i, 2) == q && checkText(i, 5) == q && checkText(i, 8) == q) ||
    (checkText(i, 3) == q && checkText(i, 6) == q && checkText(i, 9) == q)
  ) {
    return true
  } else {
    return false
  }
}
export function checkMainWinner(q) {
  if (
    (checkText(1, 0) == q && checkText(2, 0) == q && checkText(3, 0) == q) ||
    (checkText(4, 0) == q && checkText(5, 0) == q && checkText(6, 0) == q) ||
    (checkText(7, 0) == q && checkText(8, 0) == q && checkText(9, 0) == q) ||
    (checkText(1, 0) == q && checkText(4, 0) == q && checkText(7, 0) == q) ||
    (checkText(2, 0) == q && checkText(5, 0) == q && checkText(8, 0) == q) ||
    (checkText(3, 0) == q && checkText(6, 0) == q && checkText(9, 0) == q) ||
    (checkText(1, 0) == q && checkText(5, 0) == q && checkText(9, 0) == q) ||
    (checkText(3, 0) == q && checkText(5, 0) == q && checkText(7, 0) == q)
  ) {
    return true
  } else {
    return false
  }
}

export function checkWinner(q, i) {
  if (checkMultipleIF(i, q)) {
    document.getElementById(i).style.pointerEvents = 'none'
    return q
  }
}
