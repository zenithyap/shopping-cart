import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/Components/Home/Home';

function renderHome() {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

describe('Home component', () => {
  it('Renders correct heading', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: 'Shoply' }));
  });

  it('Renders correct description', () => {
    renderHome();
    expect(
      screen.getByRole('heading', {
        name: 'The best shopping site ever created!',
      }),
    ).toBeInTheDocument();
  });

  it('Renders correct shop button', () => {
    renderHome();
    expect(screen.getByRole('button', { name: 'Shop Now' })).toBeInTheDocument();
  });
});
