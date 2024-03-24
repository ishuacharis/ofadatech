import Link from "next/link";
import { footerLinks, quickLinks } from "./links";
import { Each } from "../Each/Each";
import style from "./Footer.module.css";
import { QuickLinkInfo, SubLinkInfo } from "@/app/types/type";

const contacts = [
  {
    text: "info@ofadatech.ng",
    iconType: "mail"
  },
  {
    text: "+234-8134755083",
    iconType: "phone"
  },
  {
    text: "+234-8033323907",
    iconType: "phone"
  },
];
const socials = [
  {
    label: "facebook",
    type: "facebook"
  },
  {
    label: "x",
    type: "x"
  },
  {
    text: "linkedin",
    type: "linkedin"
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary">
        <div className="spacing spacing-margin-inline spacing-margin-inline-50">
          <div className="spacing spacing-padding-inline-30 spacing-padding-blockstart-60 spacing-padding-blockend-30 spacing-padding-blockstart-80 spacing-padding-blockend-40 spacing-padding-inline-80">
            <div className="spacing spacing spacing-margin-blockend-20">
              <div className="flex flex-col">
                <div className="spacing spacing-margin-blockend-40">
                  <div className="grid grid-template-columns-xs grid-template-columns-3 grid-auto-columns grid-row-gap-20">
                    <div className="flex flex-col flex-gap-size-40 span-md-1">
                      <div>
                        {/* <div className={style.logo_container}>Logo</div> */}
                        <div>
                          <span>
                            <div className="text text-white type-200">Empower today, succeed tomorrow</div>
                          </span>
                          
                        </div>
                        <div>
                          <span>
                            <div className="text text-white type-200">Crafting futures, creating leaders</div>
                          </span>
                          
                        </div>
                      </div>
                      <ul className="flex flex-col flex-gap-one">
                        <Each
                          of={contacts}
                          render={(item: any, index: number) => (
                            <li className="flex flex-gap-size-8" key={index}>
                              <div className="icon-container">
                                {item.iconType === 'mail' ?
                                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75" />
                                  </svg> :
                                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M2.25 6.75C2.25 15.0343 8.96573 21.75 17.25 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V18.1284C21.75 17.6121 21.3987 17.1622 20.8979 17.037L16.4747 15.9312C16.0355 15.8214 15.5734 15.9855 15.3018 16.3476L14.3316 17.6412C14.05 18.0166 13.563 18.1827 13.1223 18.0212C9.81539 16.8098 7.19015 14.1846 5.97876 10.8777C5.81734 10.437 5.98336 9.94998 6.3588 9.6684L7.65242 8.69818C8.01453 8.4266 8.17861 7.96445 8.06883 7.52533L6.96304 3.10215C6.83783 2.60133 6.38785 2.25 5.87163 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V6.75Z" />
                                  </svg>
                                }
                              </div>

                              <span>
                                <div className="text text-white type-200">{item.text}</div>
                              </span>
                            </li>
                          )}
                        />
                      </ul>
                    </div>
                    <div className="flex span-md-2">
                      <div className="grid grid-template-columns-3 grid-auto-coloumns grid-row-gap-20 grid-column-20 flex-grow-1">
                        <Each
                          of={quickLinks}
                          render={(item: Readonly<QuickLinkInfo>, index: number) => (
                            <div key={index}>
                              <div className="spacing spacing-margin-blockend-20">
                                <div className="text type-200 type-sm">{item.name}</div>
                              </div>
                              <ul className="flex flex-col flex-gap-size-14">
                                <Each
                                  of={item.sublinks}
                                  render={(sublink: Readonly<SubLinkInfo>, index: number) => (
                                    <li>
                                      <Link href={sublink.link} key={index}>
                                        <div className="text text-white type-200">
                                          {sublink.title}
                                        </div>
                                      </Link>
                                    </li>
                                  )}
                                />
                              </ul>
                            </div> 
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={style.copyright_content}>
                  <div className="flex flex-grow-1 spacing-margin-blockstart-20 spacing-margin-blockend-20">
                    <div className="grid grid-template-columns-xs justify-items-center-xs justify-items-initial-md grid-template-columns-3 grid-auto-columns flex-grow-1">
                      <ul className="flex span-md-2">
                        <Each
                          of={footerLinks}
                          render={(item: string, index: number) =>(
                            <li className={style.footer_link_item} key={index}>
                              <Link href={"/#"}>
                                <div className="text text-white type-200">{item}</div>
                              </Link>
                            </li>
                          )}
                        />
                      </ul>
                      <ul className="flex span-md-1 justify-content-end-md">
                        <Each
                          of={socials}
                          render={(item: any, index: number) => (
                            <li className="" key={index}>
                              <Link href={"/#"}>
                                <div className="icon-container">
                                  {
                                    item.type === "facebook" ?
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
                                    : item.type === "x" ?
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>
                                    :
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                  }
                                </div>
                              </Link>
                            </li>
                          )}
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={style.copyright}>
              <div className="text text-white type-200 text-center">
                Copyright © [2024] Ofada Technical School. All rights reserved.
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer }