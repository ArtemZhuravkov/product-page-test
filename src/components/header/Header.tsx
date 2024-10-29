import { BackpackIcon } from '@radix-ui/react-icons'
import {  Flex, Heading, IconButton } from '@radix-ui/themes'
import React from 'react';
import "./Header.css";

export const Header: React.FC = () => {
    return (
        <Flex className='header-wrapper' justify='between' px="20px" py="10px" align='center'>
            <Heading>Logo</Heading>
            <IconButton radius="large" variant="solid" color='green'>
                <BackpackIcon width="18" height="18" />
            </IconButton>
        </Flex>
    )
}
