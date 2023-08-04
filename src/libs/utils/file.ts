/**
 * 파일명에서 확장자 추출
 */
export const getExtensionOfFilename = (filename: string) => {
  const lastDotIndex = filename.lastIndexOf('.');

  if (lastDotIndex === -1) {
    return '';
  }

  const extension = filename.slice(lastDotIndex + 1);
  return extension;
};
