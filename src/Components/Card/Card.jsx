import styles from './card.module.css';
import { useOutletContext } from 'react-router-dom';

export default function Card({ item }) {
  const [cartItems, setCartItems] = useOutletContext();

  function handleAddClick() {
    setCartItems(prev => ({
      ...prev,
      [item.id]: {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: (prev[item.id]?.quantity || 0) + 1,
      }
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.title} />
      </div>
      <h4>{item.title}</h4>
      <div className={styles.row}>
        <p>${item.price}</p>
        <button onClick={handleAddClick}>Add to Cart</button>
      </div>
    </div>
  );
}
