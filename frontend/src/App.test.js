import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders ', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const appNameElement = screen.getByText(/Bounce Insight/i);
    expect(appNameElement).toBeInTheDocument();
});
