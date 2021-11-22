import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import React from 'react'

export const AddButton = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <Link
            className={`${styles.button} ${className}`} {...rest} to="/create"
        >
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.625 18.75H25V3.125C25 1.4 23.6 0 21.875 0C20.15 0 18.75 1.4 18.75 3.125V18.75H3.125C1.4 18.75 0 20.15 0 21.875C0 23.6 1.4 25 3.125 25H18.75V40.625C18.75 42.35 20.15 43.75 21.875 43.75C23.6 43.75 25 42.35 25 40.625V25H40.625C42.35 25 43.75 23.6 43.75 21.875C43.75 20.15 42.35 18.75 40.625 18.75Z" fill="#FEFEFE"/>
            </svg>
        </Link>

    )
}