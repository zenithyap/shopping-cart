import styles from './cartrow.module.css';

export default function CartRow({ item }) {
  return (
    <div className={styles.row}>
      <div className={styles.imageTitle}>
				<div className={styles.imageContainer}>
					<img src={item.image} alt={item.title} />
				</div>
				<p>{item.title}</p>
			</div>
			<div className={styles.spacer}></div>
      <p>Total Price: ${item.price * item.quantity}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
