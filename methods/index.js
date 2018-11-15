const countCharFn = (char, array) => {
  return array.filter(item => item === char).length;
};
const withoutSpacesFn = text => {
  return text.split('').filter(item => item !== ' ');
};
const textArrFn = text => {
  return text.split(' ').filter(item => item !== '');
};
const charArrFn = text => {
  return text
    .split('')
    .filter(
      item => item !== ' ' && item !== '2' && item !== ',' && item !== '.'
    )
    .sort();
};

module.exports = { withoutSpacesFn, countCharFn, textArrFn, charArrFn };
