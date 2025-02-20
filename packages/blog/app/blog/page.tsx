import Link from 'next/link'
import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from './get-posts'
import { Metadata } from 'next'

export const metadata = {
  title: 'Blog'
} satisfies Metadata

export default async function PostsPage() {
  const tags = await getTags()
  const posts = [
    {
      route: 'https://the-guild.dev/blog/nextra-4',
      frontMatter: {
        title: "Nextra 4 x App Router. What's New and Migration Guide",
        description:
          'App Router, Turbopack, Rust search engine Pagefind, RSC i18n, server/client components, compiled by React Compiler, GitHub Alert Syntax, new _meta.global file',
        date: '2025-01-13'
      }
    },
    {
      route:
        'https://graphql.org/blog/2024-06-11-announcing-new-graphql-website',
      frontMatter: {
        title: 'Announcing New GraphQL Website',
        description:
          "2 months ago, we released a new GraphQL website after 8 weeks period of development, we're excited to share with you the reasons behind the changes and what you can expect going forward.",
        date: '2024-06-11'
      }
    },
    {
      route: 'https://the-guild.dev/blog/nextra-3',
      frontMatter: {
        title: 'Nextra 3 – Your Favourite MDX Framework, Now on Steroids',
        description:
          'MDX 3, new i18n, new _meta files with JSX support, more powerful TOC, remote MDX, better bundle size, MathJax, new code block styles, shikiji, ESM-only and more',
        date: '2023-12-12'
      }
    },
    {
      route: 'https://the-guild.dev/blog/nextra-2',
      frontMatter: {
        title: 'Nextra 2 – Next.js Static Site Generator',
        description:
          'Here are what the new version of Nextra 2 Framework includes.',
        date: '2023-01-24'
      }
    },
    {
      route: 'https://the-guild.dev/blog/graphql-eslint-3.14',
      frontMatter: {
        title: "GraphQL-ESLint v3.14 - What's New?",
        description:
          'The best GraphQL linter becomes even better! Check out what we added in the new version.',
        date: '2022-12-28'
      }
    }
  ]
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
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
