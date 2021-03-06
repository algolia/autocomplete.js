import { toWarnDev } from './matchers';

expect.extend({ toWarnDev });

global.console.warn = jest.fn();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
