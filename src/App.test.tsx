import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders onboarding page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
});
