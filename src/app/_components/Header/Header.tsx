import Link from "next/link";
import style from "./Header.module.css";

type Props = {
  open: Boolean;
  toggleMenu: () => void;
}

const Header = ({ open, toggleMenu }: Props) => {
  return (
    <header className={style.header}>
      <div className={style.menu_wrapper}>
        <div className={style.menu_bar}>
          <div className={style.logo_container}>Logo</div>
          <nav className={`${style.nav} ${open && style.nav_mobile}`}>
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
                          Ofada Technical College provides qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The tecnical college has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria.
                        </p>
                      </div>
                      <ul className={style.nav_dropdown_list}>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>History</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/about/leadership"} className={style.nav_dropdown_list_link}>Leadership and Organogram</Link>
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
                <button type="button" className={style.nav_button}>Admission</button>
                <div className={style.nav_dropdown_wrapper}>
                  <div className={style.nav_dropdown}>
                    <div className={style.nav_dropdown_content}>
                      <div className={style.nav_dropdown_content_summary}>
                        <h2>Aadmission</h2>
                        <br></br>
                        <p>
                          Ofada Technical school has built a proud heritage of attracting intelligent, competitive students and empowered each one of them reach their full potential.
                          We are dedicated to intellectual leadership, collaboration, highest moral standards, innovative research and a winning spirit — in academics and all other areas of life.
                          <br></br>
                          Come discover why Ofada Technical College is the leading technical college.
                        </p>
                      </div>
                      <ul className={style.nav_dropdown_list}>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/admission/requirements"} className={style.nav_dropdown_list_link}>Requirements</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={style.nav_item}>
                <button type="button" className={style.nav_button}>Academics</button>
                <div className={style.nav_dropdown_wrapper}>
                  <div className={style.nav_dropdown}>
                    <div className={style.nav_dropdown_content}>
                      <div className={style.nav_dropdown_content_summary}>
                        <h2>About us</h2>
                        <br></br>
                        <p>
                          Our academic programs are rigorous and carefully modelled to prepare our students to be ahead.
                        </p>
                      </div>
                      <ul className={style.nav_dropdown_list}>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Faculty of Engineering</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Faculty of Nutrition</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Faculty of Agriculture</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Faculty of Business & Finance</Link>
                        </li>
                        <li className={style.nav_dropdown_list_item}>
                          <Link href={"/#"} className={style.nav_dropdown_list_link}>Faculty of Computer Science</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className={style.nav_item}>
                <Link href={"/#"} className={style.nav_link}>Academics</Link>
              </li> */}
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
