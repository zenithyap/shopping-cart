import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function Layout() {
  const [cartItems, setCartItems] = useState({});

  return (
    <>
      <Navbar />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}
