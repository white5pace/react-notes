import styles from './styles.module.scss'
import React from 'react'
import { Button } from 'shared/ui/Button/index'

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
                                 onClick,
                                 ...rest
                             }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <Button
            className={`${styles.item} ${className}`} {...rest}
            onClick={(event) => onClick ? onClick(event) : undefined}
        >
            {children}
        </Button>
    )
}