import '@/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </NextUIProvider>
  )
}
