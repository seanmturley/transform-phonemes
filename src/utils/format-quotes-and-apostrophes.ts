import {
  doubleQuotePlaceholder,
  doubleQuotes,
  singleQuotePlaceholder,
  singleQuotes
} from "./regex.ts";

export function replaceQuotesWithPlaceholders(input: string) {
  return input
    .replaceAll(doubleQuotes, doubleQuotePlaceholder)
    .replaceAll(singleQuotes, singleQuotePlaceholder);
}

export function removeApostrophes(input: string) {
  return input;
}

export default function formatQuotesAndApostrophes(input: string) {
  let output = input;

  output = replaceQuotesWithPlaceholders(output);
  output = removeApostrophes(output);

  return output;
}
