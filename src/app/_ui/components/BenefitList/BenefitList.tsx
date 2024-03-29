import { benefits } from "@/data/benefits";
import { BenefitCard } from "../Benefits/BenefitCard";
import { Each } from "../Each/Each";
import { BenefitInfo } from "@/app/types/type";
import style from "./BenefitList.module.css";


const BenefitList = () => {
  return (
    <section className={style.benefits}>
      <div className="container">
        <div className="xs-padding-block xs-padding-inline sm-padding-block-end sm-padding-inline">
          <div className={style.benefits_header}>
            <h2>Our Benefits</h2>
            <p>
              With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child{`'`}s future.
            </p>
          </div>
          <ul className={style.benefit_list}>
            <Each
              of={benefits}
              render={(item: BenefitInfo, index: number) => (
                <BenefitCard key={index} item={item} />
              )}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};
  
export { BenefitList };
  