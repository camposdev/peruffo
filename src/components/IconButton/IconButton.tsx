import styles from './iconButton.module.scss'
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

type Props = {
  icon: ReactElement
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ icon, children }: Props) {
  return (
    <button className={styles.iconButton}>
      <div className={styles.wrapIcon}>
        {icon}
      </div>

      <div className={styles.wrapText}>
        {children}
      </div>
    </button>
  )
}
