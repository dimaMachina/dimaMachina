import { Anchor } from 'nextra/components'
import { ImageZoom } from './components/image-zoom'
import { useMDXComponents as getBlogMDXComponents } from './nextra-theme'

const blogComponents = getBlogMDXComponents({
  h1: ({ children }) => <h1 className="headline">{children}</h1>,
  DateFormatter: ({ date }) =>
    `Last updated at ${date.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`,
  img: ImageZoom,
  a(props) {
    return (
      <Anchor
        {...props}
        className="decoration-from-font [text-underline-position:from-font] hover:no-underline"
      />
    )
  }
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}
