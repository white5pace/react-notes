import styles from './styles.module.scss'
import React from 'react'

const Layout = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <div className={`${styles.layout} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Layout