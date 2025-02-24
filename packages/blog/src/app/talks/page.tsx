import type { FC } from 'react'
import TalksPage, { metadata } from './talks.mdx'

const Page: FC = () => {
  return <TalksPage />
}

export { metadata, Page as default }
