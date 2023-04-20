export function truncateString(str: string, length: number = 6): string {
  if (str.length <= 2 + length * 2) {
    return str;
  }
  const start = str.slice(0, 2 + length);
  const end = str.slice(-length);
  return `${start}...${end}`;
}

export function formatNumber(input: string, decimalPlaces: number = 6): number {
  // Parse the string number as a BigInt
  const bigIntValue = BigInt(input);

  // Divide the BigInt by 10^18 for the desired precision
  let divisor = BigInt(10 ** 18);
  const quotient = bigIntValue / divisor;

  // Calculate the remainder and adjust the divisor if necessary
  let remainder = bigIntValue % divisor;
  let decimalAdjustment = 0;
  if (decimalPlaces < 18) {
    const decimalAdjustmentFactor = BigInt(10 ** (18 - decimalPlaces));
    remainder /= decimalAdjustmentFactor;
    decimalAdjustment = decimalPlaces;
    divisor /= decimalAdjustmentFactor;
  }

  // Convert the quotient and remainder to strings
  const quotientStr = quotient.toString();
  const remainderStr = remainder.toString().padStart(decimalAdjustment, "0");

  // Combine the quotient and remainder strings, and then convert to a number
  const formattedNumber = Number(quotientStr + "." + remainderStr);

  // Round the number to the desired number of decimal places
  const roundedNumber = parseFloat(formattedNumber.toFixed(decimalPlaces));

  return roundedNumber;
}

export const timestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
};
