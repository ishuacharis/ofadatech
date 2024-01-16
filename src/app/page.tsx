import { BenefitList } from './_components/Benefits/BenefitList';
import { FounderVision } from './_components/FounderVision/FounderVision';
import { Tour } from './_components/Tour/Tour';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <FounderVision />
      <BenefitList />
      <Tour />
    </main>
  )
}
