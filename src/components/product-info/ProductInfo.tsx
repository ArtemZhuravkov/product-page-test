import { Badge, Box, Button, Flex, Heading, SegmentedControl, Separator, Text } from '@radix-ui/themes'
import React from 'react'
import { OptionsSelect } from '../options-select/OptionsSelect'
import { colorsOptions, sizesOptions } from './helpers'
import "./ProductInfo.css"

interface IProductInfoProps {
    title: string;
}

export const ProductInfo: React.FC<IProductInfoProps> = ({ title }) => {
    return (
        <Box width={{initial: "100%", md:"45%"}} pt="16px">
            <Flex direction="column" height="100%">
                <Heading mb="16px">{title}</Heading>
                <Separator my="3" size="4" />
                <Flex gap="2">
                    <Badge variant="outline" radius="large" color="cyan" size="3">
                        Some
                    </Badge>
                    <Badge variant="outline" radius="large" color="cyan" size="3">
                        Usefull
                    </Badge>
                    <Badge variant="outline" radius="large" color="cyan" size="3">
                        Product
                    </Badge>
                    <Badge variant="outline" radius="large" color="cyan" size="3">
                        Badges
                    </Badge>
                </Flex>
                <Flex direction="column" gap="10px" className='selectors-wrapper' p="10px" my="20px">
                    <Flex direction="column" width="100px">
                        <Text weight="bold">Color:</Text>
                        <OptionsSelect selectTitle='Colors' options={colorsOptions} />
                    </Flex>
                    <Separator my="3" size="4" />
                    <Flex direction="column" width="100px">
                        <Text weight="bold">Size:</Text>
                        <OptionsSelect selectTitle='Sizes' options={sizesOptions} />
                    </Flex>
                    <Separator my="3" size="4" />
                    <Flex direction="column" width="100px">
                        <Text weight="bold">Memory:</Text>
                        <SegmentedControl.Root defaultValue="128">
                            <SegmentedControl.Item value="64">64 GB</SegmentedControl.Item>
                            <SegmentedControl.Item value="128">128 GB</SegmentedControl.Item>
                            <SegmentedControl.Item value="256">256 GB</SegmentedControl.Item>
                        </SegmentedControl.Root>
                    </Flex>
                </Flex>
                <Button size="3" color="green" variant="solid" className='add-button'>
                    Add to Cart
                </Button>
            </Flex>
        </Box>
    )
}
