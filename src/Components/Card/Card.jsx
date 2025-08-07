import styles from './card.module.css';

export default function Card({ item }) {
  return (
    <div className={styles.container}>
			<div className={styles.imageContainer}>
      	<img src={item.image} alt={item.title} />
			</div>
      <h4>{item.title}</h4>
			<div className={styles.row}>
				<p>${item.price}</p>
				<button>Add to Cart</button>
			</div>
    </div>
  );
}
