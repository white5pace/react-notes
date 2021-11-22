import React, { FC, MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
}