import type {
  PreProcessingMap,
  TransliterationMap,
  TransliterationMapGroup
} from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  const capitalizeFirstLetter = (string: string) => {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
  };

  const transliterate = (source: string, target: string) => {
    transliteration = transliteration.replaceAll(
      source,
      currentPlaceholderChar
    );
    storeThenIncrementPlaceholder(target);

    transliteration = transliteration.replaceAll(
      capitalizeFirstLetter(source),
      currentPlaceholderChar
    );
    storeThenIncrementPlaceholder(capitalizeFirstLetter(target));
  };

  const placeholderMap: TransliterationMapGroup = {};

  // Start placeholders from the first value in Unicode
  // Supplementary Private Use Area-B
  let currentPlaceholderInt = parseInt("100000", 16);
  let currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;

  const storeThenIncrementPlaceholder = (target: string) => {
    placeholderMap[currentPlaceholderChar] = target;

    currentPlaceholderInt++;
    currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;
  };

  // TypeScript requires some awkward and verbose definitions here
  type Entries<T> = {
    [K in keyof T]-?: [K, T[K]];
  }[keyof T][];

  const objectEntries = <T extends object>(obj: T) =>
    Object.entries(obj) as Entries<T>;

  let group: keyof PreProcessingMap;
  for (group in map.pre) {
    const mapGroup = map.pre[group] as TransliterationMapGroup;

    for (const [source, target] of objectEntries(mapGroup)) {
      transliterate(source, target);
    }
  }

  for (const [placeholderChar, target] of objectEntries(placeholderMap)) {
    transliteration = transliteration.replaceAll(placeholderChar, target);
  }

  if (map.post) {
    for (const [pattern, target] of objectEntries(map.post)) {
      const regex = new RegExp(pattern, "g");

      transliteration = transliteration.replaceAll(regex, target);
    }
  }
  return transliteration;
}
