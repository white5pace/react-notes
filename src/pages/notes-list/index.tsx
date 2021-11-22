import { Button, Col, Row, Typography } from 'antd'
import styles from './styles.module.scss'
import { list, variant } from '@effector/reflect'
import { combine } from 'effector'
import { $loadedNotes, $notesListIsLoading, getNotesListFx, Note } from 'entities/notes/model/index'
import { Link } from 'react-router-dom'
import { Header } from 'widgets/header/header'
import Layout from 'shared/ui/layout/layout'
import { NoteCard } from 'shared/ui/NoteCard/index'
import { AddButton } from 'shared/ui/AddButton/index'


const NotesListPage = () => {
    return (
        <Layout className={styles.root}>
            <Header />
            <Col>
                <PageContent />
                <AddButton/>
            </Col>
        </Layout>
    )
}

const ListItemView: React.FC<{ note: Note }> = ({ note }) => {
    return (<NoteCard data={note} />)
}

const NotesItems = list({
    view: ListItemView,
    source: $loadedNotes,
    bind: {},
    mapItem: {
        note: (note) => note,
    },
})

const NotesList = () => {
    return (
        <Row className={styles.list}>
            <NotesItems />
        </Row>
    )
}

const AddNote = () => {
    return (
        <Row justify="center">
            <Button>Add note</Button>
        </Row>
    )
}

const PageContent = variant({
    source: combine(
        {
            isLoading: $notesListIsLoading,
        },
        ({ isLoading }) => {
            if (isLoading) return 'loading'
            return 'ready'
        },
    ),
    cases: {
        loading: () => <Row justify="center"><Typography.Title>Загрузка...</Typography.Title></Row>,
        ready: NotesList,
    },
    hooks: {
        mounted: getNotesListFx.prepend(() => {
        }),
    },
})

export default NotesListPage