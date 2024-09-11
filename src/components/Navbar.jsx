import React from 'react'
import { Box, Flex, Heading, Button, Badge, useColorModeValue } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = ({ cartItemCount, toggleCart }) => {
  const bgColor = useColorModeValue('teal.500', 'teal.200')
  const textColor = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bgColor} py={4} px={8} shadow="md">
      <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">
        <Heading color={textColor} size="lg">ShopEase</Heading>
        <Button 
          onClick={toggleCart} 
          colorScheme="whiteAlpha"
          variant="outline"
          position="relative"
          leftIcon={<FaShoppingCart />}
        >
          Cart
          {cartItemCount > 0 && (
            <Badge 
              colorScheme="red" 
              borderRadius="full" 
              position="absolute" 
              top="-1" 
              right="-1"
            >
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar