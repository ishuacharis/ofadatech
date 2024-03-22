export default function AboutPage() {
  return (
    <main>
      <div>
        <div>
          <div className="flex flex-col">
            <div>
              <div className="spacing spacing-padding-xs-block-size-one spacing-padding-xs-inline-size-one spacing-padding-sm-block-size-one spacing-padding-sm-inline-size-one spacing-padding-md-block-size-one spacing-padding-md-inline-size-one">
                <div className="grid grid-template-columns-xs grid-template-columns-md grid-auto-columns grid-column-gap-one">
                  <div className="flex flex-col align-items-center-xs align-items-start-md">
                    <div className="spacing spacing-margin-xs-blockend">
                      <div className="card card-rounded-all card-border card-small grid-item grid-align-self">
                        <div className="spacing spacing-padding-xs-block spacing-padding-md-inline">
                          <div className="text type-xs type-200 text-center text-start-md">About</div>
                        </div>
                      </div>
                    </div>
                    <div className="spacing spacing-padding-blockend">
                      <div className="text type-400 type-md text-black text-center-xs text-start-md">
                        Welcome to Ofada Technical College
                      </div>
                    </div>
                  </div>
                  <div className="text type-xs type-200 text-center-xs text-start-md">
                   A leading technical college school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each student reaches their full potential.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}