import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Metadata } from 'next'
import 'nextra-theme-blog/style.css'

const appName = 'dimaMachina'

export const metadata: Metadata = {
  // description: `${appName} - ${description}`,
  generator: 'Next.js',
  applicationName: appName,
  appleWebApp: {
    title: appName,
  },
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    locale: 'en_US',
    type: 'website',
    siteName: appName,
  },
  twitter: {
    site: 'https://x.com/dimaMachina_',
    card: 'summary_large_image',
    creator: '@dimaMachina_',
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './',
  },
}

export default async function RootLayout({ children }) {
  const banner = (
    <Banner storageKey="4.0-release">
      🎉 Nextra 4.0 is released.{' '}
      <a href="#" className="x:text-primary-600">
        Read more →
      </a>
    </Banner>
  )

  return (
    <html lang="en" suppressHydrationWarning>
    <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
    <body>
    <Layout banner={banner}>
      <Navbar pageMap={await getPageMap()}>
        <Search />
        <ThemeSwitch />
      </Navbar>

      {children}

      <Footer>
        {new Date().getFullYear()} © Dimitri POSTOLOV.
        <a href="/feed.xml" style={{ float: 'right' }}>
          RSS
        </a>
      </Footer>
    </Layout>
    </body>
    </html>
  )
}
