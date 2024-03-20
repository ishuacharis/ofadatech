import style from "./page.module.css";


export default function AcademicsPage() {
  return (
    <main className={style.main}>
      <div>
        <div className={style.constrain_width}>
          <div className="flex flex-col">
            <div>
              <div className="spacing spacing-padding-xs-block-size-one spacing-padding-xs-inline-size-one spacing-padding-sm-block-size-one spacing-padding-sm-inline-size-one spacing-padding-md-block-size-one spacing-padding-md-inline-size-one">
                <div className="grid grid-template-columns-xs grid-template-columns-md grid-auto-columns grid-column-gap-one">
                  <div className="flex flex-col align-items-center-xs align-items-start-md">
                    <div className="spacing spacing-margin-xs-blockend">
                      <div className="card card-rounded-all card-border card-small grid-item grid-align-self">
                        <div className="spacing spacing-padding-xs-block spacing-padding-md-inline">
                          <div className="text type-xs type-200 text-center text-start-md">Academics</div>
                        </div>
                      </div>
                    </div>
                    <div className="spacing spacing-padding-blockend">
                      <div className="text type-400 type-md text-black text-center-xs text-start-md">
                        Nuturing Your Mind for Success
                      </div>
                    </div>
                  </div>
                  <div className="text type-xs type-200 text-center-xs text-start-md">
                    Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your students. Our students school{`'`}s academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From Engineering and finance to hospitality and creative art, our curriculum is carefully crafted to spark curiosity and encourage active exploration.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
};
