import type { FC } from 'react'
import { useMDXComponents } from '../../mdx-components'
import GalleryPage from './images.mdx'

const Page: FC = () => {
  // @ts-expect-error -- fixme
  const { img: Image } = useMDXComponents()

  return (
    <GalleryPage
      components={{
        img(props) {
          return (
            <Image
              {...props}
              className="not-prose mb-4 mt-0 rounded-lg shadow-lg shadow-neutral-400 dark:shadow-neutral-800"
            />
          )
        }
      }}
    />
  )
}

export { metadata } from './images.mdx'
export default Page
