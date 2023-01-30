import { ReactNode } from 'react'
import styles from './button.module.css'

type ButtonProps = {
  className?: string
  onClick?: () => void
  children: ReactNode
}

function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ''}`}
      type='button'
    >
      {children}
    </button>
  )
}

export default Button
