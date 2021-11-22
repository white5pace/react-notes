import { FC, MouseEventHandler } from 'react'
import { Button } from 'antd'

type ButtonProps = {
    content: string;
    onClick: MouseEventHandler<HTMLElement>;
}

export const BaseButton: FC<ButtonProps> = ({ content, onClick }) => {
    return <Button onClick={onClick}>{content}</Button>
}