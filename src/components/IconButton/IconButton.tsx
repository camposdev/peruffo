import styles from './iconButton.module.scss'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

type Props = {
  icon: ReactElement
  children: ReactNode
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function IconButton({ icon, href, children, ...props }: Props) {
  return (
    <a href={href} className={styles.iconButton} {...props}>
      <div className={styles.wrapIcon}>
        {icon}
      </div>

      <div className={styles.wrapText}>
        {children}
      </div>
    </a>
  )
}
