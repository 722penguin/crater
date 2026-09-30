export type FrontendLanguage = 'zh' | 'en' | 'ja' | 'ko'

const docsLocale = (language: string): string => (language === 'ja' ? 'jp' : language)

/** Build a same-origin URL for the embedded documentation site. */
export const getEmbeddedDocsUrl = (language: string, path?: string) => {
  const locale = docsLocale(language.split('-')[0] || 'zh')
  const normalizedPath = path?.replace(/^\/+/, '')
  return normalizedPath ? `/crater/${locale}/docs/user/${normalizedPath}` : `/crater/${locale}/`
}
