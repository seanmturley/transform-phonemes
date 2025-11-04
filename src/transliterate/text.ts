import type { TransliterationMap } from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  for (const [key, value] of Object.entries(map)) {
    transliteration = transliteration.replaceAll(key, value);
  }

  return transliteration;
}
