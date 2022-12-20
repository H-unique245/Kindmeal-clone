import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
//   import Styles from "./Footer.module.css"
import { extendTheme } from "@chakra-ui/react";

// 2. Define the new text styles
export const theme = extendTheme({
  Link: {
    // you can also use responsive styles
    fontSize: "14px",
    lineHeight: "12px",
  },
});

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"sm"} mb={2}>
      {children}
    </Text>
  );
};

const List = ({ children, href }) => {
  return (
    <Link href={href} fontSize={"12px"} m="0rem">
      {children}
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("green.400", "green.900")}
      color={useColorModeValue("white")}
      border={"1px solid red"}
    >
      <Container
        as={Stack}
        maxW={"maxContent"}
        px={{ base: 15, sm: 15, md: 40 }}
        py={{ base: 10, sm: 10, md: 10 }}
      >
        <SimpleGrid columns={[1, 2, 3, 5]} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>General</ListHeader>
            <List href={"#"}>Home</List>
            <List href={"#"}>Sign Up</List>
            <List href={"#"}>Businesses / Restaurateurs</List>
            <List href={"#"}>Advertising</List>
            <List href={"#"}>About KindMeal.my</List>
            <List href={"#"}>Help & FAQ</List>
            <List href={"#"}>Terms & Conditions</List>
            <List href={"#"}>Inspiring Partners</List>
            <List href={"#"}>Lifestyle Ambassadors</List>
            <List href={"#"}>Jobs & Careers</List>
            <List href={"#"}>Contact Us</List>
          </Stack>
          <Stack align={"flex-start"} maxW={"maxContent"}>
            <ListHeader>Features</ListHeader>
            <List href={"#"}>Meat-Free Deals</List>
            <List href={"#"}>Tasty Menus</List>
            <List href={"#"}>Kind Moments</List>
            <List href={"#"}>Meat-Free Recipes</List>
            <List href={"#"}>Member Recommendations</List>
            <List href={"#"}>Featured Restaurants</List>
            <List href={"#"}>Vegetarian & Vegan Directory</List>
            <List href={"#"}>Food Map</List>
            <List href={"#"}>Become A Superhero</List>
            <List href={"#"}>Vegan News & Vegetarian Articles</List>
            <List href={"#"}>Latest Comments</List>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Social Media</ListHeader>
            <List href={"#"}>KindMeal Widget</List>
            <List href={"#"}>Facebook</List>
            <List href={"#"}>Twitter</List>
            <List href={"#"}>Instagram</List>
          </Stack>
          <Stack align={"flex-start"} maxW={"maxContent"}>
            <ListHeader>Mobile</ListHeader>
            <List href={"#"}>iPhone & iPod App</List>
            <List href={"#"}>Android App</List>
            <Stack align={"flex-start"}>
              <ListHeader>Exciting Promos</ListHeader>
              <List href={"#"}>Gadhimai: Ending Mass Slaughter</List>
              <List href={"#"}>Free Meals</List>
              <List href={"#"}>Food Bloggers</List>
              <List href={"#"}>Uber CHIRP</List>
              <List href={"#"}>Jane Goodall Contest</List>
              <List href={"#"}>Win Digi iPhone 6</List>
              <List href={"#"}>Feed The Poor</List>
              <List href={"#"}>Win Superhero Gifts</List>
              <List href={"#"}>Win an iPad Mini 3</List>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Pet Finder.my</ListHeader>
            <List href={"#"}>Adopt A Pet</List>
            <List href={"#"}>Smartphone Apps</List>
            <List href={"#"}>WAGazine</List>
            <List href={"#"}>Discussion Forum</List>
            <List href={"#"}>Medical Fund</List>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Text pt={2} fontSize="10px" textAlign={"center"}>
          Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
        </Text>
        <Text pt={2} fontSize="10px" textAlign={"center"}>
          This website promotes compassionate, meat-free dining experience. Some
          food may contain eggs, dairy products or alcohol, please view
          individual listings for details.
        </Text>
      </Box>
    </Box>
  );
}
