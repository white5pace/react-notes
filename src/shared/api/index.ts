import { createEffect } from 'effector'

export const fetchApiFx = createEffect<{ data: any }, any >(async ({ data }) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return data
})