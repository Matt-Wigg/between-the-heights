import styles from './page.module.css';
import ImageCarousel from './carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ImageCarousel />
      </main>
    </div>
  );
}
