import { Locale } from './i18n';
import fr from '../messages/fr.json';
import ar from '../messages/ar.json';

const translations = {
  fr,
  ar,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof fr;
export type { Locale };