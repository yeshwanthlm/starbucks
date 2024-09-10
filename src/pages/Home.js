import React from 'react'
import { BaristaRecommends, HandcraftedCurations, PromotionBanner } from '../data'
import { Link } from 'react-router-dom'
import Coffee from "../assests/img/coffec.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';


const Home = () => {
  return (
    <>
      <div className="bg-[#1e3932] w-100 sm:mt-0 sm:top-[220px] sm:mb-56 md:mt-1 md:top-[220px] md:mb-56 lg:top-[84px] relative lg:mb-20 md:pl-24 p-7 md:pr-28 flex flex-col items-center justify-between  sm:flex-row lg:flex-row ">
        <div>
          <span className="text-white md:text-2xl sm:text-base sm:font-s_bold md:font-Light text-center">Rewards are pouring! Sign up now.</span>
        </div>
        <div>
          <button className="text-white text-sm border-white border-2 p-1 px-3 rounded-3xl mt-2 md:mt-0 cursor-pointer">Know More</button>
        </div>
      </div>

      {/* Handcrafted Curations */}
      <div className="bg-white py-7 w-100">
        <div className="md:pl-24  md:pr-28">
          <div className="flex justify-start mb-4 mt-2 px-4  ">
            <h1 className="text-[#1e3932] font-bold text-2xl">Handcrafted Curations</h1>
          </div>
          <div className='flex justify-between items-center text-center gap-5 px-3 sm:px-0 sm:gap-0 sm:w-full  flex-wrap'>
            {
              HandcraftedCurations.map((item, index) => {
                return (

                  <Link to={""} className="flex justify-center items-center flex-col" key={index}>
                    <img src={item.img} alt={item}className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1" />
                    <p className='font-s_bold text-sm whitespace-normal sm:whitespace-nowrap'>{item.title}</p>
                  </Link>


                )

              })
            }
          </div>
        </div>

      </div>

      {/* PromotionBanner*/}
      <div className='bg-white pt-6 pb-10'>
        <div className="h-80  py-4 relative">
          <div className='md:px-0 px-4 sm:px-1  md:pl-20  md:pr-28  '>  
            <div className='my-10 relative'>

              <div className="swiper-button-banner image-swiper-button-prev-banner absolute">
                <img
                  src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg"
                  alt="prev"
                />
              </div>

              <div className="swiper-button-banner image-swiper-button-next-banner absolute">
                <img
                  src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg"
                  alt="next"
                ></img>
              </div>
              <div className='flex gap-2  w-full  sm:px-4' >
                <Swiper

                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".image-swiper-button-next-banner",
                    prevEl: ".image-swiper-button-prev-banner",
                    disabledClass: "swiper-button-disabled",
                  }}
                  mousewheel={true}

                >
                  {
                    PromotionBanner.map((item, index) => {

                      return (
                        <SwiperSlide key={index}>
                      
                            <div className='flex  h-60  px-3'>
            <div className='p-5  min-w-full shadow-lg rounded-lg  flex sm:gap-7 '    style={{ backgroundImage: `url(${item.bg})` }}>
              <img src={item.img} className="h-full scale-125 w-16 -m-2 sm:w-auto " />
              <div className={`text-${item.id==="1"||  item.id === "3" ? 'black':'white'} font-Regular max-w-2xl `}>
                <p className='text-sm font-s_bold'>{item.title}</p>
                <h2 className=' font-semibold text-base sm:text-xl my-3'>{item.head}</h2>
                <p className=' font-light text-xs sm:text-base w-full'>{item.des}</p>
                <p className={`md:mt-7 text-xs  font-Light md:text-sm text-${item.id==="1"||  item.id === "3" ? '[#757070]':'white'} sm:text-base`}>{(item.id)==="2" ? "For" : "Starting From"}</p>
               <p>₹ <span className=' text-lg'>{item.price}</span><span className='text-xs'>.{item.paise}</span></p>
              </div>
              <button className={`bg-${item.id==="1"||  item.id === "3" ? 'green-800':'white'} text-${item.id==="1"||  item.id === "3"? 'white': 'black'} text-sm w-full font-s_bold max-w-[100px] md:max-w-[220px] sm:max-w-[150px] py-2 sm:py-3 right-6 bottom-2 sm:right-9 sm:bottom-5  md:py-5 absolute rounded-full `}>{item.b_content}</button>
            </div>
            </div>
                          
                        </SwiperSlide>


                      )
                    })
                  }
                </Swiper>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Barista Recommends */}
      <div className="h-90 py-8 relative">
        <div className='md:px-0   px-4 sm:px-3  md:pl-20  md:pr-28  '>
          <div className='flex items-center w-full justify-between '>
            <h1 className='text-[#1e3932] text-2xl font-bold '>Barista Recommends</h1>
            <button className='text-green-800 font-s_bold hidden sm:block  m-0'>View Menu</button>
          </div>
          <div className="absolute -top-2 right-1">
            <svg
              width="57"
              height="70"
              viewBox="0 0 91 104"
              fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M57.2496 15.28C52.3845 17.7763 57.2957 23.9676 60.6641 25.3412C65.6847 27.3848 71.8349 28.0999 77.7283 27.9446C72.5889 29.791 67.4349 31.9438 62.4649 34.3773C62.2892 34.4075 62.1135 34.4376 61.9378 34.4677C61.66 34.2756 61.3354 34.1278 60.898 34.0969C52.2362 33.6232 44.4648 27.5742 35.5072 28.4616C31.4392 28.8724 24.0463 33.846 28.5294 37.8971C32.7446 41.7153 40.9371 40.5634 46.2911 40.155C48.6311 39.9765 50.9361 39.6953 53.246 39.3938C41.8979 46.2392 32.3352 54.8358 27.1879 65.2954C24.545 70.6612 25.8032 76.2024 33.6762 73.5496C37.5154 72.2524 39.9873 66.6512 41.5271 63.7385C44.6734 57.7873 46.9729 50.1804 52.0825 45.3003C52.4714 44.938 52.6306 44.5315 52.6331 44.1269C54.6662 42.7911 56.7991 41.5386 58.9681 40.3356C55.8177 43.8871 53.2769 47.8972 51.5171 52.0576C49.3532 57.1851 48.8775 65.399 54.5991 69.0062C59.2175 71.9106 61.6958 63.5705 62.3569 61.3522C64.7914 53.1422 66.5049 44.7828 70.1968 36.8896C70.4458 36.3618 70.4032 35.8952 70.1701 35.5198C70.4563 35.2337 70.6366 34.9379 70.6562 34.6112C74.1487 33.1086 77.6943 31.7336 81.2371 30.518C77.8908 35.5138 75.9048 41.5391 75.5684 47.0611C75.4099 49.5361 78.1738 59.1095 83.2111 56.2519C87.3355 53.9328 86.6358 47.0385 86.64 43.3716C86.6744 39.0389 86.3493 34.7009 86.0193 30.3833C86.4948 29.8138 86.9883 29.2691 87.4858 28.7572C87.966 28.7111 88.3481 28.4755 88.6073 28.1522C92.1702 27.1004 95.6665 26.1743 99.0122 25.4218C101.493 24.8652 100.714 21.3996 98.225 21.9438C94.5968 22.7698 90.8091 23.757 86.9587 24.9028C86.8079 24.8311 86.643 24.7674 86.4782 24.7036C86.115 24.1219 85.4446 23.7156 84.5162 23.8247C80.8768 22.1324 77.0592 20.0859 73.39 18.5158C69.4282 16.8147 61.8073 12.9591 57.2496 15.28ZM65.914 23.2388C63.1078 22.6665 60.344 21.7718 59.496 19.135C58.9366 17.3854 61.8003 18.3633 62.9388 18.6251C68.1401 19.8292 72.8066 22.0925 77.4632 24.3965C73.5544 24.4008 69.5882 23.9996 65.914 23.2388ZM36.6732 36.8957C35.4021 36.8322 31.0399 36.6746 31.4917 34.8211C32.4948 30.7069 38.9203 32.0188 42.0382 32.6938C45.6155 33.4572 49.0988 34.8529 52.6466 35.9838C47.347 36.7119 42.006 37.1655 36.6732 36.8957ZM38.7307 60.7585C37.6093 62.9414 36.4069 65.0128 35.0527 67.0657C34.7826 67.4828 28.8434 72.3631 29.8583 68.8909C30.9269 65.2478 33.8358 61.799 36.1941 58.7347C38.2414 56.0583 40.6823 53.543 43.3699 51.1499C41.7097 54.3592 40.2913 57.7111 38.7307 60.7585ZM56.9269 64.7846C55.7152 67.3873 54.0237 60.27 54.0014 59.1782C53.9197 56.2092 55.1969 53.2886 56.4883 50.6052C58.3444 46.7406 61.2161 43.0501 64.6216 39.9316C62.8121 44.2957 61.2836 48.9378 60.2758 53.3176C59.3922 57.1883 58.6365 61.1263 56.9269 64.7846ZM82.354 49.6577C82.2435 50.7026 81.205 52.8909 82.0319 53.0501C79.4044 52.5336 79.5371 47.8466 79.6339 46.266C79.8194 43.0392 80.8831 39.4164 82.5092 36.0512C82.7846 40.5928 82.8663 45.1398 82.354 49.6577Z" fill="#B7CBD4"></path><path d="M80.8492 90.5475L76.6929 91.5454C72.4525 92.5692 69.2323 95.7523 68.4367 99.7097L67.7065 103.332L66.9764 99.7011C66.1807 95.7437 62.9606 92.5606 58.7295 91.5368L54.5732 90.5389L58.7295 89.5581C62.9699 88.5602 66.1994 85.4114 67.0232 81.4627L67.6972 78.2451L68.3711 81.4627C69.1949 85.4114 72.4338 88.5688 76.6742 89.5667L80.8492 90.5475Z" fill="#B7CBD4"></path><path d="M14.1486 35.1022L11.9106 35.6725C9.62727 36.2575 7.89335 38.0764 7.46492 40.3378L7.07176 42.4074L6.67861 40.3329C6.25017 38.0715 4.51625 36.2526 2.23796 35.6676L0 35.0973L2.23796 34.5369C4.52129 33.9666 6.26025 32.1673 6.70381 29.9109L7.06672 28.0723L7.42963 29.9109C7.87319 32.1673 9.61719 33.9715 11.9005 34.5418L14.1486 35.1022Z" fill="#B7CBD4">
              </path>
            </svg>
          </div>
          <div className='my-10 relative'>


            <div className="swiper-button image-swiper-button-prev absolute">
              <img
                src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg"
                alt="prev"
              />
            </div>

            <div className="swiper-button image-swiper-button-next absolute">
              <img
                src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg"
                alt="next"
              ></img>
            </div>
            <div className='flex gap-2 md:gap-6  w-full  sm:px-4' >
              <Swiper

                modules={[Navigation]}
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }}
                mousewheel={true}

                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  730: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1050: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}

              >
                {
                  BaristaRecommends.map((item, index) => {

                    return (
                      <SwiperSlide key={index}>
                        <div className='w-full  bg-white border-2 md:min-w-[200px] min-w-[240px] sm:min-w-[340px] py-4 px-5 box-border rounded-2xl ' >
                          <div className='flex gap-4'>
                            <img src={item.img} alt={item} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                            <div>
                              <img src={item.type} alt={item}  className='' />
                              <h3 className='font-s_bold mb-2'>{item.title}</h3>
                              <p className=' text-xs text-gray-700'>PER SERVE({item.gram} ML)-{item.kcal} kcal</p>
                            </div>
                          </div>
                          <div className='flex justify-between font-s_bold mb-2 mt-4'>
                            <p>₹ <span>{item.price}</span><span className='text-xs'>.{item.paise}</span></p>
                            <button className='text-white bg-green-800 hover:bg-[#1e3932] py-1 px-5 rounded-full shadow-box'>Add Item</button>
                          </div>
                        </div>
                      </SwiperSlide>


                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </div>
        <div className='flex justify-center  sm:hidden '>
          <button className='bg-black text-white font-s_bold px-3 py-1 rounded-full'>View Menu</button>
        </div>
      </div>


      <div className="bg-white h-12"></div>

      {/* Learn more about the world of coffee! */}
      <section className=' h-[80vh] sm:h-auto lg:h-[70vh]'>
        <div className='p-6 px-4 sm:px-3  md:pl-24  md:pr-28 relative mt-3'>
          <div className='flex  items-center w-full justify-between  '>
            <h1 className='text-[#1e3932] text-2xl font-bold m-0'>Learn more about the world of coffee!</h1>
            <button className='text-green-800 font-s_bold hidden sm:block  m-0'>Discover More</button>
          </div>

          <div className='h-96 w-full my-9 rounded-md overflow-hidden relative cursor-pointer'>
            <img src={Coffee} alt="coffe" className="h-full w-full object-cover" />
            <div className='h-full bg-black bg-opacity-40 hover:bg-opacity-60 hover:bg-gradient-hover w-full absolute top-0 transition-all p-8 flex flex-col justify-between'>
              <p className='bg-green-50 rounded-full w-24 text-xs p-1 font-s_bold text-green-600 text-center'>Coffee Culture</p>
              <div className='text-white'>
                <h2 className='text-3xl font-s_bold py-2'> Behind Every Starbucks Cup </h2>
                <p> Ever wondered how Starbucks ensures the quality of your daily cup of coffee? Learn how we bring the best coffee experience possible. </p>
                <button className='bg-white text-black w-full max-w-[200px] font-s_bold text-sm py-2 rounded-full mt-10'>Learn More</button>
              </div>
            </div>
          </div>

          <div className='flex justify-center  sm:hidden '>
            <button className='bg-black text-white font-s_bold px-3 py-1 rounded-full'>Discover More</button>
          </div>
        </div>
      </section>

      <div className="bg-white h-24"></div>


    </>

  )
}

export default Home