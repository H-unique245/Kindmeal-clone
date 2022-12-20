import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        display={{ base: "none", md: "flex" }}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          direction={{ base: "column", sm: "row" }}
          width={{ sm: "80%", md: "100%" }}
          m={{ sm: 2 }}
          spacing={{ sm: 2, md: 4, lg: 6 }}
        >
          <Box
            color="white"
            rounded="full"
            p={1.5}
            bg={useColorModeValue("gray.400", "grey.700")}
          >
            <Link href={"https://www.kindmeal.my/widget.htm"} isExternal>
              <FaLink size={25} />
            </Link>
          </Box>
          <Box
            color="white"
            rounded="full"
            p={1.5}
            bg={useColorModeValue("gray.400", "grey.700")}
          >
            <Link href={"https://www.facebook.com/KindMeal.my"} isExternal>
              <FaFacebookF size={25} />
            </Link>
          </Box>
          <Box
            color="white"
            rounded="full"
            p={1.5}
            bg={useColorModeValue("gray.400", "grey.700")}
          >
            <Link href={"https://twitter.com/KindMeal"} isExternal>
              <FaTwitter size={25} />
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
