import { Select } from '@radix-ui/themes'
import React from 'react'

interface IOptionsSelect {
    selectTitle: string;
    options: IOption[];
}
interface IOption {
    value: string;
    title: string;
    disabled: boolean
}

export const OptionsSelect: React.FC<IOptionsSelect> = ({ selectTitle, options }) => {
    return (
        <Select.Root>
            <Select.Trigger radius="full" />
            <Select.Content>
                <Select.Group>
                    <Select.Label>{selectTitle}</Select.Label>
                    {options.map((option, index) => (
                        <Select.Item value={option.value} key={index} disabled={option.disabled}>{option.title}</Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}
