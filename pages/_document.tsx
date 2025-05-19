import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1HWC2ZKLSD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1HWC2ZKLSD');
        `}
      </Script>

      <script
          dangerouslySetInnerHTML={
                        {
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a] = c[a] || function () { (c[a].q = c[a].q || 
                    []).push(arguments) };
                    t=l.createElement(r);
                    t.async=1;
                    t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "e5xtnpz3ei");`,
          }}
        />

        <meta name="yandex-verification" content="07ea48f873e10315" />
        {/* Google tag (gtag.js) */}
        {/* Metas */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="title" content="Grumpycatz NFT - The Fellowship Of Nope" />
        <meta name="description" content="Internet sensation The Fellowship Of Nope with a collection of 10,000 unique NFTs on the Ethereum Blockchain containing exclusive income-generating utilities" />
        <meta name="keywords" content="Grumpy Cat, Grumpy Katz, NFT, cryptocurrency, Crypto, NFT Collection," />
        <meta name="robots" content="index, follow" />
        <meta name="Author" content="Grumpycatz" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="google-site-verification" content="z7esQ-UyfmaLgh6jWNY2hILM2wpgUD80rdLMVoZZQqc" />
        {/* Open Graph general (Facebook, Pinterest)*/}
        <meta property="og:title" content="Grumpycatz NFT - The Fellowship Of Nope" />
        <meta property="og:description" content="Internet sensation The Fellowship Of Nope with a collection of 10,000 unique NFTs on the Ethereum Blockchain containing exclusive income-generating utilities" />
        <meta property="og:url" content="https://Grumpycatz.club/" />
        <meta property="og:site_name" content="grumpycatz.club" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://grumpycatz.club/images/social-cat.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grumpycatz NFT - The Fellowship Of Nope" />
        <meta name="twitter:description" content="Internet sensation The Fellowship Of Nope with a collection of 10,000 unique NFTs on the Ethereum Blockchain containing exclusive income-generating utilities" />
        <meta name="twitter:site" content="Grumpycatznftz" />
        <meta name="twitter:creator" content="Grumpycatznftz" />
        <meta name="twitter:image" content="https://grumpycatz.club/images/social-cat.jpg" />
        <link rel="icon"  href="./images/favicon.webp"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;600;700&family=Roboto+Slab:wght@100;400&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;600;700&family=Roboto+Slab:wght@100;400&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"></link>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}