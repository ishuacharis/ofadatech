import Link from "next/link";
import style from "./Header.module.css";
import { Each } from "../Each/Each";
import { NavInfo, SubLinkInfo } from "@/app/types/type";
import { nav } from "@/app/_ui/components/Header/nav";

type Props = {
  open: Boolean;
  toggleMenu: () => void;
}

const Header = ({ open, toggleMenu }: Props) => {
  return (
    <header className={style.header}>
      <div className={style.menu_wrapper}>
        <div className={style.menu_bar}>
          {/* <div className={style.logo_container}>Logo</div> */}
          <nav className={`${style.nav} ${open && style.nav_mobile}`}>
            <ul className={style.nav_list}>
              <Each
                of={nav}
                render={(item: Readonly<NavInfo>, index: number) => (
                  <li className={style.nav_item} key={index}>
                    <button type="button" className={style.nav_button} role="button">{item.name}</button>
                    <div className={style.nav_dropdown_wrapper}>
                      <div className={style.nav_dropdown}>
                        <div className={style.nav_dropdown_content}>
                          <div className={style.nav_dropdown_content_summary}>
                            <Link href={item.link}>
                              <span>
                                <h2>{item.heading}</h2>
                              </span>
                            </Link>
                            <br></br>
                            <p>{item.description}</p>
                          </div>
                          <ul className={style.nav_dropdown_list}>
                            <Each
                              of={item.sublinks}
                              render={(sublink: Readonly<SubLinkInfo>, index: number) => (
                                <li className={style.nav_dropdown_list_item}>
                                  <Link key={index} href={sublink.link} className={style.nav_dropdown_list_link}>{sublink.title}</Link>
                                </li>
                              )}
                            />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              />
            </ul>
          </nav>
        </div>
        {!open ? (<button
          aria-label="Open menu"
          className={style.burger_menu}
          type="button"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>) :
        (<button
            aria-label="Close menu"
            className={style.burger_close} type="button"
            onClick={toggleMenu}
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>)}
      </div>
    </header>
  )
};

export { Header };
