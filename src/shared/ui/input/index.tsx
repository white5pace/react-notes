import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { Input } from 'antd'

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
};

export const BaseInput: FC<InputProps> = ({ value, onChange, placeholder }) => {
    return <Input value={value} onChange={onChange} placeholder={placeholder} />
}

export const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    return event.currentTarget.value
}