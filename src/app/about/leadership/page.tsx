import { Each } from "@/app/_components/Each/Each";
import style from "./page.module.css";
import { LeaderCard } from "./_components/LeaderCard";

const leaders = [1, 2, 3, 4, 5, 6];

export default function Leadership() {
  return (
    <main>
      <section className={style.leaders}>
        <div className="container">
          <ul className={style.leader_list}>
            <Each
              of={leaders}
              render={(item: any, index: number) => (
                <LeaderCard key={index} />
              )}
            />
          </ul>
        </div>
      </section>
    </main>
  );
}