// 중복 제거 함수
export const removeDuplicates = (arr) => {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
};

export const arraysHaveSameElements = (arr1, arr2) => {
  if (arr1[0] !== arr2[0]) {
    return false;
  }

  // 중복 원소 제거 후 정렬
  const uniqueArr1 = [...new Set(arr1)].sort();
  const uniqueArr2 = [...new Set(arr2)].sort();

  if (uniqueArr1.length !== uniqueArr2.length) {
    return false;
  }

  return (
    JSON.stringify(uniqueArr1.slice(1)) === JSON.stringify(uniqueArr2.slice(1))
  );
};
