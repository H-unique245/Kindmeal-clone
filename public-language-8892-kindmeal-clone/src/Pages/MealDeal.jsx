import {Box, Button, Circle, Flex,  Heading,  HStack,  Image, SimpleGrid, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import Pagination from "../Components/Pagination";
import { TestimonialContent, TestimonialText } from '../Components/TestiNomial';
import {getMealData} from '../DataAPI/api';
function MealDeal(){
    const [searchParams,setSearchParams] = useSearchParams();
    const[page,setPage] = useState((+(searchParams.get("page")))||1);
    const[totalPage,setTotalPage] = useState(1);
    const[restaurants , setRestaurants] = useState([]);
    // const navigate = useNavigate()
    // const {state,dispatch , userData , handleChange , handleSubmit } = useContext(AppContext);
    // console.log('state:', state)
    // console.log('userData:', userData)

    useEffect(() => {
      document.title = `Featured Meat-Free Deals & Vegetarian Food In Malaysia | KindMeal.my`;
    }, []);
useEffect(()=>{

    handleGetRestaurantsData(page)
},[page])
useEffect(() => {
    setSearchParams({
      page
    });
  }, [page, setSearchParams]);
function handleGetRestaurantsData(page){
    getMealData(page)
    .then(
        res=>{
           let product =  res.data
           let a = JSON.parse( product.slice(1,product.length-2));
           console.log(a.data);
           setRestaurants(a.data.items)
           setTotalPage(a.data.pagetotal)
           
        }
    )
    .catch(
        err => console.log(err)
    )
}
const handlePageChange =(p)=>{
    setPage(p)
}
const handleOnePageChange=(p)=>{
    setPage(page =>page+p)
}

// console.log('restaurants:', restaurants);
// console.log('totalPage:', totalPage)
    return (
      <>
      <TestimonialContent>
        <HStack ml={0} alignSelf="left" >
          <Heading as={'h2'} fontSize={'25px'} pr={2} borderRight="2.5px solid grey" >Meat-Free Deals</Heading>
          <Text>Restaurants In Malaysia</Text>
        </HStack>
        
        < TestimonialText > 
        Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!
        </TestimonialText>
        <Text fontSize='16px' align='left' >Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</Text>
        
      </TestimonialContent>
        <Box bgColor="gray.100" >

            <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handlePageChange} handleOnePageChange={handleOnePageChange} />
            <SimpleGrid columns={[1,2]} w='80%' margin='50px  auto' spacing={10} position="relative" >
                {
                    restaurants.map(item =>(
                       
                        <Box key={item.dealid}  rounded={20} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'  h='90vh' position='relative' bg='white' >
                            <Image cursor='pointer' roundedTopRight={20} roundedTopLeft={20} src={item.dealphoto_large} w='100%' h='55vh' />
                            <Text bg='#00000080' fontSize='1.25rem' color='#fff' fontWeight='500' position='absolute' top='55%' w='100%' > {item.dealname} </Text>
                            <Circle fontSize='1.5vw'fontWeight='500' w='60px' h='60px' bg='whiteAlpha.800' position='absolute' top='4%' left='4%'  > -{item.dealdiscount1} </Circle>
                            <Text textAlign='left' fontSize='1.5vw' m={2} color='#666666' > {item.shopname_short} </Text>
                            {/* <Text  h='9%' overflow='hidden' textAlign='left'm={2} > {item.dealdesc}</Text> */}
                            <Text dangerouslySetInnerHTML={{__html:item.dealdesc}}  h='9%' overflow='hidden' textAlign='left'm={2} /> 

                            <Flex justifyContent='space-between' alignItems='center' >
                                <Button bg='red.500' color='#fff' m={2} > Get FREE Coupon </Button>
                                {/* <Flex dangerouslySetInnerHTML={ { __html:item.dealstars } } /> */}
                                <Flex gap={2} >
                                    <Image w='10%'   src='https://www.kindmeal.my/images/icon_star.png'  />
                                    <Image  w='10%'  src='https://www.kindmeal.my/images/icon_star.png'  />
                                    <Image w='10%'   src='https://www.kindmeal.my/images/icon_star.png'  />
                                    <Image w='10%'   src='https://www.kindmeal.my/images/icon_star.png'  />
                                    <Image  w='10%'  src='https://www.kindmeal.my/images/icon_star_grey.png' />
                                </Flex>
                            </Flex>
                            <Box mt={1} pt='1' borderTop='1px' borderColor='gray.500'   >
                                <Flex justifyContent='space-around'>
                                    <Flex gap={3} ml={3}   >
                                        {item.dealegg==="Y"?  <img src="https://www.kindmeal.my/images/icon_egg.png" alt=""  width='25%' height='80%' /> :<img src='https://www.kindmeal.my/images/icon_egg_disabled.png'  alt="" width='25%' height='80%'  />}
                                        {item.dealdairy==="Y"?  <img src="https://www.kindmeal.my/images/icon_milk.png" alt="" width='25%' height='80%' /> :<img src='https://www.kindmeal.my/images/icon_milk_disabled.png'   alt="" width='25%' height='80%' />}
                                        {item.dealalcohol==="Y"?  <img src="https://www.kindmeal.my/images/icon_alcohol.png" alt="" width='25%' height='80%' /> :<img src='https://www.kindmeal.my/images/icon_alcohol_disabled.png' alt=""  width='25%' height='80%'  />}
                                    </Flex>
                                    <Flex flexDirection='column'borderLeft='1px' borderRight='1px' borderColor='gray.500' pr={7} pl={7}  >
                                        <Text fontSize='0.9vw' > KindMeal Discount </Text>
                                        <Text fontSize='1.1vw'color='red' > {item.dealprice2} </Text>
                                    </Flex>
                                    <Flex flexDirection='column' >
                                        <Text fontSize='1.1vw'  dangerouslySetInnerHTML={{__html:item.dealexpiry}}  ></Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box> 
                    ))
                }
            </SimpleGrid>
            <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handlePageChange} handleOnePageChange={handleOnePageChange} />
            <Box align="center"><Image src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="meals_footer_image" /></Box>
        </Box>
        </>
    )
}
export default MealDeal;