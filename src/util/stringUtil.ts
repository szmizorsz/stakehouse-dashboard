export function truncateString(str: string, length: number = 6): string {
  if (str.length <= 2 + length * 2) {
    return str;
  }
  const start = str.slice(0, 2 + length);
  const end = str.slice(-length);
  return `${start}...${end}`;
}
