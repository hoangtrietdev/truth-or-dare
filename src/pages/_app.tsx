import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      
      {/* Toast Notifications with Boyplaydn Theme */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(15, 23, 42, 0.95)',
            color: '#fff',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: '#06B6D4',
              secondary: '#fff',
            },
            style: {
              border: '1px solid rgba(6, 182, 212, 0.5)',
            },
          },
          error: {
            iconTheme: {
              primary: '#EC4899',
              secondary: '#fff',
            },
            style: {
              border: '1px solid rgba(236, 72, 153, 0.5)',
            },
          },
        }}
      />
    </>
  )
}
