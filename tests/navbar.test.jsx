import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';

describe('Navbar component', () => {
  it('Navbar should render correctly', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Navbar />,
      },
    ]);
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});
