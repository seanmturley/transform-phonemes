import type { TransliterationMap } from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  if (map.digraphs) {
    for (const [key, value] of Object.entries(map.digraphs)) {
      transliteration = transliteration.replaceAll(key, value);
    }
  }

  for (const [key, value] of Object.entries(map.monographs)) {
    transliteration = transliteration.replaceAll(key, value);
  }

  return transliteration;
}
