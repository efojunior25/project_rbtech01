import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span>&copy; {year} - MrXunim Desenvolvimento Web</span>
      </div>
    </footer>
  )
}
