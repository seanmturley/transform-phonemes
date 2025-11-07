import type { TransliterationMap, TransliterationMapGroup } from "./types.ts";

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

  if (map.trigraphs) {
    Object.entries(map.trigraphs).forEach(([source, target]) => {
      transliterate(source, target);
    });
  }

  if (map.digraphs) {
    Object.entries(map.digraphs).forEach(([source, target]) => {
      transliterate(source, target);
    });
  }

  Object.entries(map.monographs).forEach(([source, target]) => {
    transliterate(source, target);
  });

  for (const [placeholderChar, target] of Object.entries(placeholderMap)) {
    transliteration = transliteration.replaceAll(placeholderChar, target);
  }

  return transliteration;
}
