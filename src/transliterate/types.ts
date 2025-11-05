type TransliterationMapGroup = {
  [key: string]: string;
};

export type TransliterationMap = {
  digraphs?: TransliterationMapGroup;
  monographs: TransliterationMapGroup;
};

type TransliterationTestDatum = {
  ipa: string;
  transliteration: string;
  word: string;
};

export type TransliterationTestData = {
  [key: string]: TransliterationTestDatum;
};
