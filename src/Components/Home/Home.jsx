import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Shoply</h1>
			<h2>The best shopping site ever created!</h2>
			<button className={styles.btn}>Shop Now</button>
    </div>
  );
}
