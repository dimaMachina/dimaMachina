import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

export async function getPosts() {
  return [
    {
      route: 'https://the-guild.dev/blog/nextra-4',
      frontMatter: {
        title: "Nextra 4 x App Router. What's New and Migration Guide",
        description:
          'App Router, Turbopack, Rust search engine Pagefind, RSC i18n, server/client components, compiled by React Compiler, GitHub Alert Syntax, new _meta.global file',
        date: '2025-01-13',
        tags: ['react', 'next.js']
      }
    },
    {
      route:
        'https://graphql.org/blog/2024-06-11-announcing-new-graphql-website',
      frontMatter: {
        title: 'Announcing New GraphQL Website',
        description:
          "2 months ago, we released a new GraphQL website after 8 weeks period of development, we're excited to share with you the reasons behind the changes and what you can expect going forward.",
        date: '2024-06-11',
        tags: ['graphql']
      }
    },
    {
      route: 'https://the-guild.dev/blog/nextra-3',
      frontMatter: {
        title: 'Nextra 3 – Your Favourite MDX Framework, Now on Steroids',
        description:
          'MDX 3, new i18n, new _meta files with JSX support, more powerful TOC, remote MDX, better bundle size, MathJax, new code block styles, shikiji, ESM-only and more',
        date: '2023-12-12',
        tags: ['react', 'next.js']
      }
    },
    {
      route: 'https://the-guild.dev/blog/nextra-2',
      frontMatter: {
        title: 'Nextra 2 – Next.js Static Site Generator',
        description:
          'Here are what the new version of Nextra 2 Framework includes.',
        date: '2023-01-24',
        tags: ['react', 'next.js']
      }
    },
    {
      route: 'https://the-guild.dev/blog/graphql-eslint-3.14',
      frontMatter: {
        title: "GraphQL-ESLint v3.14 - What's New?",
        description:
          'The best GraphQL linter becomes even better! Check out what we added in the new version.',
        date: '2022-12-28',
        tags: ['graphql', 'eslint']
      }
    }
  ]
  // const { directories } = normalizePages({
  //   list: await getPageMap('/blog'),
  //   route: '/posts'
  // })
  // return directories
  //   .filter(post => post.name !== 'index')
  //   .sort(
  //     // @ts-expect-error fixme
  //     (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  //   )
}

export async function getTags() {
  const posts = await getPosts()
  const tags = posts.flatMap(post => post.frontMatter.tags)
  return tags
}
