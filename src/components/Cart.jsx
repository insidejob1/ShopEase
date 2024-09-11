import React from 'react'
import { VStack, Heading, Button, Text, useColorModeValue } from '@chakra-ui/react'
import CartItem from './CartItem'

const Cart = ({ cartItems, removeFromCart, toggleCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <VStack spacing={6} align="stretch" bg={bgColor} p={6} borderRadius="lg" boxShadow="xl">
      <Heading size="xl" color="teal.500">Your Cart</Heading>
      {cartItems.length === 0 ? (
        <Text fontSize="lg">Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <Heading size="md">Total: ${total.toFixed(2)}</Heading>
          <Button colorScheme="teal" size="lg" onClick={toggleCheckout}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </VStack>
  )
}

export default Cart