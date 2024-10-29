import React from 'react'
import { Box, Container, Flex, Text } from '@radix-ui/themes'
import { ImageSlider } from '../image-slider/ImageSlider'
import { ProductInfo } from '../product-info/ProductInfo'
import "./ProductPage.css"
import { productImages } from './helpers'

export const ProductPage: React.FC = () => {
  return (
    <Box>
      <Container style={{ maxWidth: "1200px", margin: "0 auto" }} p="20px">
        <Flex gap="5" justify="between" direction={{initial:"column", md: "row"}}  className='product-wrapper' pt="10px" mb='20px'>
          <ImageSlider images={productImages} />
          <ProductInfo title="Apple iPhone 15 Pro 128GB" />
        </Flex>
        <Box>
          <Box>
            <Text weight='medium'>Description:</Text>
          </Box>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum ipsum perferendis natus accusamus praesentium, adipisci consectetur autem corporis velit? Sed modi enim quia earum.</Text>
        </Box>
      </Container>
    </Box>
  )
}