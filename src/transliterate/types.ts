export type TransliterationMapGroup = {
  [key: string]: string;
};

export type TransliterationMap = {
  digraphs?: TransliterationMapGroup;
  monographs: TransliterationMapGroup;
  trigraphs?: TransliterationMapGroup;
};

type TransliterationTestDatum = {
  ipa: string;
  transliteration: string;
  word: string;
};

export type TransliterationTestData = {
  [key: string]: TransliterationTestDatum;
};
