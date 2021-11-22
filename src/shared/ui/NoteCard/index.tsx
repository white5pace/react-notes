import React from 'react'
import styles from './styles.module.scss'
import Typography from 'shared/ui/Typography/index'
import { Note } from 'entities/notes/model/index'
import { Link } from 'react-router-dom'
import dateFormat, { i18n } from 'dateformat'

interface NoteCard extends React.HTMLAttributes<HTMLElement> {
    color?: string;
    data: Note;
}

i18n.monthNames = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Окт',
    'Нов',
    'Дек',
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

export const NoteCard = ({ children, className, color, data, ...rest }: NoteCard) => {
    const background = color ? { backgroundColor: data.color } : { backgroundColor: '#ffffff' }
    return (
        <Link
            className={`${styles.card} ${className}`}
            style={background} {...rest}
            to={'/edit/' + data.id}
        >
            <Typography className={`${styles.title} ${className}`}  {...rest} >
                {data.title}
            </Typography>
            <Typography className={`${styles.content} ${className}`}  {...rest} >
                {data.content}
            </Typography>
            <Typography className={`${styles.date} ${className}`}  {...rest} >
                {dateFormat(data.date, 'd, mmmm, yyyy')}
            </Typography>
        </Link>

    )
}