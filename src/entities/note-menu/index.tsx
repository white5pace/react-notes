import { Button } from 'shared/ui/Button/index'
import { DropdownItem, DropdownMenu } from 'shared/ui/DropdownsComponents/index'
import React from 'react'
import { Dropdown } from 'antd'
import styles from './styles.module.scss'
import {
    $currentNote,
    deleteCurrentNote,
    pinCurrentNote,
    unpinCurrentNote,
} from 'entities/note-form/model/index'
import { RouteComponentProps, withRouter } from 'react-router'
import { variant } from '@effector/reflect'
import { combine } from 'effector'

const NoteMenu = (props: RouteComponentProps) => {
    const PinItem = variant({
        source: combine(
            { note: $currentNote },
            ({ note }) => !!note?.pinned ? 'pinned' : 'unpinned',
        ),
        cases: {
            pinned: () => <DropdownItem onClick={() => unpinCurrentNote()}>Открепить</DropdownItem>,
            unpinned: () => <DropdownItem onClick={() => pinCurrentNote()}>Закрепить</DropdownItem>,
        },
    })

    const NoteDropdownMenu = (
        <DropdownMenu>
            <PinItem />
            <DropdownItem
                onClick={() => {
                    deleteCurrentNote()
                    props.history.push('/')
                }}
            >Удалить</DropdownItem>
        </DropdownMenu>
    )
    return (
        <Dropdown overlay={NoteDropdownMenu} placement="bottomRight" trigger={['click']}>
            <Button className={styles.menu}>
                <svg
                    width="8"
                    height="30"
                    viewBox="0 0 8 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.75 0.5C5.54696 0.5 7 1.95256 7 3.75C7 5.54744 5.54696 7 3.75 7C1.95304 7 0.5 5.54744 0.5 3.75C0.5 1.95256 1.95304 0.5 3.75 0.5ZM3.75 11.75C5.54696 11.75 7 13.2026 7 15C7 16.798 5.54701 18.25 3.75 18.25C1.95299 18.25 0.5 16.798 0.5 15C0.5 13.202 1.95299 11.75 3.75 11.75ZM3.75 23C5.54696 23 7 24.4526 7 26.25C7 28.048 5.54701 29.5 3.75 29.5C1.95304 29.5 0.5 28.0474 0.5 26.25C0.5 24.4526 1.95304 23 3.75 23Z"
                        fill="#FEFEFE"
                        stroke="white"
                    />
                </svg>
            </Button>
        </Dropdown>
    )
}

export default withRouter(NoteMenu)

