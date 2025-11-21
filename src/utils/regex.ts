export const wordStart = "(?<=\\P{L}|^)";
export const wordEnd = "(?=\\P{L}|$)";

export const followedByVowelOrEndOfClause = (vowels: string) =>
  `(?=(\\P{L}[${vowels}]|\\P{L}?[,;.:?!)]|$))`;

export const followedByConsonant = (consonants: string) =>
  `(?=\\s?[${consonants}])`;

export const primaryQuotes =
  /(?<=^|\p{L}\p{P}\s|—)['"‘“](.+?)(?:(?:(?<=(?:[\p{L}\d]\p{P}+))['"’”])|['"’”](—))/gmu;

export const secondaryQuotes = /(?<!\p{L})(['"‘“])([^'"‘“]*?)['"’”](?!\p{L})/gu;
