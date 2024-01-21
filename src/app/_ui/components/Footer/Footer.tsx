import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin, FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { footerLinks, quickLinks } from "./links";
import { Each } from "../Each/Each";
import style from "./Footer.module.css";
import { QuickLinkInfo, SubLinkInfo } from "@/app/types/type";

const contacts = [
  {
    text: "info@ofadatech.ng",
    icon: <IoMail size={30} className={style.svg} />
  },
  {
    text: "+234-8134755083",
    icon: <FaSquarePhone size={30} className={style.svg} />
  },
  {
    text: "+234-8033323907",
    icon: <FaSquarePhone size={30} className={style.svg} />
  },
];
const socials = [
  {
    label: "facebook",
    icon: <FaFacebookSquare size={30} className={style.svg} />,
  },
  {
    label: "x",
    icon: <FaSquareXTwitter size={30} className={style.svg} />
  },
  {
    text: "linkedin",
    icon:  <FaLinkedin size={30} className={style.svg} />
  },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="xs-padding-inline xs-padding-block sm-padding-inline sm-padding-block">
          <div className={`xs-padding-block-end ${style.sitemap_container}`}>
            <div className={style.about}>
              <div className={style.logo_container}>Logo</div>
              <p className={style.about_text}>
                Empower today, succeed tomorrow
              </p>
              <p className={style.about_text}>
                Crafting futures, creating leaders
              </p>
              <ul className={style.details}>
                <Each
                  of={contacts}
                  render={(item: any, index: number) => (
                    <li className={style.detail_item} key={index}>
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  )}
                />
              </ul>
            </div>
            <div className={style.quick_links}>
              <Each
                of={quickLinks}
                render={(item: Readonly<QuickLinkInfo>, index: number) => (
                  <div className={style.quick_link_item} key={index}>
                    <h4>{item.name}</h4>
                    <ul>
                      <Each
                        of={item.sublinks}
                        render={(sublink: Readonly<SubLinkInfo>, index: number) => (<li><Link href={sublink.link} key={index}>{sublink.title}</Link></li>)}
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
                <Each
                  of={socials}
                  render={(item: any, index: number) => (
                    <li className={style.social_item} key={index}>
                      <Link href={"/#"}>
                        {item.icon}
                      </Link>
                    </li>
                  )}
                />
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