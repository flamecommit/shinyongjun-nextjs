export const capitalizeString = (input: string): string =>
  input.length ? input[0].toUpperCase() + input.slice(1) : input;
