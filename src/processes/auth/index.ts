import { createEvent, createStore } from 'effector'
import connectLocalStorage from 'effector-localstorage/sync'

export const login = createEvent<void>()
export const logout = createEvent<void>()
export const setAuthentication = createEvent<boolean>()

const $authenticatedLocalStorage = connectLocalStorage("$authenticated")
    .onError((err) => console.log(err))
    .onChange(setAuthentication)

export const $authenticated = createStore<boolean>($authenticatedLocalStorage.init(false))
    .on(login, () => true)
    .on(logout, () => false)
    .on(setAuthentication, (state, value) => value);

$authenticated.watch($authenticatedLocalStorage)

