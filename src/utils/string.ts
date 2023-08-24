/**
 * 첫 글자를 알파벳 대문자로 바꿔주는 함수
 * ex: hello world => Hello world
 */
export const capitalizeString = (input: string): string =>
  input.length ? input[0].toUpperCase() + input.slice(1) : input;
