import { Layout, Typography } from 'antd'
import styles from 'pages/note-details/styles.module.scss'
import { reflect } from '@effector/reflect'
import { BaseInput, inputChanged } from 'shared/ui/input/index'
import { AutoGrowTextArea, textAreaChange } from 'shared/ui/AutoGrowTextArea/index'
import { BaseButton } from 'shared/ui/BaseButton/index'
import {
    $currentNoteContent,
    $currentNoteTitle, changeCurrentNoteContent, changeCurrentNoteTitle,
    saveCurrentNoteContent,
} from 'entities/note-form/model/index'

const { Title } = Typography

export const NoteForm = () => {
    return (
        <Layout className={styles.form}>
            <Title level={2}>Заголовок</Title>
            <TitleInput />
            <Title level={2}>Содержание</Title>
            <ContentTextArea className={styles.content} />
            <SaveButton />
        </Layout>
    )
}

const TitleInput = reflect({
    view: BaseInput,
    bind: {
        value: $currentNoteTitle,
        onChange: changeCurrentNoteTitle.prepend(inputChanged),
    },
})

const ContentTextArea = reflect({
    view: AutoGrowTextArea,
    bind: {
        rows: 4,
        value: $currentNoteContent,
        onChange: changeCurrentNoteContent.prepend(textAreaChange),
    },
})

const SaveButton = reflect({
    view: BaseButton,
    bind: {
        content: 'Сохранить',
        onClick: () => saveCurrentNoteContent(),
    },
})

export default NoteForm;
