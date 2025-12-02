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

export type TestDatum = {
  description: string;
  input: string;
  output: string;
};

export type TransliterationTestData = {
  [key: string]: TestDatum;
};
