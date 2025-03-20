export interface BaseLang {
  [key: string]: string | BaseLang
}
export type PageDirection = 'ltr' | 'rtl' | undefined
