import type { FC } from 'react'
import { useMDXComponents } from '../../mdx-components'
import GalleryPage, { metadata } from './images.mdx'

const Page: FC = () => {
  const { img: Image } = useMDXComponents()

  return (
    <GalleryPage
      components={{
        img(props) {
          return (
            <Image
              {...props}
              className="mb-4 mt-0 rounded-lg shadow-lg shadow-neutral-400 dark:shadow-neutral-800"
            />
          )
        }
      }}
    />
  )
}

export { metadata, Page as default }
