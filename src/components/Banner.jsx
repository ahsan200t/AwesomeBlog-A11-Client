
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../components/Slide'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Slide
        image={banner1}
        ></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide image={banner2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide image={banner3}></Slide>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}