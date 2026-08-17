import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#conteudo" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  )
}
