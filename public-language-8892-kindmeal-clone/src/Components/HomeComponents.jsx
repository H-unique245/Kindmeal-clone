import { Box, Center, Flex, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react";

function HomeComponents(){
    const galleryComponent1Props={
        heading:'Latest News & Videos',
        link1:'Save Lives with Your Blog',
        link2:'News & Articles',
        link3:'Floow Our Facebook',
        src1:'https://www.kindmeal.my/photos/article/20/20130-l.jpg',
        imgText1:'Hearty Chickpea Curry',
        src2:'https://www.kindmeal.my/photos/article/20/20129-l.jpg',
        imgText2:"Indulge in BINGS Banting's decadent desserts of Bingsu, cube toasts, waffles and homemade pastries.",
        src3:'https://www.kindmeal.my/photos/article/20/20126-l.jpg',
        imgText3:'Ethel The Tortoise"s Bedtime Routine 🐢 ',
        src4:'https://www.kindmeal.my/photos/article/20/20122-l.jpg',
        imgText4:'Watch Sally"s Incredible Transformation',
        src5:'https://www.kindmeal.my/photos/article/20/20118-l.jpg',
        imgText5:'Nature"s Miracle Orphans: Orphan Koala Plays With Carer',
        imgH:'80%',
        boxH:'250px',
    }
    const galleryComponent2Props={
        heading:'Yummylicious Moments',
        link1:'Secret Recipes ',
        link2:' Member Hot Picks ',
        link3:' Photo Moments',
        src1:'https://www.kindmeal.my/photos/moment/24/24309-46678-s.jpg',
        imgHeading1:'Destin Vegetarian Restaurant',
        imgText1:'VyVian',
        src2:'https://www.kindmeal.my/photos/deal/7/707-4819-s.jpg',
        imgHeading2:'Simple Is the Best',
        imgText2:'jolenesaw',
        src3:'https://www.kindmeal.my/photos/moment/24/24307-46677-s.jpg',
        imgHeading3:'Restaurant Hao Kai Xin 街頭燒蟹炒啦啦',
        imgText3:'karenkhong',
        src4:'https://www.kindmeal.my/photos/deal/7/717-5054-s.jpg',
        imgHeading4:'Your Healthier Options',
        imgText4:'munhaoyoong',
        src5:'https://www.kindmeal.my/photos/moment/24/24305-46676-s.jpg',
        imgHeading5:'Amelio Desa Parkcity',
        imgText5:'FatJedi',
        imgH:'70%',
        boxH:'270px',
    }
    const galleryComponent3Props={
        heading:'Discover Restaurants',
        link1:' Vegetarian Directory ',
        link2:'   Restaurant Menu ',
        link3:'  Food Map',
        src1:'https://www.kindmeal.my/photos/item/0/564-7788-s.jpg',
        imgText1:'Black Vinegar Rice',
        src2:'https://www.kindmeal.my/photos/item/0/567-7919-s.jpg',
        imgText2:'Bibimbap',
        src3:'https://www.kindmeal.my/photos/item/0/201-1916-s.jpg',
        imgText3:'Bun Family',
        src4:'https://www.kindmeal.my/photos/item/0/494-6160-s.jpg',
        imgText4:'Garden Burger',
        src5:'https://www.kindmeal.my/photos/item/0/117-1066-s.jpg',
        imgText5:'Moist Chocolate Cake With Apple Crumble',
        imgH:'80%',
        boxH:'270px',
    }
    const galleryComponent4Props={
        heading:'Amazing Superheroes',
        link1:'Latest Buzz ',
        link2:' Lifestyle Ambassadors ',
        link3:' Win Gifts! ',
        src1:'https://www.kindmeal.my/photos/member/32/32589-m.jpg',
        imgText1:'YongKengCheng',
        src2:'https://www.kindmeal.my/photos/member/24/24811-m.jpg',
        imgText2:'ChanYiXuan',
        src3:'https://www.kindmeal.my/photos/member/24/24507-m.jpg',
        imgText3:'AngJosephine',
        src4:'https://www.kindmeal.my/photos/member/19/19027-m.jpg',
        imgText4:'KcGoh',
        src5:'https://www.kindmeal.my/photos/member/34/34361-m.jpg',
        imgText5:'TrinnyTham1',
        imgH:'80%',
        boxH:'250px',
    }
    return (
        <div>
            <div style={{backgroundColor:'#ececec'}}>
                <GalleryComponent props={galleryComponent1Props}  />
                <GalleryComponent props={galleryComponent2Props}/>
                <GalleryComponent props={galleryComponent3Props}/>
                <GalleryComponent props={galleryComponent4Props} />
            </div>
            <div>
            </div>
            
        </div>
    )
}




function GalleryComponent({props}  ){
    // console.log(props)
    return (
        <div>
            <Center>
                <Box boxShadow='base' rounded='lg' w='80%'   p={3}  mt={5} mb={5} bg='white' >
                    <Flex alignItems='center' mb={4}>
                        <Text fontSize='1.5vw' color='gray'  > {props.heading} </Text>
                        <Spacer/>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link1} </Link>
                        <Text fontSize='1.5vw' mr={3} ml={3} >•</Text>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link2} </Link>
                        <Text fontSize='1.5vw' mr={3} ml={3} >•</Text>
                        <Link color='#2184FF' fontSize='1.5vw' > {props.link3} </Link>
                    </Flex>
                    <Flex gap={3} w='100%' >
                        <Box w='20%' h={props.boxH} >
                            <Image w='100%' h={props.imgH} src={props.src1}  rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading1} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText1} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH}>
                            <Image w='100%' h='200px'  src={props.src2} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading2} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText2} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH} >
                            <Image w='100%' h={props.imgH}  src={props.src3} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading3} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText3} </Text>
                        </Box>
                        <Box w='20%'  h={props.boxH}>
                            <Image w='100%' h={props.imgH}  src={props.src4} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading4} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText4} </Text>
                        </Box>
                        <Box w='20%' h={props.boxH} >
                            <Image w='100%' h={props.imgH}   src={props.src5} rounded='md' ></Image>
                            <Heading color='gray' fontSize='1.25vw' fontWeight='400' > {props.imgHeading5} </Heading>
                            <Text fontSize='1.15vw' > {props.imgText5} </Text>
                        </Box>
                    </Flex>
                </Box>
            </Center>
            
        </div>
    )
}
export default HomeComponents;