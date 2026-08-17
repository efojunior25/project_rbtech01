import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

export default function Analytics() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (!GA_ID || typeof window.gtag !== 'function') return
    window.gtag('config', GA_ID, { page_path: pathname })
  }, [pathname])

  if (!GA_ID) return null

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
          window.gtag = gtag;
        `}
      </script>
    </Helmet>
  )
}
