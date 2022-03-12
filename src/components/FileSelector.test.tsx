import React from 'react';
import { render, screen } from '@testing-library/react';
import FileSelector from './FileSelector';

test('renders upload button',() => {
  render(<FileSelector/>);
  const linkElement = screen.getByTestId('json-input');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("type", "file")
  expect(linkElement).toHaveAttribute("accept", "application/json")
});
