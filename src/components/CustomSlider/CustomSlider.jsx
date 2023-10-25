import styles from "./CustomSlider.module.css";
import { Link } from "react-router-dom";
import Arrow from "../Arrow/Arrow";
import Slider from "react-slick";
import SliderCard from "../SliderCard/SliderCard";
import { useState } from "react";

const settings = {
  infinite: true,
  initialSlide: 1,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 500,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        initialSlide: 3,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 620,
      settings: {
        initialSlide: 3,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 450,
      settings: {
        initialSlide: 3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const CustomSlider = ({ characters, title, link }) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Link to={link}>Explore All <i className='bx bxs-chevron-right'></i></Link>
      </div>

      <div className={styles.slider}>
        <Slider {...settings} ref={setSliderRef}>
          {characters.map((item, index) => (
            <SliderCard character={item} key={index} />
          ))}
        </Slider>
      </div>

      <div className={styles.footer}>
        <div className={styles.buttons}>
          <Arrow direction="left" onClick={() => sliderRef.slickPrev()} />
          <Arrow direction="right" onClick={() => sliderRef.slickNext()} />
        </div>
      </div>
      <hr className={styles.separator} />
    </section>
  );
};

export default CustomSlider;
