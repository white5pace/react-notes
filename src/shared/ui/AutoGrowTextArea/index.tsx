import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { Input } from 'antd'
import styles from './styles.module.scss'

const { TextArea } = Input

type AutoGrowTextArea = {
    rows: number;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    placeholder?: string;
} & React.HTMLAttributes<HTMLTextAreaElement>

export const AutoGrowTextArea: FC<AutoGrowTextArea> = (
    {
        value,
        onChange,
        placeholder,
        className,
    },
) => {
    const classes = className ? `${className} ${styles.area} ` : `${styles.area}`

    return (<TextArea
        className={classes}
        rows={1}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />)
}

export const textAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
    return event.currentTarget.value
}
