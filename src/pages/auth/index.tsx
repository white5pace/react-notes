import styles from './styles.module.scss'
import { $authenticated, login } from 'processes/auth/index'
import { Redirect, Route } from 'react-router-dom'
import { useStore } from 'effector-react'
import Layout from 'shared/ui/layout/layout'
import Typography from 'shared/ui/Typography/index'
import { Button } from 'shared/ui/Button/index'

export const AuthPage = ({ ...props }) => {
    const isAuth = useStore($authenticated)

    return (
        <Route
            {...props}
            render={() => !isAuth ? (
                    <Layout className={styles.layout}>
                        <Typography className={styles.title}>
                            Вас привествует ЛУЧШЕЕ <br />
                            приложение для заметок "Notes", которому (нет) аналогов
                        </Typography>
                        <Typography className={styles.desc}>
                            Для продолжение работы нажмите на кнопу
                        </Typography>
                        <Button
                            onClick={() => login()}
                            className={styles.button}
                        >
                            Жмякай
                        </Button>
                    </Layout>
                ) :
                (<Redirect to="/notes" />)
            }
        />
    )
}