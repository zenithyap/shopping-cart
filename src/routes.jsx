import Layout from './Components/Layout'
import Home from './Components/Home'
import Shop from './Components/Shop';
import Cart from './Components/Cart';

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]

export default routes;