import { Button,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import { extendTheme } from '@chakra-ui/react'

// // 2. Update the breakpoints as key-value pairs
// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// // 3. Extend the theme
// const theme = extendTheme({ breakpoints })

function LogUserLinks() {
  return (
    <>
     <Stack direction={{ base: 'column', sm: 'row' }} display={{base:"none", md:"flex", lg:"flex"}} borderRight="1.5px solid black" spacing={{base:1, md:4}} align='center'>
  <Text fontSize={{base:"8px",sm:"10px", md:"15px"}}>Login</Text>
  <Button width={{base:"1rem",sm:"2.8rem", md:"3rem",lg:"5rem"}} height={{md:"1.5rem"}} fontSize={{base:"8px",sm:"10px", md:"15px"}}colorScheme='facebook'>Facebook</Button>
  <Button width={{base:"1.5rem", sm:"2.5rem",md:"3rem",lg:"5rem"}} height={{md:"1.5rem"}} fontSize={{base:"8px",sm:"10px", md:"15px"}} bgColor="black" color="white"> Email</Button>
</Stack>
<Text >Signup</Text>

    </>
  )
}

export default LogUserLinks
