import styles from './cart.module.css';
import { useOutletContext } from 'react-router-dom';
import CartRow from '../CartRow/CartRow';

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext();
  function handleAddClick(item) {
    setCartItems((prev) => ({
      ...prev,
      [item.id]: {
        ...prev[item.id],
        quantity: prev[item.id].quantity + 1,
      },
    }));
  }

  function handleRemoveClick(item) {
    setCartItems((prev) => {
      const quantity = prev[item.id].quantity;
      if (quantity === 1) {
        const { [item.id]: _, ...remaining } = prev;
        return remaining;
      }

      return {
        ...prev,
        [item.id]: {
          ...prev[item.id],
          quantity: prev[item.id].quantity - 1,
        },
      };
    });
  }

  if (Object.keys(cartItems).length === 0)
    return (
      <div className={styles.center}>
        <h1>Your cart is currently empty 😔</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      {cartItems &&
        Object.values(cartItems).map((item) => (
          <CartRow
            key={item.id}
            item={item}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
    </div>
  );
}
