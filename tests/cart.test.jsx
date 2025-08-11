import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';
import Cart from '../src/Components/Cart/Cart';
import CartRow from '../src/Components/CartRow/CartRow';

vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(),
}));

vi.mock('../src/Components/CartRow/CartRow', () => ({
  default: ({ item }) => <p>{item.title}</p>,
}));

describe('Cart component', () => {
  it('Empty cart should display correct message', () => {
    useOutletContext.mockReturnValue([[], vi.fn()]);

    render(<Cart />);

    expect(
      screen.getByRole('heading', { name: 'Your cart is currently empty 😔' }),
    ).toBeInTheDocument();
  });

  it('Cart items should be rendered', () => {
    useOutletContext.mockReturnValue([
      { 1: { title: 'First Item' }, 2: { title: 'Second Item' } },
      vi.fn(),
    ]);

    render(<Cart />);

    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();
  });
});
