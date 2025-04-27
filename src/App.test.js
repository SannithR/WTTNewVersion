import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const homeElement = screen.getByText(/HOME/i);
  expect(homeElement).toBeInTheDocument();
});
