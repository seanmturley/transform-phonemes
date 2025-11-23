export const wordStart = "(?<=\\P{L}|^)";
export const wordEnd = "(?=\\P{L}|$)";

export const followedByVowelOrEndOfClause = (vowels: string) =>
  `(?=(\\P{L}[${vowels}]|\\P{L}?[,;.:?!)]|$))`;

export const followedByConsonant = (consonants: string) =>
  `(?=\\s?[${consonants}])`;

export const doubleQuotes = /["“”]/g;
export const singleQuotes = /['‘’]/g;

export const doubleQuotePlaceholder = "\u{100000}";
export const singleQuotePlaceholder = "\u{100001}";

// Contruct the pattern to find outer quotes (replaced with
// placeholder characters) i.e.:
// /(?<!\p{L})(['"])((?:(?!\s\1|[,.?!—]\1).)*)[,.?!—]?\1(?!\p{L})/gu;
export const outerQuotes = new RegExp(
  String.raw`(?<!\p{L})([${doubleQuotePlaceholder}${singleQuotePlaceholder}])((?:(?!\s\1|[,.?!—]\1).)*)[,.?!—]?\1(?!\p{L})`,
  "gu"
);
