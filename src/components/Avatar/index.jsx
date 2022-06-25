import styles from './styes.module.scss'

export function Avatar({ src, hasBorder }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
