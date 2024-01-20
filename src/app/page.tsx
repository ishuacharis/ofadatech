import { BenefitList } from './_ui/components/BenefitList/BenefitList';
import { FounderVision } from './_ui/components/FounderVision/FounderVision';
import { TextSliderWrapper } from './_ui/components/TextSlider/TextSliderWrapper';
import { Tour } from './_ui/components/Tour/Tour';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <TextSliderWrapper />
      <FounderVision />
      <BenefitList />
      <Tour />
    </main>
  )
}
