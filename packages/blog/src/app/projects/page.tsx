import NextLink from 'next/link'
import { FC } from 'react'
import IndexPage from './index.mdx'

const Page: FC = () => {
  return (
    <>
      <h1 className="headline">Projects</h1>
      <IndexPage
        components={{
          a(props) {
            return (
              <NextLink
                {...props}
                className="underline decoration-from-font [text-underline-position:from-font] hover:no-underline"
              />
            )
          }
        }}
      />
    </>
  )
}

export default Page
