import { getNoteById, } from 'entities/notes/model/index'
import { useEffect } from 'react'
import { useStore } from 'effector-react'
import styles from './styles.module.scss'
import NoteForm from 'entities/note-form/index'
import { $currentNote, destroyNote } from 'entities/note-form/model/index'
import { Header } from 'widgets/header/header'
import Layout from 'shared/ui/layout/layout'
import Typography from 'shared/ui/Typography/index'


const NoteDetailsPage = ({ match, ...rest }: any) => {
    const noteId = Number(match?.params.noteId)
    const currentNote = useStore($currentNote)

    useEffect(() => {
        getNoteById(noteId)

        return function cleanup() {
            destroyNote()
        }
    }, [noteId])

    if (!currentNote) {
        return (
            <Layout>
                <Typography>Loading...</Typography>
            </Layout>
        )
    }

    return (
        <Layout>
            <Header />
            <NoteForm />
        </Layout>
    )
}


export default NoteDetailsPage
