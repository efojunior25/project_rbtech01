import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experiencia', label: 'Experiência' },
  { to: '/competencias', label: 'Competências' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          Edson Junior
        </NavLink>
        <nav aria-label="Navegação principal">
          <ul className={styles.menu}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
