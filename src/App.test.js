import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header name Accounts Summary', () => {
  render(<App />);
  const headerName = screen.getByText('Accounts Summary');
  expect(headerName).toBeInTheDocument();
});
