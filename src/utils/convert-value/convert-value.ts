export const getTotalPageCount = (itemsCount: number) => {
  return Math.ceil(itemsCount / 10);
};
