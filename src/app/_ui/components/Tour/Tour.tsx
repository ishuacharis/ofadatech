import style from "./Tour.module.css";

const Tour = () => {
  return (
    <section>
      <div className={style.container}>
        <div className="xs-padding-block xs-padding-inline sm-padding-block sm-padding-inline">
          <div className={style.video_container}>
            <p className={style.video}>
              Video placeholder for the school tour
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export { Tour };
