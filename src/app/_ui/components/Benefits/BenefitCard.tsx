import style from "./Benefit.module.css";

const BenefitCard = ({ item }: any) => {
  return (
    <div className={style.benefit}>
      <h6>{item.title}</h6>
      <p>{item.text}</p>
    </div>
  );

};

export { BenefitCard };
