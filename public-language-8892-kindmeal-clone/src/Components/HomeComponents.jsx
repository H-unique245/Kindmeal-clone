import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GalleryCompProps } from "../Data/data";
function HomeComponents() {
  return (
    <div>
      <div style={{ backgroundColor: "#ececec" }}>
        {GalleryCompProps.map((el) => {
          return <GalleryComponent key={el.heading} props={el} />;
        })}
      </div>
      <div></div>
    </div>
  );
}

function GalleryComponent({ props }) {
  // console.log(props)
  return (
    <div>
      <Center>
        <Box boxShadow="base" rounded="lg" w="80%" p={3} mt={5} bg="white">
          <Flex alignItems="center" mb={4}>
            <Text fontSize="1.5vw" color="gray">
              {props.heading}
            </Text>
            <Spacer />
            <Link color="#2184FF" fontSize="1.5vw">
              {props.link1}
            </Link>
            <Text fontSize="1.5vw" mr={3} ml={3}>
              •
            </Text>
            <Link color="#2184FF" fontSize="1.5vw">
              {props.link2}
            </Link>
            <Text fontSize="1.5vw" mr={3} ml={3}>
              •
            </Text>
            <Link color="#2184FF" fontSize="1.5vw">
              {props.link3}
            </Link>
          </Flex>
          <SimpleGrid
            columns={[2, 3, 4, 5]}
            spacing="20px"
            p={2}
            minH="max-content"
          >
            <Box
              boxSize={{ base: "100px", md: "100px", lg: "200px" }}
              overflowY={"hidden"}
            >
              <Image w="full" h="80%" src={props.src1} rounded="md"></Image>
              <Heading color="gray" fontSize="sm" fontWeight="400">
                {props.imgHeading1}
              </Heading>
              <Text fontSize={"sm"}> {props.imgText1} </Text>
            </Box>
            <Box
              boxSize={{ base: "100px", md: "100px", lg: "200px" }}
              overflowY={"hidden"}
            >
              <Image w="full" h="80%" src={props.src2} rounded="md"></Image>
              <Heading color="gray" fontSize="sm" fontWeight="400">
                {props.imgHeading2}
              </Heading>
              <Text fontSize="sm"> {props.imgText2} </Text>
            </Box>
            <Box
              boxSize={{ base: "100px", md: "100px", lg: "200px" }}
              overflowY={"hidden"}
            >
              <Image w="full" h="80%" src={props.src3} rounded="md"></Image>
              <Heading color="gray" fontSize="sm" fontWeight="400">
                {props.imgHeading3}
              </Heading>
              <Text fontSize="sm"> {props.imgText3} </Text>
            </Box>
            <Box
              boxSize={{ base: "100px", md: "100px", lg: "200px" }}
              overflowY={"hidden"}
            >
              <Image w="full" h="80%" src={props.src4} rounded="md"></Image>
              <Heading color="gray" fontSize="sm" fontWeight="400">
                {props.imgHeading4}
              </Heading>
              <Text fontSize="sm"> {props.imgText4} </Text>
            </Box>
            <Box
              boxSize={{ base: "100px", md: "100px", lg: "200px" }}
              overflowY={"hidden"}
            >
              <Image w="full" h="80%" src={props.src5} rounded="md"></Image>
              <Heading color="gray" fontSize="sm" fontWeight="400">
                {props.imgHeading5}
              </Heading>
              <Text fontSize="sm"> {props.imgText5} </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
}
export default HomeComponents;
