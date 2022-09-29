import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from "./CarouselSlide.module.css"
import { Box, Image } from "@chakra-ui/react";
const contents = [
  { img: "https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg"},
  { img: "https://www.kindmeal.my/photos/deal/6/617-3503-m.jpg"},
  { img: "https://www.kindmeal.my/photos/deal/7/710-4998-m.jpg" },
  { img: "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg"},
  { img: "https://www.kindmeal.my/photos/deal/7/720-5195-m.jpg"},
  { img: "https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg"},
  { img: "https://www.kindmeal.my/photos/deal/7/724-5208-m.jpg"}
  // {img:}
];
const cards = [
  "https://www.kindmeal.my/photos/deal/6/683-4718-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/617-3503-m.jpg",
  "https://www.kindmeal.my/photos/deal/7/710-4998-m.jpg",
  "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg",
  "https://www.kindmeal.my/photos/deal/7/720-5195-m.jpg",
  "https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg",
  "https://www.kindmeal.my/photos/deal/7/724-5208-m.jpg"
];
export default function CarouselSlide() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    setData(contents);
    setData2(cards);
  }, []);

  const settingsOne = {
    asNavFor: nav2,
    fade: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    ref: (slider) => (slider1 = slider)
  };
  const settingsTwo = {
    asNavFor: nav1,
    slidesToShow: 1,
    focusOnSelect: true,
    variableWidth: true,
    ref: (slider) => (slider2 = slider)
  };

  return (
    <>
      <section className={Styles.container}>
        <Slider {...settingsOne} className={Styles.sliderOne}>
          {data.map((v, i) => (
            <Box key={i} className={ Styles.sliderTwo}  >
              <Image src={v.img} w="100%" h="100%" alt="" />
            </Box>
          ))}
        </Slider>
        <Slider {...settingsTwo} className={Styles.mainImage}>
          {data2.map((v, i) => (
            <Box key={i} m={1} className='itemSlide'>
              <Image src={v} alt={v}/>
              </Box>
          ))}
        </Slider>
      </section>
    </>
  );
}
