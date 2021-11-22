import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import Typography from 'shared/ui/Typography/index'
import Avatar from 'shared/ui/Avatar/index'

export const Header = () => {
    return (
        <div className={styles.header}>
            {
                window.location.pathname !== '/' ?
                    <Link to="/" className={styles.back}>
                        <svg
                            width="16"
                            height="30"
                            viewBox="0 0 16 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.2499 29.0625C14.0443 29.0637 13.8404 29.0243 13.6501 28.9465C13.4597 28.8688 13.2865 28.7542 13.1405 28.6094L0.64053 16.1094C0.494079 15.9641 0.377838 15.7913 0.298512 15.6009C0.219186 15.4105 0.178345 15.2063 0.178345 15C0.178345 14.7937 0.219186 14.5895 0.298512 14.3991C0.377838 14.2087 0.494079 14.0359 0.64053 13.8906L13.1405 1.39064C13.4348 1.09642 13.8338 0.931122 14.2499 0.931122C14.666 0.931122 15.0651 1.09642 15.3593 1.39064C15.6535 1.68486 15.8188 2.08392 15.8188 2.50002C15.8188 2.91611 15.6535 3.31517 15.3593 3.60939L3.95303 15L15.3593 26.3906C15.5057 26.5359 15.622 26.7087 15.7013 26.8991C15.7806 27.0895 15.8215 27.2937 15.8215 27.5C15.8215 27.7063 15.7806 27.9105 15.7013 28.1009C15.622 28.2913 15.5057 28.4641 15.3593 28.6094C15.2133 28.7542 15.0401 28.8688 14.8498 28.9465C14.6594 29.0243 14.4555 29.0637 14.2499 29.0625Z"
                                fill="#FEFEFE"
                            />
                        </svg>
                    </Link> :
                    <Typography className={styles.logo}>Notes</Typography>
            }
            {
                window.location.pathname !== '/' ? 'kus' : <Avatar />
            }
        </div>
    )
}