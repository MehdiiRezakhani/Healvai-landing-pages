import Head from 'next/head';
import Script from "next/script";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

//context
import ErrorBoundary from '@/hook/ErrorBoundary';

//components
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer';
import InternetConnectionStatus from '@/components/common/InternetConnectionStatus';

function MyApp({ Component, pageProps }) {
  const googleAnalyticsToken = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  return (
      <ErrorBoundary>
          <div className='w-full h-full bg-light dark:bg-black text-gray_800 dark:text-white'>
            <Head>
              <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
              <title className='notranslate'>Healvai - AI-Powered Posture Corrector</title>
              <meta name="Healvai" content="Healvai" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="default" />
              <meta name="apple-mobile-web-app-title" content="Healvai" />
              <meta name="format-detection" content="telephone=no" />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="msapplication-TileColor" content="#0F67FE" />
              <meta name="msapplication-tap-highlight" content="no" />
              <meta name="theme-color" content="#0F67FE"/>
              <link rel="apple-touch-icon" href="apple-touch-icon.png" />
              <link rel="manifest" href="manifest.json"/>
              <link rel="icon" href="favicon.png" type="image/png"/>
            </Head>
            <InternetConnectionStatus/>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
          </div>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsToken}`}
          />
          <Script strategy="lazyOnload" id=''>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsToken}', {
                page_path: window.location.pathname,
                });
            `}
          </Script>
          {/* <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script> */}
      </ErrorBoundary>
  )
}

export default MyApp;

