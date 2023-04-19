export function truncateString(str: string, length: number = 6): string {
  if (str.length <= 2 + length * 2) {
    return str;
  }
  const start = str.slice(0, 2 + length);
  const end = str.slice(-length);
  return `${start}...${end}`;
}

export function formatNumber(input: string): number {
  // Parse the string number as a BigInt
  const bigIntValue = BigInt(input);

  // Divide the BigInt by 10^18 for the desired precision, and then by 10^12 to get 6 decimal places
  const divisor = BigInt(10 ** 18);
  const quotient = bigIntValue / divisor;
  const remainder = bigIntValue % divisor;

  // Convert the result to a string
  const quotientStr = quotient.toString();
  const remainderStr = remainder.toString().padStart(6, "0"); // Pad with zeros to ensure 6 decimal places

  // Combine the quotient and remainder strings, and then convert to a number
  const formattedNumber = Number(quotientStr + "." + remainderStr);

  // Round the number to 6 decimal places
  const roundedNumber = parseFloat(formattedNumber.toFixed(6));

  return roundedNumber;
}
