import { attach, createEvent, createStore } from 'effector'
import { fetchApiFx } from 'shared/api/index'
import connectLocalStorage from 'effector-localstorage/sync'

export interface Note {
    id: number
    title: string
    content: string
    color: string
    date: Date
    pinned: boolean
}

export const notesListChanged = createEvent<Note[]>()

const $notesListLocalStorage = connectLocalStorage('$notesList')
    .onError((err) => console.log(err))
    .onChange(notesListChanged)

export const $notesList = createStore<Note[]>($notesListLocalStorage.init([]))
    .on(notesListChanged, (state, value) => value)

$notesList.watch($notesListLocalStorage)

export const getNotesListFx = attach({
    effect: fetchApiFx,
    source: $notesList,
    mapParams: (params, data) => {
        return { data }
    },
})

export const getNoteById = attach({
    effect: fetchApiFx,
    source: $notesList,
    mapParams: (id: number, data: Note[]) => {
        const matchedNote = data.find((note) => note.id === id)
        return { data: matchedNote }
    },
})

export const $notesListIsLoading = createStore<boolean>(false)
    .on(getNotesListFx, () => true)
    .on(getNotesListFx.doneData, () => false)


export const $loadedNotes = createStore<Note[]>([]).on(
    getNotesListFx.doneData,
    (_, payload) => payload,
)

export const $pinnedNotes = $loadedNotes.map(notes => notes.filter(note => note.pinned))

export const $unpinnedNotes = $loadedNotes.map(notes => notes.filter(note => !note.pinned))