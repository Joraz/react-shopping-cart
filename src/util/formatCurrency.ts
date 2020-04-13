export const formatCurrency = (priceInPence: number) =>
  `£${(priceInPence / 100).toFixed(2)}`;
