"use client"

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
  metaPixelId: string;
}

export default function ClientLayout({ children, metaPixelId }: ClientLayoutProps) {
  const [isCalendlyPage, setIsCalendlyPage] = useState<null | boolean>(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsCalendlyPage(currentPath === '/bookyourslot');
  }, []);

  // Prevent rendering until state is determined (isCalendlyPage is not null)
  if (isCalendlyPage === null) return null;

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
          <img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=3828535074040605&ev=PageView&noscript=1"/>
        </noscript>
      )}

      {children}
    </>
  );
} 