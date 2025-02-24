import type { FC } from 'react'
import { Masonry } from '../../components/masonry'
import { MaskingScrollview } from './masking-scrollview'
import { StaticTweet } from './static-tweet'

const TWEET_IDS = [
  // '1854200071358738689',
  '1854206623985832051',
  '1853183601703071882',
  '1841564406687178852',
  '1834234262976925995',
  '1834234264772079742',
  '1717262153688723721',
  '1714673874938257634',
  '1705004978765791590',
  '1704999303499174030',
  '1704564182497247274',
  '1620766573450371074',
  '1608481195075026946',
  '1608477552145752066'
]

export const Tweets: FC = () => {
  return (
    <MaskingScrollview
      outerClassName="mx-[calc(50%-50vw)] px-4"
      className="nextra-scrollbar sm:h-150 relative -m-4 flex gap-4 p-4 [scrollbar-width:auto] max-sm:overflow-x-auto sm:grid sm:grid-cols-2 sm:overflow-y-auto lg:grid-cols-4"
      fade="y"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="contents flex-col gap-6 sm:flex">
          {TWEET_IDS.map((id, j) =>
            j % 4 === i ? <StaticTweet key={id} id={id} /> : null
          )}
        </div>
      ))}
    </MaskingScrollview>
  )

  return (
    <Masonry
      breakpointCols={{ default: 4, 1280: 3, 1024: 2, 678: 1 }}
      className="mx-[calc(50%-50vw)] flex gap-4 px-4"
      columnClassName="masonry-column"
    >
      {TWEET_IDS.map(id => (
        <StaticTweet key={id} id={id} />
      ))}
    </Masonry>
  )
}
