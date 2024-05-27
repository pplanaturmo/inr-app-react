export function formatNumberArray(numbers: number[]): string {
  const formattedNumbers = numbers.map((num) =>
    parseFloat(num.toString()).toString()
  );
  const formattedString = formattedNumbers.join(", ");
  return `${formattedString}`;
}
