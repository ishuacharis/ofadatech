import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin, FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import style from "./Footer.module.css";
import { footerLinks, quickLinks } from "./links";
import { Each } from "../Each/Each";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row">
          <div className={style.sitemap_container}>
            <div className={style.about}>
              <div className={style.logo_container}>Logo</div>
              <p className={style.about_text}>
                Founded in 1962, the University of Lagos has, for over 5 decades, provided qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The University has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria.
              </p>
              <ul className={style.details}>
                <li className={style.detail_item}>
                  <IoMail size={40} className={style.svg} />
                  <span>info@ofadtech.ng</span>
                </li>
                <li className={style.detail_item}>
                  <FaSquarePhone size={40} className={style.svg} />
                  <span>+234-8134755083</span>
                </li>
                <li className={style.detail_item}>
                  <FaSquarePhone size={40} className={style.svg} />
                  <span>+234-8033323907</span>
                </li>
              </ul>
            </div>
            <div className={style.quick_links}>
              <Each
                of={quickLinks}
                render={(item: any, index: number) => (
                  <div className={style.quick_link_item} key={index}>
                    <h4>{item.title}</h4>
                    <ul>
                      <Each
                        of={item.subLinks}
                        render={(link: any, index: number) => (<li><Link href={"/#"} key={index}>{link}</Link></li>)}
                      />
                    </ul>
                  </div> 
                )}
              />
            </div>
          </div>
          <div className={style.copyright_container}>
            <div className={style.copyright_content}>
              <ul className={style.footer_links}>
                <Each
                  of={footerLinks}
                  render={(item: string, index: number) =>(
                    <li className={style.footer_link_item} key={index}>
                      <Link href={"/#"}>{item}</Link>
                    </li>
                  )}
                />
              </ul>
              <ul className={style.socials}>
                <li className={style.social_item}>
                  <Link href={"/#"}>
                    <FaFacebookSquare size={40} className={style.svg} />
                  </Link>
                </li>
                <li className={style.social_item}>
                  <Link href={"/#"}>
                    <FaSquareXTwitter size={40} className={style.svg} />
                  </Link>
                </li>
                <li className={style.social_item}>
                  <Link href={"/#"}>
                    <FaLinkedin size={40} className={style.svg} />
                  </Link>
                </li>
              </ul>
            </div>
            <p className={style.copyright_text}>
              Copyright © [2024] Ofada Technical School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer }