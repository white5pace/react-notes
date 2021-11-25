import { Col, Row } from 'antd'
import styles from './styles.module.scss'
import { list, variant } from '@effector/reflect'
import { combine } from 'effector'
import {
    $notesListIsLoading, $pinnedNotes,
    $unpinnedNotes,
    getNotesListFx,
    Note,
} from 'entities/notes/model/index'
import { Header } from 'widgets/header/header'
import Layout from 'shared/ui/layout/layout'
import { NoteCard } from 'shared/ui/NoteCard/index'
import { AddButton } from 'shared/ui/AddButton/index'
import Typography from 'shared/ui/Typography/index'
import Loader from 'shared/ui/Loader/index'


const NotesListPage = () => {
    return (
        <Layout className={styles.root}>
            <Header/>
            <PageContent />
            <AddButton />
        </Layout>
    )
}

const ListItemView: React.FC<{ note: Note }> = ({ note }) => {
    return (<NoteCard data={note} />)
}

const PinnedItems = list({
    view: ListItemView,
    source: $pinnedNotes,
    bind: {},
    mapItem: {
        note: (note) => note,
    },
})

const UnpinnedItems = list({
    view: ListItemView,
    source: $unpinnedNotes,
    bind: {},
    mapItem: {
        note: (note) => note,
    },
})

const PinnedList = variant({
    source: combine(
        {
            list: $pinnedNotes,
        },
        ({ list }) => {
            if (!list.length) return 'empty'
            return 'fine'
        },
    ),
    cases: {
        fine: () => (<div>
            <Typography className={styles.pined}>Закрепленные</Typography>
            <Row className={styles.list}>
                <PinnedItems />
            </Row>
        </div>),
        empty: () => <div></div>,
    },
})

const UnpinnedList = variant({
    source: combine(
        {
            list: $unpinnedNotes,
        },
        ({ list }) => {
            if (!list.length) return 'empty'
            return 'fine'
        },
    ),
    cases: {
        fine: () => (<div>
            <Typography className={styles.upcoming}>Предстоящие</Typography>
            <Row className={styles.list}>
                <UnpinnedItems />
            </Row>
        </div>),
        empty: () => <div></div>,
    },
})

const NotesLists = () => {
    return (
        <div>
            <PinnedList />
            <UnpinnedList />
        </div>
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
        loading: () => <Loader />,
        ready: NotesLists,
    },
    hooks: {
        mounted: getNotesListFx.prepend(() => {
        }),
    },
})

export default NotesListPage