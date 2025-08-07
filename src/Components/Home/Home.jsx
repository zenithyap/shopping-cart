import styles from './home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Shoply</h1>
      <h2>The best shopping site ever created!</h2>
      <Link to='shop' className={styles.btn}>Shop Now</Link>
    </div>
  );
}
