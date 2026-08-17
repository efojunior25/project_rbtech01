import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>&copy; {year} Edson Junior</span>
        <nav aria-label="Links legais">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de uso</a>
        </nav>
      </div>
    </footer>
  )
}
