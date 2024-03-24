import style from "./page.module.css";


export default function AcademicsPage() {
  return (
    <main>
      <div className="spacing-margin-xs-blockstart spacing-margin-xs-blockend">
        <div className="spacing spacing-margin-xs-inline spacing-margin-md-inline-30">
          <div className="flex flex-col">
            <div className="card card-rounded-all card-border card-box-shadow">
              <div className="spacing spacing-padding-xs-block-size-one spacing-padding-xs-inline-size-one      spacing-padding-block-60 spacing-padding-inline-40 spacing-padding-block-80 spacing-padding-inline-60">
                <div className="grid grid-template-columns-xs grid-template-columns-md-repeat  grid-template-columns-md grid-auto-columns grid-column-gap-one">
                  <div className="flex flex-col align-items-center-xs align-items-start-md">
                    <div className="spacing spacing-margin-xs-blockend-xs">
                      <div className="card card-rounded-all card-border card-small grid-item grid-align-self">
                        <div className="spacing spacing-padding-xs-block spacing-padding-md-inline">
                          <div className="text type-xs type-200 text-center text-start-md">Academics</div>
                        </div>
                      </div>
                    </div>
                    <div className="spacing spacing-padding-blockend">
                      <div className="text type-400 type-md text-black text-center-xs text-start-md">
                         Nurturing Young Minds for Success
                      </div>
                    </div>
                  </div>
                  <div className="text type-xs type-200 text-center-xs text-start-md">
                  Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school{`'`}s academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From Creative arts and Hospitality to Engineering and Finance, our curriculum is carefully crafted to spark curiosity and encourage active exploration.
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
