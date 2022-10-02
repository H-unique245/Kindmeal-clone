import React, { useEffect } from 'react'

import { Box,  Heading, Text, ListItem,  UnorderedList,
  Image,
  VStack,
  HStack, } from "@chakra-ui/react";
import FoodLoverForm from '../Components/FoodLoverForm';
import { Link } from 'react-router-dom';

function ShopOwner() {

  useEffect(()=>{
    document.title='Sign Up For Delicious Discounted Meat-Free Meals | KindMeal.my'
     },[])
     // Sign Up For Delicious Discounted Meat-Free Meals | KindMeal.my ** document title
  return (
    
    <HStack justifyContent="space-evenly">
      Sign up form for shop Owner
      <Box padding={15} pt={0} mt={-250} ml={5} >
      <Link to= "/join"><VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} >
         <Image src="https://www.kindmeal.my/images/join_normal.png" alt="lover" />
        <Text _hover={{textDecoration:"underline"}} >Food Lover Sign Up</Text>
      </VStack>
        </Link>
      <Link to="/joinshop" >
      <VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} border="1px solid gray"  bgColor="blackAlpha.100">
        <Image src="https://www.kindmeal.my/images/join_shop.png" alt="lover" />
        <Text _hover={{textDecoration:"underline"}}> Restaurant Sign Up</Text>
      </VStack>
      </Link>
      <VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} >
        <Heading>Why KindMeal?</Heading>
        <UnorderedList textAlign='left' margin='20px 0 20px 150px' w="70%" >
                      <ListItem>Exclusive meat-free deals</ListItem>
                      <ListItem>Share yummy food moments</ListItem>
                      <ListItem>Meet friendly food lovers</ListItem>
                      <ListItem>Discover cool restaurants</ListItem>
                      <ListItem>Email updates on tasty deals</ListItem>
                      <ListItem>Instant coupons & dining</ListItem>
                      <ListItem>No upfront payment, booking or printing</ListItem>
                  </UnorderedList>
                  <Text _hover={{textDecoration:"underline", cursor:"pointer"}}> More about KindMeal » </Text>
      </VStack>
      </Box>
      <Box w='60%' margin='0 auto' p='5' textAlign='left'>
          <Box margin='20px 0 '  >
              <Heading fontSize='2vw' fontWeight='500' >Restaurant / Shop Owner? Sign Up Now. </Heading>
              <Text color='blackAlpha.900' fontWeight='500' >Improve your business, build brand loyalty, and save precious animal lives! Join KindMeal now to enjoy the following features:</Text>
              <Box>
                  <UnorderedList margin='20px 0 20px 50px' >
                      <ListItem>Effectively reach over 200,000 consumers</ListItem>
                      <ListItem>Feature your shop across premium partner platforms & media channels</ListItem>
                      <ListItem>Offer coupons & deals to attract new customers</ListItem>
                      <ListItem>Showcase your delicious meat-free meals</ListItem>
                      <ListItem>Interact with our community of food lovers</ListItem>
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