import styles from './cartrow.module.css';

export default function CartRow({ item, handleAddClick, handleRemoveClick }) {
  return (
    <div className={styles.row}>
      <div className={styles.imageTitle}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.title} />
        </div>
        <p>{item.title}</p>
      </div>
      <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
      <div>
        <p>Quantity: {item.quantity}</p>
        <button className={styles.leftButton} onClick={() => handleRemoveClick(item)}>-</button>
        <button onClick={() => handleAddClick(item)}>+</button>
      </div>
    </div>
  );
}
