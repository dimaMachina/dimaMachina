import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import NextLink from 'next/link'
import { Head } from 'nextra/components'
import { GitHubIcon } from 'nextra/icons'
import { getPageMap } from 'nextra/page-map'
import { FC, ReactNode } from 'react'
import nextSitemapConfig from '../../next-sitemap.config'
import LinkedInIcon from '../icons/linkedin.svg?svgr'
import TwitterIcon from '../icons/twitter.svg?svgr'
import { Footer, Layout, Navbar, ThemeSwitch } from '../nextra-theme'
import './globals.css'

const appName = 'dimaMachina'

export const metadata: Metadata = {
  description: `Dimitri POSTOLOV's website`,
  metadataBase: new URL(nextSitemapConfig.siteUrl),
  keywords: [
    'dimitri postolov',
    'postolov',
    'dimaMachina',
    'dima machina',
    'react',
    'next.js',
    'nextra',
    'graphql',
    'graphql-eslint',
    'graphiql'
  ],
  generator: 'Next.js',
  applicationName: appName,
  appleWebApp: {
    title: appName
  },
  title: {
    default: appName,
    template: `%s | ${appName}`
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    locale: 'en_US',
    type: 'website',
    images: {
      url: 'https://nextra.site/og?title=Dimitri%20Postolov%0APersonal%20Website',
      width: 1200,
      height: 630
    },
    siteName: appName
  },
  twitter: {
    site: 'https://x.com/dimaMachina_',
    card: 'summary_large_image',
    creator: '@dimaMachina_'
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#000', light: '#fafafa' }} />
      <body>
        <Layout>
          <Navbar pageMap={pageMap}>
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer className="flex justify-between">
            {new Date().getFullYear()} © Dimitri POSTOLOV
            {/*<a href="/feed.xml" style={{ float: 'right' }}>*/}
            {/*  RSS*/}
            {/*</a>*/}
            <div className="flex gap-4 *:hover:text-[--x-color-primary-600]">
              <NextLink
                href="https://github.com/dimaMachina"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon height="22px" />
              </NextLink>
              <NextLink
                href="https://x.com/dimaMachina_"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon height="22px" />
              </NextLink>
              <NextLink
                href="https://www.linkedin.com/in/postolov"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon height="22px" />
              </NextLink>
            </div>
          </Footer>
        </Layout>
      </body>
      <GoogleTagManager gtmId="GTM-MKDZX82P" />
    </html>
  )
}

export default RootLayout
