import NextLink from 'next/link'
import { Anchor } from 'nextra/components'
import type { FC } from 'react'
import type { BlogMetadata } from '../types'

type PostCardProps = {
  post: {
    route: string
    frontMatter: BlogMetadata
  }
  readMore?: string
}

export const PostCard: FC<PostCardProps> = ({
  post,
  readMore = 'Read More →'
}) => {
  const { description, date, title } = post.frontMatter
  const dateObj = date && new Date(date)
  return (
    <div key={post.route}>
      <h2 className="x:mt-6 x:mb-2 x:text-xl x:font-semibold">
        <NextLink
          href={post.route}
          className="x:no-underline!"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </NextLink>
      </h2>
      {description && (
        <p className="x:mb-2 x:dark:text-gray-400 x:text-gray-600">
          {description}
          {readMore && (
            <Anchor href={post.route} className="x:ml-2">
              {readMore}
            </Anchor>
          )}
        </p>
      )}
      {dateObj && (
        <time
          className="x:text-sm x:dark:text-gray-400 x:text-gray-600"
          dateTime={dateObj.toISOString()}
        >
          {dateObj.toDateString()}
        </time>
      )}
    </div>
  )
}
