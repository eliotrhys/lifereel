"use client"

import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import favicon from "./favicon.png";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Lifereel',
//   description: 'Lifereel stuff',
// }

export default function RootLayout({ children } : { children: React.ReactNode }) 
{
  return (
    <html lang="en">
      <head>
        <title>The Lifereel Company</title>
        <link rel="icon" type="image/png" href={favicon.src}></link>
        <link rel="stylesheet" href="https://use.typekit.net/dea1mbv.css" />
        {/* <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link> */}
        {/* <meta name="theme-color" content="#fff" /> */}
        <meta property="og:title" content="The Lifereel Company" />
        <meta property="og:site_name" content="The Lifereel Company" />
        <meta property="og:url" content="https://www.lifereel.co.uk" />
        <meta property="og:description" content="The Lifereel Company creates 'lifereels' - beautiful, bespoke video memoirs which tell the stories of our loved ones. We record a Netflix quality 2-camera interview, and then bring together old family photographs, home movies and gorgeous background music, to create a wonderfully unique film about your loved one&apos;s life. Get in touch to begin your lifereel journey!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og_lifereel.jpg" />
        <meta name="keywords" content="Lifereel, lifereel, lifereel company, the lifereel company, The Lifereel Company, the Lifereel Company, video memoirs, memoirs, autobiography, autobiografilm, family history, genealogy" />
      </head>
     
      <body>
        {children}
      </body>
    </html>
  )
}
