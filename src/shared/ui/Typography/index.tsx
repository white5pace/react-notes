import styles from './styles.module.scss'
import React from 'react'

const Typography = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <div className={`${styles.typography} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Typography