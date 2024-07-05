const truncateNumber = (number, decimalDegit) => {
  parseFloat((Math.ceil(number * 100) / 100).toFixed(decimalDegit));
  return number;
};

export default truncateNumber;
