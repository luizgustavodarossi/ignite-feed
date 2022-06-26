import igniteLogo from '../../assets/ignite-logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      Ignite Feed
    </header>
  )
}
