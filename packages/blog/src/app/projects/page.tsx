import NextLink from 'next/link'
import { FC } from 'react'
import { useMDXComponents } from '../../mdx-components'
import IndexPage from './index.mdx'

const Page: FC = () => {
  // @ts-expect-error -- fixme
  const { h3: H3 } = useMDXComponents()
  return (
    <IndexPage
      components={{
        a(props) {
          return (
            <NextLink
              {...props}
              className="underline decoration-from-font [text-underline-position:from-font] hover:no-underline"
            />
          )
        },
        h3(props) {
          return <H3 {...props} className="mt-20! *:no-underline" />
        }
      }}
    />
  )
}

export { metadata } from './index.mdx'
export default Page
