"use client"

import Script from 'next/script';
import { usePathname } from 'next/navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
  metaPixelId: string;
}

export default function ClientLayout({ children, metaPixelId }: ClientLayoutProps) {
  const pathname = usePathname();
  const isCalendlyPage = pathname === '/bookyourslot';

  return (
    <>
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
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
              fbq.disablePushState = true;
            `,
          }}
        />
      )}

      {!isCalendlyPage && (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=3828535074040605&ev=PageView&noscript=1" alt="" />
        </noscript>
      )}

      {children}
    </>
  );
} 
