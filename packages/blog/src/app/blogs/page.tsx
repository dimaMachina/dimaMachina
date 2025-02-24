import Link from 'next/link'
import type { NextraMetadata } from 'nextra'
import { PostCard } from '../../nextra-theme'
import { getPosts, getTags } from './get-posts'

export const metadata = {
  title: 'Blog',
  description:
    'Explore recent blog posts for insights on web development and technology.',
  asIndexPage: true
} satisfies NextraMetadata

export default async function PostsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  const allTags: Record<string, number> = Object.create(null)

  for (const tag of tags) {
    allTags[tag] ??= 0
    allTags[tag] += 1
  }
  return (
    <div data-pagefind-ignore="all">
      <h1 className="headline">{metadata.title}</h1>
      <div
        className="not-prose"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.5rem',
          marginTop: 24
        }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map(post => (
        <PostCard key={post.route} post={post} readMore="Read More" />
      ))}
    </div>
  )
}
