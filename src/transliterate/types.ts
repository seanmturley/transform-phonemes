export type TransliterationMap = {
  [key: string]: string;
};

type TransliterationTestDatum = {
  ipa: string;
  transliteration: string;
  word: string;
};

export type TransliterationTestData = {
  [key: string]: TransliterationTestDatum;
};
