import React from 'react'
import { Flex, Image, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item, removeFromCart }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex 
      borderWidth={1} 
      borderRadius="lg" 
      p={4} 
      justify="space-between" 
      align="center"
      bg={bgColor}
    >
      <Image src={item.image} alt={item.name} boxSize="50px" objectFit="cover" mr={4} borderRadius="md" />
      <Text flex={1} fontWeight="medium">{item.name}</Text>
      <Text mr={4} fontWeight="bold">${item.price.toFixed(2)}</Text>
      <Button 
        colorScheme="red" 
        onClick={() => removeFromCart(item.id)}
        size="sm"
        leftIcon={<FaTrash />}
      >
        Remove
      </Button>
    </Flex>
  )
}

export default CartItem;