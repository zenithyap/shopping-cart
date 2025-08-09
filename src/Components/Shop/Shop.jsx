import { useState, useEffect } from 'react'
import styles from './shop.module.css'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default function Shop() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP error: Status ${res.status}`);
        }
        const data = await res.json();
        setItems(data);
        setError(null);
      } catch(error) {
        setError(error.message)
        setItems(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <ul className={styles.container}>
        {items && items.map(item => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}
