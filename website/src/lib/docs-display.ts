/** Whether this website build is embedded in the frontend deployment. */
export const isEmbeddedDocsBuild = process.env.CRATER_DOCS_EMBEDDED === 'true'

export const getLatestDocsUrl = (lang: string, slug: string[] = []) =>
  `https://raids-lab.github.io/crater/${[lang, 'docs', ...slug]
    .map(encodeURIComponent)
    .join('/')}/`
