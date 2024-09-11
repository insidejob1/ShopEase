import React, { useState } from 'react'
import { 
  VStack, 
  Heading, 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  useColorModeValue, 
  Text,
  Select,
  SimpleGrid,
  useToast
} from '@chakra-ui/react'

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
  })

  const toast = useToast()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success message
    toast({
      title: "Success!",
      description: "Your order has been placed.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    })
    // Reset form
    setFormData({
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      gender: '',
      dateOfBirth: '',
    })
  }

  const bgColor = useColorModeValue('white', 'gray.800')
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <VStack spacing={6} align="stretch" bg={bgColor} p={6} borderRadius="lg" boxShadow="xl">
      <Heading size="xl" color="teal.500">Checkout</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <SimpleGrid columns={[1, null, 2]} spacing={4} width="100%">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} />
            </FormControl>
          </SimpleGrid>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={formData.address} onChange={handleChange} />
          </FormControl>
          <SimpleGrid columns={[1, null, 2]} spacing={4} width="100%">
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select name="gender" placeholder="Select gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <FormControl isRequired>
            <FormLabel>Date of Birth (DD-MM-YYYY)</FormLabel>
            <Input
              name="dateOfBirth"
              type="text"
              placeholder="DD-MM-YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
              pattern="\d{2}-\d{2}-\d{4}"
            />
          </FormControl>
          <Text fontWeight="bold" fontSize="xl" alignSelf="flex-start">
            Total: ${total.toFixed(2)}
          </Text>
          <Button type="submit" colorScheme="teal" size="lg" width="100%">
            Place Order
          </Button>
        </VStack>
      </form>
    </VStack>
  )
}

export default Checkout