import { FC } from 'react'
import { Masonry } from '../../components/masonry'
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
