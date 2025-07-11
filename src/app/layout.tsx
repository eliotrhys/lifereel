import './globals.css'
import { Inter } from 'next/font/google'
import favicon from "./favicon.png";
import Script from 'next/script';
import ClientLayout from './ClientLayout';

const META_PIXEL_ID = "3828535074040605";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Lifereel Company',
  description: 'The Lifereel Company creates beautiful, bespoke video memoirs which tell the stories of our loved ones.',
  keywords: 'Lifereel, lifereel, lifereel company, the lifereel company, The Lifereel Company, the Lifereel Company, video memoirs, memoirs, autobiography, autobiografilm, family history, genealogy',
  openGraph: {
    title: 'The Lifereel Company',
    siteName: 'The Lifereel Company',
    url: 'https://www.lifereel.co.uk',
    description: 'The Lifereel Company creates \'lifereels\' - beautiful, bespoke video memoirs which tell the stories of our loved ones. We record a Netflix quality 2-camera interview, and then bring together old family photographs, home movies and gorgeous background music, to create a wonderfully unique film about your loved one\'s life. Get in touch to begin your lifereel journey!',
    type: 'website',
    images: ['/images/og_lifereel.jpg'],
  },
}

export default function RootLayout({ children } : { children: React.ReactNode }) 
{
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href={favicon.src}></link>
        <link rel="stylesheet" href="https://use.typekit.net/dea1mbv.css" />
      </head>
     
      <body>
        <ClientLayout metaPixelId={META_PIXEL_ID}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
