export const truncate = (string, maxLength = 18) => {
  if (!string) {return null;}
  if (string.length <= maxLength) {return string;}
  return `${string.substring(0, maxLength)}...`;
};
