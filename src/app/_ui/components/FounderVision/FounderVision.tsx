import style from "./FounderVision.module.css";

const FounderVision = () => {
  return (
    <section className={style.vision}>
      <div className="container">
        <div className="xs-padding-inline sm-padding-inline">
          <div className={style.vision_header}>
            <h2>Chairman{`'`}s Vision</h2>
          </div>
          <div className={style.vision_summary}>
            <div className={style.vision_summary_left}>
              <p>
                To build the most innovative and entrepreneurial university in Africa among the top 200 globally, yielding inquiring minds as well as discoveries that are locally and globally impactful.
              </p>
              <div className={style.details}>
                <span className={style.details_name}>Professor Samuel.K Ogidan</span>
                <span className={style.details_title}>M.Sc(Lancaster) FCCA, FCA, ACTIN</span>
              </div>
            </div>
            <div className={style.img_container}>
              Placeholder for image
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export { FounderVision };
