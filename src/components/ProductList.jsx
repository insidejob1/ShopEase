import React from 'react'
import { SimpleGrid, Heading, Text, VStack, Box, useColorModeValue } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import bluetooth_image from '../assets/bluetooth_speaker.jpeg'
import portable_charger_image from '../assets/portable_charger.jpeg'

const products = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'High-quality wireless earbuds with noise cancellation.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Feature-packed smartwatch with health tracking.' },
  { id: 3, name: 'Portable Charger', price: 49.99, image: portable_charger_image, description: 'High-capacity portable charger for all your devices.' },
  { id: 4, name: 'Bluetooth Speaker', price: 89.99, image: bluetooth_image, description: 'Powerful Bluetooth speaker with long battery life.' },
  { id: 5, name: 'Laptop Backpack', price: 59.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Durable and spacious laptop backpack with multiple compartments.' },
  { id: 6, name: 'Wireless Mouse', price: 29.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Ergonomic wireless mouse for improved productivity.' },
  { id: 7, name: 'Fitness Tracker', price: 69.99, image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Advanced fitness tracker with heart rate monitoring.' },
  { id: 8, name: 'Wireless Keyboard', price: 49.99, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Slim and responsive wireless keyboard for comfortable typing.' },
]

const ProductList = ({ addToCart }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <VStack spacing={12} align="stretch">
      <Box 
        bg={bgColor} 
        p={8} 
        borderRadius="lg" 
        boxShadow="md" 
        textAlign="center"
      >
        <Heading as="h1" size="2xl" color="teal.500" mb={4}>
          Welcome to ShopEase
        </Heading>
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          Built by Aritra Routh, 4th year student
        </Text>
        <Text fontSize="lg" color={textColor} mt={2}>
          I hope you enjoy browsing through my shopping website which has wide range of selection of tech accessories. Happy shopping!
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        <Heading size="xl" textAlign="center" color="teal.600">Our Products</Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">Discover our wide range of high-quality tech accessories</Text>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </SimpleGrid>
      </VStack>
    </VStack>
  )
}

export default ProductList