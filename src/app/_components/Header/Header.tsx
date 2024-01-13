import Link from "next/link";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.menu_wrapper}>
        <div className={style.menu_bar}>
          <div className={style.logo_container}></div>
          <nav className={style.nav}>
            <ul className={style.nav_list}>
              <li className={style.nav_item}>
                <button type="button" className={style.nav_button}>About</button>
                <div className={style.nav_dropdown_wrapper}>
                  <div className={style.nav_dropdown}>
                    <div className={style.nav_dropdown_content}>
                      <div className={style.nav_dropdown_content_summary}>
                        <h2>About us</h2>
                        <br></br>
                        <p>
                          Founded in 1962, the University of Lagos has, for over 5 decades, provided qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The University has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria.
                        </p>
                      </div>
                      <ul className={style.nav_dropdown_list}>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>History</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Leadership and Organogram</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Founder{"`"}s Vision</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={style.nav_item}>
                <Link href={"/#"} className={style.nav_link}>Programs</Link>
              </li>
              <li className={style.nav_item}>
                <Link href={"/#"} className={style.nav_link}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button aria-label="Open menu" className={style.burger_menu} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
    </header>
  )
};

export { Header };
