import { Box, Center, Flex, Heading, Image, Link, Spacer, Text } from "@chakra-ui/react";

function HomeComponents(){
    const galleryComponent1Props={
        heading:'Latest News & Videos',
        link1:'Save Lives with Your Blog',
        link2:'News & Articles',
        link3:'Floow Our Facebook',
        src1:'https://www.kindmeal.my/photos/article/20/20129-l.jpg',
        imgText1:'The Top 7 Smartest Animals',
        src2:'https://www.kindmeal.my/photos/article/20/20129-l.jpg',
        imgText2:"Indulge in BINGS Banting's decadent desserts of Bingsu, cube toasts, waffles and homemade pastries.",
        src3:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297490495_5300872103341148_4812180245387187070_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=VfNjjhciLoUAX86UY6i&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT_GHdGkvDhzxO3jgLTv94G2xASUrj-lxmmXAlVC-BxDQA&oe=630A5A29',
        imgText3:'Busy Beaver Delivers Lettuce To Zoo Friends',
        src4:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297116651_384596210475584_5376654219115704349_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ggyHZY5ZmbAAX9m9siT&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT9F76zk5d8CEhk0uLfmlJg51NvLuF5wuf5Q3y0xPiVyUg&oe=630B021C',
        imgText4:'Teaching My Pet Pig To Talk 🐷',
        src5:'https://scontent-sin6-1.xx.fbcdn.net/v/t15.5256-10/297287041_759478638588669_7244009508553843157_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RDmX5SwUhPkAX-8LWo3&_nc_ht=scontent-sin6-1.xx&edm=ALdPpPkEAAAA&oh=00_AT_UBq4TcazOWct44fdPWhg4yxetA2qAzBeAjEMDDlxvAg&oe=630A3112',
        imgText5:'Hatching Animals 🐣',
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