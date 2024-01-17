import style from "./LeaderCard.module.css";

const LeaderCard = () => {
  return (
    <div className={style.leader}>
      <div className={style.img_container} />
      <p>Samuel.K Ogidan</p>
    </div>
  )
};

export { LeaderCard };
