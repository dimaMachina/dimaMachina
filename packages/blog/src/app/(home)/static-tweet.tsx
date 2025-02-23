import { unstable_cache as cache } from 'next/cache'
import { FC } from 'react'
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from 'react-tweet'
import { getTweet as _getTweet } from 'react-tweet/api'

const getTweet = cache(async (id: string) => _getTweet(id), ['tweet'], {
  revalidate: 3600 * 24
})

export const StaticTweet: FC<{ id: string }> = async ({ id }) => {
  try {
    const tweet = await getTweet(id)
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />
  } catch (error) {
    console.error(error)
    return <TweetNotFound error={error} />
  }
}

// import { Tweet, getTweets } from '../../components/tweet'
//
// export async function StaticTweet() {
//   const tweets = await getTweets(['1854200071358738689'])
//   const tweet = tweets.find((tweet) => tweet.id === '1854200071358738689')
//   return <Tweet {...tweet} />
// }
