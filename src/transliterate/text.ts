import type { TransliterationMap, TransliterationMapGroup } from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  const transliterate = (source: string, target: string) => {
    transliteration = transliteration.replaceAll(source, target);
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

  if (map.trigraphs) {
    for (const [source, target] of Object.entries(map.trigraphs)) {
      transliterate(source, currentPlaceholderChar);
      storeThenIncrementPlaceholder(target);
    }
  }

  if (map.digraphs) {
    for (const [source, target] of Object.entries(map.digraphs)) {
      transliterate(source, currentPlaceholderChar);
      storeThenIncrementPlaceholder(target);
    }
  }

  for (const [source, target] of Object.entries(map.monographs)) {
    transliterate(source, currentPlaceholderChar);
    storeThenIncrementPlaceholder(target);
  }

  for (const [placeholderChar, target] of Object.entries(placeholderMap)) {
    transliterate(placeholderChar, target);
  }

  return transliteration;
}
