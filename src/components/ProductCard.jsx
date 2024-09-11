import React from 'react'
import { Box, Image, Text, Button, VStack, Heading, useColorModeValue } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ product, addToCart }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box 
      borderWidth={1} 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="lg"
      bg={bgColor}
      transition="all 0.3s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
    >
      <Image src={product.image} alt={product.name} height="200px" width="100%" objectFit="cover" />
      <VStack p={4} align="start" spacing={3}>
        <Heading size="md" color="teal.500">{product.name}</Heading>
        <Text color={textColor} fontSize="sm">{product.description}</Text>
        <Text fontWeight="bold" fontSize="xl">${product.price.toFixed(2)}</Text>
        <Button 
          colorScheme="teal" 
          leftIcon={<FaShoppingCart />}
          onClick={() => addToCart(product)}
          width="100%"
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  )
}

export default ProductCard