import React, { useState } from 'react'
import { Box, Container, VStack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const App = () => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const toggleCart = () => {
    setShowCart(!showCart)
    setShowCheckout(false)
  }

  const toggleCheckout = () => {
    setShowCheckout(!showCheckout)
    setShowCart(false)
  }

  return (
    <Box minHeight="100vh" bg="gray.50">
      <Navbar cartItemCount={cart.length} toggleCart={toggleCart} />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          {!showCart && !showCheckout && (
            <ProductList addToCart={addToCart} />
          )}
          {showCart && (
            <Cart 
              cartItems={cart} 
              removeFromCart={removeFromCart} 
              toggleCheckout={toggleCheckout}
            />
          )}
          {showCheckout && (
            <Checkout cartItems={cart} />
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export default App