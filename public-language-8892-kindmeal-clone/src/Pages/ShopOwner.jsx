import React from 'react'

import { Box, Flex, Heading, Link, Text,  List,
  ListItem,
  OrderedList,
  UnorderedList,
  Image,
  VStack,
  HStack, } from "@chakra-ui/react";
import FoodLoverForm from '../Components/FoodLoverForm';

function ShopOwner() {
  return (
    
    <HStack justifyContent="space-between" p={2}>
      Sign up form for shop Owner
      <Box ml={15}>
        <VStack>
        <Image src="https://www.kindmeal.my/images/join_normal.png" alt="lover" />
        <Text>Food Lover Sign Up</Text>
      </VStack>
      <VStack>
        <Image src="https://www.kindmeal.my/images/join_shop.png" alt="lover" />
        <Text>Restaurant Sign Up</Text>
      </VStack>
      <VStack>
        <Heading>Why KindMeal?</Heading>
        <UnorderedList margin='20px 0 20px 50px ' >
                      <ListItem>Exclusive meat-free deals</ListItem>
                      <ListItem>Share yummy food moments</ListItem>
                      <ListItem>Offer coupons & deals to attract new customers</ListItem>
                      <ListItem>Showcase your delicious meat-free meals</ListItem>
                      <ListItem>Interact with our community of food lovers</ListItem>
                  </UnorderedList>
      </VStack>
      </Box>
      <Box w='60%' margin='0 auto' p='5' textAlign='left'>
          <Box margin='20px 0 '  >
              <Heading fontSize='2vw' fontWeight='500' >Restaurant / Shop Owner? Sign Up Now. </Heading>
              <Text color='blackAlpha.900' fontWeight='500' >Improve your business, build brand loyalty, and save precious animal lives! Join KindMeal now to enjoy the following features:</Text>
              <Box>
                  <UnorderedList align="" >
                      <ListItem>Effectively reach over 200,000 consumers</ListItem>
                      <ListItem>Feature your shop across premium partner platforms & media channels</ListItem>
                      <ListItem>Meet friendly food lovers</ListItem>
                      <ListItem>Discover cool restaurants</ListItem>
                      <ListItem>Email updates on tasty deals</ListItem>
                      <ListItem>Instant coupons & dining</ListItem>
                      <ListItem>No upfront payment, booking or printing</ListItem>
                  </UnorderedList>
              </Box>
              <Text color='blackAlpha.900' fontWeight='500' >To support our welfare causes, we offer simple, affordable Premium Plans on a monthly subscription basis, starting from RM 99 only. No deal commissions, no hidden fees. Premium Plan details are available upon signing up.</Text>
          </Box>
          <Box mt='50px'>
              <Heading color='#666666' fontWeight='500' >Personal Profile</Heading>
              <Text>First, we setup your personal profile, then proceed to configure your shop promotions.</Text>
              <FoodLoverForm buttonText="Set Up My Shop & Deals >>" />
          </Box>
      </Box>
    </HStack>
  )
}

export default ShopOwner


// Meet friendly food lovers
// Discover cool restaurants
// Email updates on tasty deals
// Instant coupons & dining
// No upfront payment, booking or printing