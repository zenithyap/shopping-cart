import styles from './cart.module.css';
import { useOutletContext } from 'react-router-dom';
import CartRow from '../CartRow/CartRow';

export default function Cart() {
  const [cartItems] = useOutletContext();

  return (
    <div className={styles.container}>
      {Object.values(cartItems).map((item) => (
        <CartRow key={item.id} item={item} />
      ))}
    </div>
  );
}
