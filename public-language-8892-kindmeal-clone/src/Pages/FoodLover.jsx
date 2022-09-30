import React from 'react'
import { Box, Flex, Heading, Link, Text, } from "@chakra-ui/react";
import FoodLoverForm from '../Components/FoodLoverForm';

function FoodLover() {
  return (
    <div>
      Signup form for FoodLover
        <Box w='60%' margin='0 auto' p='5' >
            <Flex flexDirection='column' textAlign='left' gap='3' >
                <Heading fontSize='2vw' fontWeight='400' >Food Lover? Sign Up Now or <Link color='blue.500' >Login With Facebook</Link> </Heading>
                <Text color='blackAlpha.900' fontWeight='500' >Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
                <Text color='blackAlpha.900' fontWeight='500' >KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
            </Flex>
            <FoodLoverForm buttonText="Join Now"  />
        </Box>
    </div>
  )
}

export default FoodLover
