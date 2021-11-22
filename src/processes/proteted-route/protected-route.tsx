import { Redirect, Route } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $authenticated, login } from 'processes/auth/index'

export const ProtectedRoute = ({component, ...rest}: any) => {
    const isAuth = useStore($authenticated)
    const Component = component

    return (
        <Route
            {...rest}
            render={(props)  => isAuth ?
                (<Component {...props} />) :
                (<Redirect to="/login"/>
            )
            }
        />
    )
};
