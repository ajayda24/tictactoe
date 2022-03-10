import '../tailwind.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <link rel='manifest' href='/manifest.json' />
        <meta name='application-name' content='Tic Tac Toe' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Tic Tac Toe' />
        <meta
          name='description'
          content='A wierd Tic Tac Toe. Developed by Ajay Daniel Trevor.'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/logo1.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/logo1.png' />

        <link rel='mask-icon' href='/logo1.png' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon1.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://tictactoe.ajdaniel.gq' />
        <meta name='twitter:title' content='Ajay Daniel Trevor' />
        <meta
          name='twitter:description'
          content='A wierd Tic Tac Toe. Developed by Ajay Daniel Trevor.'
        />
        <meta name='twitter:image' content='https://ajdaniel.gq/logo1.png' />
        <meta name='twitter:creator' content='@ajayda24' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ajay Daniel Trevor' />
        <meta
          property='og:description'
          content='A wierd Tic Tac Toe. Developed by Ajay Daniel Trevor.'
        />
        <meta property='og:site_name' content='Ajay Daniel Trevor' />
        <meta property='og:url' content='https://tictactoe.ajdaniel.gq' />
        <meta property='og:image' content='https://ajdaniel.gq/logo1.png' />
      </Head>
      <Script
        id='my-script'
        dangerouslySetInnerHTML={{
          __html: `
                document.documentElement.setAttribute('data-theme','mytheme');
          `,
        }}
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
