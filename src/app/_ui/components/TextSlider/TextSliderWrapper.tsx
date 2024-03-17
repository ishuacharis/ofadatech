"use client"

import { TextSlider } from "./TextSlider";
import style from "./TextSlider.module.css";

const TextSliderWrapper = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.overlay}></div>
      <div className={style.slide_container}>
        <TextSlider />
      </div>
    </section>
  )
};

export { TextSliderWrapper };
