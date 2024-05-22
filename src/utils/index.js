const toFixedValues = (val = 0) => Number(val)?.toFixed(2);

const formatValue = (value = 0) => {
  return !isNaN(value) ? toFixedValues(value) : '-';
};
// Calculate pnl for individual holding
const pnlValueCalculate = (ltp = 0, quantity = 0, avgPrice = 0) => {
  // Other checks for values such as null, undefined, NaN, etc can be added here
  const pnl = (Number(ltp) - Number(avgPrice)) * Number(quantity);
  return formatValue(pnl);
};

const calcCurrentValue = (ltp = 0, quantity = 0) => {
  const currentValue = Number(ltp) * Number(quantity);
  return formatValue(currentValue);
};

const calTotalInvestmentValue = (avgPrice = 0, quantity = 0) => {
  const totalInvestmentValue = Number(avgPrice) * Number(quantity);
  return formatValue(totalInvestmentValue);
};

const calTotalPnlValue = (quantity = 0, avgPrice = 0, ltp = 0) => {
  const currValue = calcCurrentValue(ltp, quantity);
  const totalInvestmentValue = calTotalInvestmentValue(avgPrice, quantity);
  const totalPnlValue = currValue - totalInvestmentValue;
  return formatValue(totalPnlValue);
};

const calTodaysPnlValue = (close = 0, ltp = 0, quantity = 0) => {
  const value = (Number(close) - Number(ltp)) * Number(quantity);
  return formatValue(value);
};

const getHoldingSummary = (holdings = []) => {
  const initialValue = {
    currentValue: 0,
    investmentValue: 0,
    todaysPnlValue: 0,
    totalPnlValue: 0,
  };

  const holdingsSummary = holdings?.reduce((acc, curr) => {
    const {avgPrice, close, ltp, quantity} = curr;
    const currentValue = calcCurrentValue(ltp, quantity);
    const investmentValue = calTotalInvestmentValue(avgPrice, quantity);

    const todaysPnl = calTodaysPnlValue(close, ltp, quantity);
    const totalPnl = calTotalPnlValue(quantity, avgPrice, ltp);

    acc.currentValue += Number(currentValue);
    acc.investmentValue += Number(investmentValue);
    acc.todaysPnlValue += Number(todaysPnl);
    acc.totalPnlValue += Number(totalPnl);
    return acc;
  }, initialValue);

  return holdingsSummary;
};

const holdingUtils = {
  pnlValueCalculate: pnlValueCalculate,
  calcCurrentValue: calcCurrentValue,
  calTotalInvestmentValue: calTotalInvestmentValue,
  calTotalPnlValue: calTotalPnlValue,
  getHoldingSummary: getHoldingSummary,
};
export default holdingUtils;
