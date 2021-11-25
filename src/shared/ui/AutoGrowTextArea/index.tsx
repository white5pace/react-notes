import { ChangeEvent, FC, useEffect, useRef } from 'react'
import { Input } from 'antd'
import styles from './styles.module.scss'
import * as React from 'react'
import classNames from 'classnames'
import { TextAreaRef } from 'antd/es/input/TextArea'

const { TextArea } = Input

export const AutoGrowTextArea: FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
    const classes = classNames(props.className, styles.area, 'foo')
    const textAreaElement = useRef<TextAreaRef>(null)

    useEffect(() => {
        changeElementHeightByContent(textAreaElement?.current?.resizableTextArea?.textArea)
    })
    console.log(classes)

    return (<TextArea
        ref={textAreaElement}
        className={classes}
        rows={1}
        {...props}
    />)
}
const changeElementHeightByContent = (element: HTMLTextAreaElement | undefined) => {
    if (!element) return
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

export const textAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    changeElementHeightByContent(event.currentTarget)

    return event.currentTarget.value
}
