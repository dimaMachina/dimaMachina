import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
  h1: ({ children }) => <h1 className="headline">{children}</h1>,
  DateFormatter: ({ date }) =>
    `Last updated at ${date.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}
