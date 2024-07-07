const truncateText = (text, decimalDecimal) => {
  if (text.length > 6) {
    return text.slice(0, decimalDecimal) + "..." + text.slice(-decimalDecimal);
  }
  return text;
};

export default truncateText;
