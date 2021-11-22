import NoteForm from 'entities/note-form/index'
import { useEffect } from 'react'
import { createEmptyNote } from 'entities/note-form/model/index'
import { Layout, Typography } from 'antd'
import { Header } from 'widgets/header/header'

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