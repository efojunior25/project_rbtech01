import { useLocation } from 'react-router-dom'
import styles from './MobileCta.module.css'

export default function MobileCta() {
  const { pathname } = useLocation()

  if (pathname === '/contato') return null

  return (
    <a href="/contato" className={styles.cta}>
      Entrar em contato
    </a>
  )
}
