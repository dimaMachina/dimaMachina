import { PostCard } from '../../../nextra-theme'
import { getPosts, getTags } from '../../blogs/get-posts'

export async function generateMetadata(props) {
  const params = await props.params
  const tag = decodeURIComponent(params.tag)
  return {
    title: `Blogs Tagged with “${tag}”`,
    description: `Explore blogs tagged with “${tag}” by Dimitri Postolov.`
  }
}

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag }))
}

export default async function TagPage(props) {
  const params = await props.params
  const { title } = await generateMetadata({ params })
  const posts = await getPosts()
  return (
    <>
      <h1>{title}</h1>
      {posts
        .filter(post =>
          post.frontMatter.tags.includes(decodeURIComponent(params.tag))
        )
        .map(post => (
          <PostCard key={post.route} post={post} readMore="Read More" />
        ))}
    </>
  )
}
