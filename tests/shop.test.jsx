import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from '../src/Components/Shop/Shop';

vi.mock('../src/Components/Loading/Loading', () => ({
  default: () => <h1>Loading</h1>,
}));

vi.mock('../src/Components/Card/Card', () => ({
  default: ({ item }) => <div>{item.title}</div>,
}));

describe('Shop component', () => {
  it('Shows loading initially', () => {
    render(<Shop />);
    expect(screen.getByRole('heading', { name: 'Loading' }));
  });

  it('Should display error when fetch fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Server Error')))

    render(<Shop />);
    
    const errorText = await screen.findByText('Server Error');
    expect(errorText).toBeInTheDocument();
  });

  it('Should render data correctly', async () => {
    const mockItems = [
      { id: 1, title: 'itemOne' },
      { id: 2, title: 'itemTwo' },
      { id: 3, title: 'itemThree' },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => mockItems,
      }),
    );

    render(<Shop />);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
