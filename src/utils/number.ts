/**
 * 3자리 마다 (,) comma를 추가하는 함수, 유리수도 지원
 */
export const addCommas = (value: string | number): string => {
  const formatIntegerPart = (integerPart: string): string =>
    integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [integerPart, decimalPart = ''] = value.toString().split('.');
  return `${formatIntegerPart(integerPart)}${
    decimalPart ? `.${decimalPart}` : ''
  }`;
};
