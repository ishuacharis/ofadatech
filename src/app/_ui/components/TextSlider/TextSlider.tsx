import { Each } from "../Each/Each";
import style from "./TextSlider.module.css";

const slides = [
  "Scale up your assset for stream of income",
  "No asset no income",
  "Breed income through skill",
  "Get a skill create income",
  "Scale up your assset for stream of income",
]

const TextSlider = () => {
  return (
    <div className={style.slides}>
      <ul className={style.slides_content}>
        <Each
          of={slides}
          render={(item: string, index: number) => (
            <div className={`${style.slide}`}>
              <span>{item}</span>
            </div>
          )}
        />
      </ul>
    </div>
  );
};

export { TextSlider };
