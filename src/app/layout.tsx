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
        <title>Lifereel</title>
        <link rel="icon" type="image/png" href={favicon.src}></link>
      </head>
        {/* <title>Lifereel</title>
        <link rel="stylesheet" href="https://use.typekit.net/dea1mbv.css"></link> */}
        {/* <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta property="og:title" content="Triviamoji" />
        <meta property="og:site_name" content="Triviamoji" />
        <meta property="og:url" content="https://www.triviamoji.com" />
        <meta property="og:description" content="Triviamoji is a marathon emoji trivia game! Look at the emojis, check the category and give it your best guess! With 1000s of questions and dozens of categories, you can spend hours tickle your brain with the most challenging, and most fun emoji guessing game out there - just don't let the timer run out!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/triviamoji_og.jpg" />
        <meta name="keywords" content="Triviamoji, Emoji trivia, Emoji guessing game, Emoji trivia challenge, Guess the emoji game, Emoji quiz challenge, Emoji charades game, Emoji puzzle game, Emoji word game, Emoji brain teaser, Emoji guessing competition, Emoji riddle game, Emoji, Guess the emoji" /> */}
      <body>
        {children}
      </body>
    </html>
  )
}
