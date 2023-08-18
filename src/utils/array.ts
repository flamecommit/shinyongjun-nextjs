import { getPitch } from '@/services/chord';

// 중복 제거 함수
export const removeDuplicates = (arr: any[]) => {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
};

export const arraysHaveSameElements = (arr1: any[], arr2: any[]) => {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  const uniqueArr1 = removeDuplicates(arr1).sort();
  const uniqueArr2 = removeDuplicates(arr2).sort();

  if (uniqueArr1.length !== uniqueArr2.length) {
    return false;
  }

  return JSON.stringify(uniqueArr1) === JSON.stringify(uniqueArr2);
};

export const arraysHaveElements = (arr1: any[], arr2: any[]) => {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  const uniqueArr1 = removeDuplicates(arr1).sort();
  const uniqueArr2 = removeDuplicates(arr2).sort();

  return uniqueArr1.every((item1) => uniqueArr2.includes(item1));
};
