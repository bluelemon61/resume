export const languages = ["ko", "en", "ja"] as const;

export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}
