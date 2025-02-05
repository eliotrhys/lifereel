"use client"

import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import favicon from "./favicon.png";
import Script from 'next/script';
import { useEffect, useState } from 'react';

const META_PIXEL_ID = "3828535074040605";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Lifereel',
//   description: 'Lifereel stuff',
// }

export default function RootLayout({ children } : { children: React.ReactNode }) 
{

  const [isCalendlyPage, setIsCalendlyPage] = useState<null | boolean>(null); // Initial state is null to prevent rendering issues

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsCalendlyPage(currentPath === '/bookyourslot');
  }, []);

  // Prevent rendering until state is determined (isCalendlyPage is not null)
  if (isCalendlyPage === null) return null;

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

        {/* Load Meta Pixel Script */}
        {!isCalendlyPage && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {!isCalendlyPage && (
        <noscript>
          <img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=3828535074040605&ev=PageView&noscript=1"/>
        </noscript>
        )}
      </head>
     
      <body>
        {children}
      </body>
    </html>
  )
}
