import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My really cool blog site logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  expect(linkElement).toBeInTheDocument();
});

<<<<<<< HEAD
test('renders Biology Today article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Biology Today:/i);
=======
test('renders Auto Review Article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Auto Review:/i);
>>>>>>> 2315377 (feat: add Auto Review article)
  expect(linkElement).toBeInTheDocument();
});