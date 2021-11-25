import NoteForm from 'entities/note-form/index'
import { useEffect } from 'react'
import { createEmptyNote } from 'entities/note-form/model/index'
import { Header } from 'widgets/header/header'
import Layout from 'shared/ui/layout/layout'

const NoteCreatePage = () => {
    useEffect(() => {
        createEmptyNote()
    })
    return (
        <Layout>
            <Header />
            <NoteForm />
        </Layout>
    )
}

export default NoteCreatePage