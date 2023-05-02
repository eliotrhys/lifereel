import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lifereel',
  description: 'Lifereel stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/dea1mbv.css"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
