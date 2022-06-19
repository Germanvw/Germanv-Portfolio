import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Template } from '../components/Template';
import { customTheme } from '../styles/theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>German Vazquez</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Roboto+Slab&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <Template component={<Component {...pageProps} />} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
