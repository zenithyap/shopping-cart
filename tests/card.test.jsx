import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../src/Components/Card/Card';
import { useOutletContext } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(),
}));

describe('Card component', () => {
  it('Card item should render correctly', () => {
    const mockItem = {
      image: 'mock-image.jpg',
      title: 'Mock Item',
      price: '2',
    };
    useOutletContext.mockReturnValue([[], vi.fn()]);

    render(<Card item={mockItem} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'mock-image.jpg');
    expect(
      screen.getByRole('heading', { name: 'Mock Item' }),
    ).toBeInTheDocument();
    expect(screen.getByText('$2')).toBeInTheDocument();
  });
});
