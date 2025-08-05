import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form with full name field', () => {
  render(<App />);
  const labelElement = screen.getByText(/Full Name/i);
  expect(labelElement).toBeInTheDocument();
});
