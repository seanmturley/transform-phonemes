import type { TransliterationMap, TransliterationMapGroup } from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  const placeholderMap: TransliterationMapGroup = {};

  // Start placeholders from the first value in Unicode
  // Supplementary Private Use Area-B
  let currentPlaceholderInt = parseInt("100000", 16);
  let currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;

  if (map.trigraphs) {
    for (const [source, target] of Object.entries(map.trigraphs)) {
      transliteration = transliteration.replaceAll(
        source,
        currentPlaceholderChar
      );

      placeholderMap[currentPlaceholderChar] = target;
      currentPlaceholderInt++;
      currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;
    }
  }

  if (map.digraphs) {
    for (const [source, target] of Object.entries(map.digraphs)) {
      transliteration = transliteration.replaceAll(
        source,
        currentPlaceholderChar
      );

      placeholderMap[currentPlaceholderChar] = target;
      currentPlaceholderInt++;
      currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;
    }
  }

  for (const [source, target] of Object.entries(map.monographs)) {
    transliteration = transliteration.replaceAll(
      source,
      currentPlaceholderChar
    );

    placeholderMap[currentPlaceholderChar] = target;
    currentPlaceholderInt++;
    currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;
  }

  for (const [placeholderChar, target] of Object.entries(placeholderMap)) {
    transliteration = transliteration.replaceAll(placeholderChar, target);
  }

  return transliteration;
}
