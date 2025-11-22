export function standardizeQuotes(input: string) {
  return input;
}

export function removeApostrophes(input: string) {
  return input;
}

export default function formatQuotesAndApostrophes(input: string) {
  let output = input;

  output = standardizeQuotes(output);
  output = removeApostrophes(output);

  return output;
}
