import styles from './styles.module.scss'
import { reflect } from '@effector/reflect'
import { AutoGrowTextArea, textAreaChange } from 'shared/ui/AutoGrowTextArea/index'
import { BaseButton } from 'shared/ui/BaseButton/index'
import {
    $currentNoteContent,
    $currentNoteTitle, changeCurrentNoteContent, changeCurrentNoteTitle,
    saveCurrentNote,
} from 'entities/note-form/model/index'

const NoteForm = () => {
    return (
        <div>
            <TitleTextArea />
            <ContentTextArea className={styles.content} />
            <SaveButton />
        </div>
    )
}

const TitleTextArea = reflect({
    view: AutoGrowTextArea,
    bind: {
        // className: styles.title,
        value: $currentNoteTitle,
        onChange: changeCurrentNoteTitle.prepend(textAreaChange),
    },
    hooks: {
        mounted: () => console.log(this)
    }
})

const ContentTextArea = reflect({
    view: AutoGrowTextArea,
    bind: {
        value: $currentNoteContent,
        onChange: changeCurrentNoteContent.prepend(textAreaChange),
    },
})

const SaveButton = reflect({
    view: BaseButton,
    bind: {
        content: 'Сохранить',
        onClick: () => saveCurrentNote(),
    },
})

export default NoteForm;
