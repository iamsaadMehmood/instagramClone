const changeCount = (total: number) => {
  return total >= 1000000
    ? (total / 1000000).toString() + 'M'
    : total >= 1000
    ? (total / 1000).toString() + 'K'
    : total.toString();
};
export {changeCount};
