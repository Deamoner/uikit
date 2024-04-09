import { FontFamilies, FontFamilyUrls } from '@pmndrs/uikit/internals'
import { useContext, createContext, ReactNode } from 'react'

const FontFamiliesContext = createContext<FontFamilies>(null as any)

export function FontFamilyProvider<T extends string = never>(properties: {
  [Key in T]: Key extends 'children' ? ReactNode : FontFamilyUrls
}) {
  let { children, ...fontFamilies } = properties as any
  const existinFontFamilyUrls = useContext(FontFamiliesContext)
  if (existinFontFamilyUrls != null) {
    fontFamilies = { ...existinFontFamilyUrls, ...fontFamilies }
  }
  return <FontFamiliesContext.Provider value={fontFamilies}>{children}</FontFamiliesContext.Provider>
}

export function useFontFamilies(): FontFamilies | undefined {
  return useContext(FontFamiliesContext)
}
