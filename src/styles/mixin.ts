import { css } from 'styled-components';

export const reset = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  vertical-align: top;
  text-underline-position: under;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
`;

export const ellipsis = (line: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
`;

export const device = {
  mobile: `(max-width: 768px)`,
};
