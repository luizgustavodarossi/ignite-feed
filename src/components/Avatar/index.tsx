import styles from './styes.module.scss'

interface Props {
  src: string
  hasBorder: boolean
}

export function Avatar({ src, hasBorder }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
