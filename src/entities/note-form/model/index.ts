import { createEvent, createStore, sample } from 'effector'
import { $notesList, getNoteById, Note, notesListChanged } from 'entities/notes/model/index'

export const changeCurrentNoteTitle = createEvent<string>()
export const changeCurrentNoteContent = createEvent<string>()
export const saveCurrentNoteContent = createEvent<void>()
export const createEmptyNote = createEvent<void>()
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
    .on(createEmptyNote, (state) => {
        return {
            id: generateId(),
            title: '',
            content: '',
            color: '#fff',
            date: new Date(),
        }
    })
    .reset(destroyNote)


export const $currentNoteTitle = $currentNote.map((note) => note ? note.title : '')
export const $currentNoteContent = $currentNote.map((note) => note ? note.content : '')


sample({
    clock: saveCurrentNoteContent,
    source: { $notesList, $currentNote },
    fn: ({ $notesList, $currentNote }): Note[] => {
        if ($currentNote) {
            /* revision save */
            const noteList = [...$notesList].filter((note) => note.id !== $currentNote.id)
            noteList.push($currentNote)
            return noteList.sort((a: Note, b: Note) => a.id - b.id)
        }
        return $notesList
    },
    target: notesListChanged,
})

