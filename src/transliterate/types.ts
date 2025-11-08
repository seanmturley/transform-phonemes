export type TransliterationMapGroup = {
  [key: string]: string;
};

export type TransliterationMap = {
  exceptions?: TransliterationMapGroup;
  digraphs?: TransliterationMapGroup;
  trigraphs?: TransliterationMapGroup;
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
