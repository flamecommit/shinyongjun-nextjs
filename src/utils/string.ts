export function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) {
    return input; // 빈 문자열일 경우 변환 없이 반환
  }

  const firstLetter = input[0].toUpperCase(); // 첫 글자를 대문자로 변환
  const restOfString = input.slice(1); // 첫 글자를 제외한 나머지 부분

  return firstLetter + restOfString;
}
