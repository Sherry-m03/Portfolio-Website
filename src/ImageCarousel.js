import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

function ImageCarousel({
  Image,
  getItemContent,
  slidesPerView,
  borderRadius = 0,
  Imgwidth,
  Imgheight,
  slideShadow,
  SwiperSlideHeight,
  SwiperSlideWidth,
  containerMaxWidth,
  slideImgBorderLeft,
  slideImgBorderRight,
  slideRotate = 0,
  slideStretch = 0,
  slideDepth = 0,
  slideModifier = 0,
  slideLoop = false,
  handleSlideChange,
  handleClick,
  params = "",
  initialSlide,
  slideDirection = "horizontal",
}) {
  return (
    <div style={{ maxWidth: `${containerMaxWidth}` }} className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={slideLoop}
        slidesPerView={slidesPerView}
        direction={slideDirection}
        initialSlide={initialSlide}
        coverflowEffect={{
          rotate: slideRotate,
          stretch: slideStretch,
          depth: slideDepth,
          modifier: slideModifier,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        {Image.map((img, index) => {
          const { src, alt, id } = getItemContent(img, index); // Extract content using the prop
          return (
            <SwiperSlide
              style={{
                width: `${SwiperSlideWidth}`,
                height: `${SwiperSlideHeight}`,
                position: "relative",
              }}
              key={id || index}
            >
              <img
                onClick={() => {
                  if (handleClick) handleClick(id);
                }}
                style={{
                  width: `${Imgwidth}`,
                  height: `${Imgheight}`,
                  borderRadius: `${borderRadius}`,
                  objectFit: "cover",
                  boxShadow: `${slideShadow}`,
                }}
                src={src}
                alt={alt}
              />
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
