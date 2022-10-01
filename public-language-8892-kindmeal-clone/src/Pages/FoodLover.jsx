import React from 'react'
import { Box,  Heading, Text, ListItem,  UnorderedList,
  Image,
  VStack,
  HStack,
  Flex, } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import FoodLoverForm from '../Components/FoodLoverForm';

function FoodLover() {
  return (
    <HStack justifyContent="space-evenly">
      Signup form for FoodLover
      <Box padding={15} pt={0} ml={5} >
      <Link to= "/join"><VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} border="1px solid gray"  bgColor="blackAlpha.100" >
         <Image src="https://www.kindmeal.my/images/join_normal.png" alt="lover" />
        <Text _hover={{textDecoration:"underline"}} >Food Lover Sign Up</Text>
      </VStack>
        </Link>
      <Link to="/joinshop" >
      <VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} >
        <Image src="https://www.kindmeal.my/images/join_shop.png" alt="lover" />
        <Text _hover={{textDecoration:"underline"}}> Restaurant Sign Up</Text>
      </VStack>
      </Link>
      <VStack boxShadow="dark-lg" rounded="xl" height="max-content" m={6} p={4} py={6} >
        <Heading>Why KindMeal?</Heading>
        <UnorderedList textAlign='left' margin='20px 0 20px 150px' w="70%"  >
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
        <Box w='60%' margin='0 auto' p='5' >
            <Flex flexDirection='column' textAlign='left' gap='3' >
                <Heading fontSize='2vw' fontWeight='400' >Food Lover? Sign Up Now or <Link  to="/#" _hover={{textDecoration:"underline"}} ><span style= {{color:"#2184ff"}}>Login With Facebook</span></Link> </Heading>
                <Text color='blackAlpha.900' fontWeight='500' >Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
                <Text color='blackAlpha.900' fontWeight='500' >KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
            </Flex>
            <FoodLoverForm buttonText="Join Now"  />
        </Box>
    </HStack>
  )
}


export default FoodLover
