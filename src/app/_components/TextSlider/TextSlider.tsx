import { useEffect, useState } from "react";
import { Each } from "../Each/Each";
import style from "./TextSlider.module.css";

const slides = [
  "Scale up your assset for stream of income",
  "No asset no income",
  "Breed income through skill",
  "Get a skill create income"
]

const TextSlider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current < slides.length - 1) {
        setCurrent((prevState) => prevState + 1);
      } else {
        setCurrent(0);
      }
    }, 5000);
    return () => {
      clearInterval(interval)
    }
  }, [current]);
  return (
    <div className={style.slides}>
      <Each
        of={slides}
        render={(item: string, index: number) => (
          <div className={`${style.slide} ${current === index ? style.active : style.inactive}`}>
            <p>{item}</p>
          </div>
        )}
      />
    </div>
  );
};

export { TextSlider };
