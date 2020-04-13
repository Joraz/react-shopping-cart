export const getDiscountAmountFromCode = (discount: string): number => {
  if (discount === "FRUITY10") {
    return 10;
  }

  if (discount === "FRUITY30") {
    return 30;
  }

  return 0;
};
