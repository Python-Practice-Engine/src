import React from 'react';
import Outline  from '../src/components/Outline.jsx';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn()
    };
  };

  return range;
}

test("IDE page loads", () => {
  render(
    <MemoryRouter initialEntries={["/IDE/1"]}>
      <Outline />
    </MemoryRouter>
  );
});