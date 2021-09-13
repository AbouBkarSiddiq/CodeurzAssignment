import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          background: "transparent",
          backgroundColor: "",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "22px" }}> {dots} </ul>
      </div>
    ),
    
  };
  return (
    <div>
      <Slider {...settings} >
        <div className='flex justify-center items-center py-48 bg-blue-400'  >
          <h3 className='text-white text-center font-bold text-3xl px-2 lg:px-36'>"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap."</h3>
        </div>
        <div className='flex justify-center items-center bg-red-300 py-48'>
          <h3 className='text-white text-center font-bold text-3xl px-2 lg:px-36'>"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap."</h3>
        </div>
        <div className='flex justify-center items-center bg-yellow-300 py-48'>
          <h3 className='text-white text-center font-bold text-3xl px-2 lg:px-36'>"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap."</h3>
        </div>

      </Slider>
    </div>
  );
}