import { Each } from "../../_components/Each/Each";
import { faculties } from "../faculties";

import style from "./page.module.css";

export default function Academics({ params }: { params: { slug: string } }) {
  const faculty = faculties[params.slug];
  return (
    <main className={style.main}>
      <section className={style.faculty_details}>
        <h1>{faculty.name}</h1>
        <ul className={style.dept_list}>
          <Each
            of={faculty.depts}
            render={(item: string, index: number) => <li key={index} className={style.dept_list_item}>{item}</li>}
          />
        </ul>
      </section>
    </main>
  )
}