import {
  doubleQuotePlaceholder,
  doubleQuotes,
  outerPlaceholders,
  outerQuotes,
  singleQuotePlaceholder,
  singleQuotes
} from "./regex.ts";

function replaceQuotesWithPlaceholders(input: string) {
  return input
    .replaceAll(doubleQuotes, doubleQuotePlaceholder)
    .replaceAll(singleQuotes, singleQuotePlaceholder);
}

function removeLeadingApostrophes(input: string) {
  return input;
}

function formatPlaceholderQuotes(input: string) {
  const output = input.replaceAll(outerQuotes, (match) => {
    match = match.replaceAll(outerPlaceholders, "$1");
    match = match.replaceAll(outerQuotes, "‘$2’");

    return `“${match}”`;
  });

  return output;
}

export function formatQuotes(input: string) {
  let output = input;

  output = replaceQuotesWithPlaceholders(output);
  output = removeLeadingApostrophes(output);
  output = formatPlaceholderQuotes(output);

  return output;
}

export function removeApostrophes(input: string) {
  return input.replaceAll(singleQuotePlaceholder, "");
}

export default function formatQuotesAndApostrophes(input: string) {
  let output = input;

  output = formatQuotes(output);
  output = removeApostrophes(output);

  return output;
}
