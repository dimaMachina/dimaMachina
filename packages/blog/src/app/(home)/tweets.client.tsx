'use client'

import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const TweetsClient: FC<{ children: ReactNode }> = ({ children }) => {
  return createPortal(children, document.body)
}
