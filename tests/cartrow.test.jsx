import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartRow from '../src/Components/CartRow/CartRow';

describe('CartRow component', () => {
  it('Should display values properly', () => {
    const mockItem = {
      title: 'Mock Item',
      price: 2,
      quantity: 2,
    };

    const { container } = render(<CartRow item={mockItem} />);

    expect(container).toMatchSnapshot();
  });

  it('Handles user interactions correctly', async () => {
    const mockHandleAddClick = vi.fn();
    const mockHandleRemoveClick = vi.fn();

    const mockItem = {
      title: 'Mock Item',
      price: 2,
      quantity: 2,
    };

    const user = userEvent.setup();

    render(
      <CartRow
        item={mockItem}
        handleAddClick={mockHandleAddClick}
        handleRemoveClick={mockHandleRemoveClick}
      />,
    );

    await user.click(screen.getByRole('button', {name: '+'}));
    expect(mockHandleAddClick).toHaveBeenCalled();

    await user.click(screen.getByRole('button', {name: '-'}));
    expect(mockHandleRemoveClick).toHaveBeenCalled();
  });
});
