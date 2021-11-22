import styles from './styles.module.scss'
import React from 'react'
import { Button } from 'shared/ui/Button/index'
import { logout } from 'processes/auth/index'

export const DropdownMenu = ({
                                 children,
                                 className,
                                 ...rest
                             }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <div className={`${styles.menu} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export const DropdownItem = ({
                                 children,
                                 className,
                                 ...rest
                             }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <Button className={`${styles.item} ${className}`} {...rest} onClick={() => logout()}>
            {children}
        </Button>
    )
}