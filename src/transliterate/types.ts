export type TransliterationMapGroup = {
  [key: string]: string;
};

export type PreProcessingMap = {
  exceptions?: TransliterationMapGroup;
  digraphs?: TransliterationMapGroup;
  trigraphs?: TransliterationMapGroup;
  monographs: TransliterationMapGroup;
};

export type PostProcessingMap = {
  always?: TransliterationMapGroup;
  beforeConsonants?: TransliterationMapGroup;
  notBeforeConsonants?: TransliterationMapGroup;
};

export type TransliterationMap = {
  pre: PreProcessingMap;
  post?: PostProcessingMap;
  regexPatterns?: TransliterationMapGroup;
};

type TransliterationTestDatum = {
  ipa: string;
  transliteration: string;
  word: string;
};

export type TransliterationTestData = {
  [key: string]: TransliterationTestDatum;
};
