import { ThemeProvider } from 'next-themes'
import { ViewTransitions } from 'next-view-transitions'
import type { ComponentProps, FC, ReactElement, ReactNode } from 'react'

export const Footer: FC<{
  children?: ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <small
      className={'x:mt-32 x:block ' + className}
      data-pagefind-ignore="all"
    >
      {children || `CC BY-NC 4.0 ${new Date().getFullYear()} © Shu Ding.`}
    </small>
  )
}

export const Layout: FC<{
  children: ReactNode
  nextThemes?: Omit<ComponentProps<typeof ThemeProvider>, 'children'>
  banner?: ReactElement
  className?: string
}> = ({ children, nextThemes, banner, className = '' }) => {
  return (
    <ThemeProvider attribute="class" {...nextThemes}>
      {banner}
      <article
        className={
          `x:container x:px-4 x:prose x:max-md:prose-sm md:prose-lg x:dark:prose-invert ` +
          className
        }
        dir="ltr"
        data-pagefind-body
      >
        <ViewTransitions>{children}</ViewTransitions>
      </article>
    </ThemeProvider>
  )
}
