import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from '../src/Components/Error/Error';

describe('Error component', () => {
  it('Renders correct heading', () => {
    render(<Error />);
    expect(
      screen.getByRole('heading', {
        name: 'Error 404: Nothing to be found here 🫠',
      }),
    );
  });
});
