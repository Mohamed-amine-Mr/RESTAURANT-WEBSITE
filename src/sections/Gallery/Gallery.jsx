import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image2 from "../../imgs/plat1.png";
import image3 from "../../imgs/plat2.png";
import image4 from "../../imgs/plat3.png";
import image6 from "../../imgs/plat4.png";
import image11 from "../../imgs/plat1.png";
import image12 from "../../imgs/plat2.png";
const About = () => {
  const sliderRef = useRef(null);

  const galleryImages = [
    { src: image12, alt: "Park view 4" },

    { src: image11, alt: "Park view 3" },

    { src: image2, alt: "Park view 2" },
    { src: image6, alt: "Park view 2" },
    { src: image3, alt: "Park view 3" },
    { src: image4, alt: "Park view 4" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // Changed from 5 to 4
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="h-[300px]">
            <Slider ref={sliderRef} {...settings}>
              {galleryImages.map((image, index) => (
                <div key={index} className="px-0.5 h-[300px]">
                  <div
                    className="w-full h-full  shadow-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.src})` }}
                    aria-label={image.alt}
                  ></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
