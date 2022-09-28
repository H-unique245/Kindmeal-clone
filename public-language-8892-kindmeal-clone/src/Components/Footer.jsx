import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
//   import Styles from "./Footer.module.css"
  import { extendTheme } from '@chakra-ui/react'
  

// 2. Define the new text styles
export const theme = extendTheme({
    Link: {
      // you can also use responsive styles
      fontSize: "14px",
      lineHeight: '12px',
    },
  
})
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'sm'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const List = ({ children,href }) => {
    return (
      <Link href={href}  fontSize={'sm'} lineHeight="shorter" m="0rem">
        {children}
      </Link>
    );
  };

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('green.400', 'green.900')}
        color={useColorModeValue('white')}>
        <Container as={Stack} maxW={'6xl'} px={40} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>General</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Features</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Social Media</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Mobile</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
              <Stack align={'flex-start'}>
              <ListHeader>Exciting Promos</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
            </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Pet Finder.my</ListHeader>
              <List href={'#'}>Overview</List>
              <List href={'#'}>Features</List>
              <List href={'#'}>Tutorials</List>
              <List href={'#'}>Pricing</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
              <List href={'#'}>Releases</List>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          
          <Text pt={2} fontSize="10px" textAlign={'center'}>
              Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
          </Text>
          <Text pt={2} fontSize="10px" textAlign={'center'}>
          This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
          </Text>
        </Box>
      </Box>
    );
  }