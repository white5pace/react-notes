import { createEvent, createStore, forward, sample } from 'effector'
import { $notesList, getNoteById, Note, notesListChanged } from 'entities/notes/model/index'

export const changeCurrentNoteTitle = createEvent<string>()
export const changeCurrentNoteContent = createEvent<string>()
export const saveCurrentNote = createEvent<void>()
export const saveNote = createEvent<Note>()
export const createEmptyNote = createEvent<void>()
export const pinCurrentNote = createEvent<void>()
export const unpinCurrentNote = createEvent<void>()
export const deleteCurrentNote = createEvent<void>()
export const destroyNote = createEvent<void>()

const generateId = () => Math.floor(Date.now() / (Math.random() * 100))

export const $currentNote = createStore<Note | null>(null)
    .on(getNoteById.doneData, (_, payload) => payload)
    .on(changeCurrentNoteTitle, (state, payload) => {
        if (state) return { ...state, title: payload }
    })
    .on(changeCurrentNoteContent, (state, payload) => {
        if (state) return { ...state, content: payload }
    })
    .on(pinCurrentNote, (state) => {
        if (state) return { ...state, pinned: true }
    })
    .on(unpinCurrentNote, (state) => {
        if (state) return { ...state, pinned: false }
    })
    .on(createEmptyNote, (state) => {
        return {
            id: generateId(),
            title: '',
            content: '',
            color: '#ffffff',
            date: new Date(),
            pinned: false,
        }
    })
    .reset(destroyNote)

export const $currentNoteTitle = $currentNote.map((note) => note ? note.title : '')
export const $currentNoteContent = $currentNote.map((note) => note ? note.content : '')


sample({
    clock: saveCurrentNote,
    source: { $notesList, $currentNote },
    fn: ({ $notesList, $currentNote }): Note[] => {
        if ($currentNote) {
            const noteList = [...$notesList].filter((note) => note.id !== $currentNote.id)
            noteList.push(
                {
                    ...$currentNote,
                    date: new Date(),
                })
            return noteList
        }
        return $notesList
    },
    target: notesListChanged,
})

forward({
    from: [pinCurrentNote, unpinCurrentNote],
    to: saveCurrentNote
})

sample({
    clock: deleteCurrentNote,
    source: { $notesList, $currentNote },
    fn: ({ $notesList, $currentNote }): Note[] => {
        if ($currentNote) {
            return [...$notesList].filter((note) => note.id !== $currentNote.id)
        }
        return $notesList
    },
    target: notesListChanged,
})

