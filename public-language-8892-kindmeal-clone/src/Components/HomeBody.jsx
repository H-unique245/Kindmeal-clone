import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function HomeBody() {
  const cardProps = [
    {
      src: "https://www.kindmeal.my/images/intro_deal.png",
      heading: "Get Great Deals",
      text: "Show our FREE digital coupons to instantly enjoy exciting deals",
    },
    {
      src: "https://www.kindmeal.my/images/intro_kindmoment.png",
      heading: "Share KindMoments",
      text: "Spread the joy by sharing your yummy dining moments",
    },
    {
      src: "https://www.kindmeal.my/images/intro_menu.png",
      heading: "Discover Delicious Food",
      text: "Explore the latest exquisite offerings and creative menus",
    },
    {
      src: "https://www.kindmeal.my/images/intro_friends.png",
      heading: "Meet Food Lovers",
      text: "Make new, compassionate friends and share great food tips",
    },
  ];
  return (
    <div>
      <Center>
        <Box mt="50px" mb="30px">
          <Heading
            color="#666666"
            textAlign={"center"}
            w="70%"
            m={"auto"}
            fontSize={{ base: "sm", sm: "2xl", md: "3xl", lg: "5xl" }}
          >
            Introducing The World's 1st Meat-Free Lifestyle Platform
          </Heading>
          <Flex justifyContent="center" mt={5} mb="30px" gap={5}>
            <Text color="#999999" fontSize="2vw">
              Brought to you by
            </Text>
            <Image
              w="32%"
              src="https://www.kindmeal.my/images/logo-petfinder.png"
            ></Image>
          </Flex>
          <Text color="#888888" fontSize="2vw">
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </Text>
        </Box>
      </Center>
      <Center>
        <Box w="80%" mt="20px" mb="40px">
          <SimpleGrid columns={[2, 2, 4]}>
            {cardProps.map((card) => {
              return (
                <Center key={card.heading}>
                  <Flex
                    rounded="20px"
                    p={4}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#666666"
                  >
                    <Image
                      src={card.src}
                      boxSize={{
                        base: "7vh",
                        sm: "10vh",
                        md: "13vh",
                        lg: "18vh",
                      }}
                    />
                    <Text fontSize="1.55vw"> {card.heading} </Text>
                    <Text fontSize="0.95vw"> {card.text} </Text>
                  </Flex>
                </Center>
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
      <Center>
        <Text
          w="80% "
          mt="40px"
          mb="40px"
          fontSize={{ base: "1vw", sm: "1.4vw", md: "1.5vw" }}
          color="#666666"
        >
          Any restaurant or cafe can join KindMeal, vegetarian or not, as long
          as the deals and menu featured are meat-free. Enjoy a great meat-free
          dining experience. Easily save animal lives, health, environment and
          money now!
        </Text>
      </Center>
      <Center>
        <Box
          minW="200px"
          w="max-content"
          m="auto"
          rounded={10}
          bg="red.500"
          p={5}
          color="#fff"
        >
          <Text fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
            Join KindMeal Now
          </Text>
          <Text fontSize="large">Your tasty journey begins here</Text>
        </Box>
      </Center>
      <Center>
        <Text w="80% " mt="10px" mb="10px" fontSize="2vw" color="#888888">
          As Featured In
        </Text>
      </Center>
      <Center>
        <Image
          mt="10px"
          mb="40px"
          src="https://www.kindmeal.my/images/media-feature2.png"
        />
      </Center>
      <Box align="center">
        <Image
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
          alt="home_footer_image"
        />
      </Box>
    </div>
  );
}
