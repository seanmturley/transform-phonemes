export const wordStart = "(?<=\\P{L}|^)";
export const wordEnd = "(?=\\P{L}|$)";

export const vowelOrEndOfClause = (vowels: string) =>
  `(?=(\\P{L}[${vowels}]|\\P{L}?\\p{P}|$))`;
