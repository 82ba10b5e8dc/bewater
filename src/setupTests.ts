// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

window.browser = {
  i18n: {
    getMessage: (key: string, value: string) => `${key}: ${value}`
  },
  storage: {
    local: {
      get: (key: string, callback: () => void) => {},
        set: (key: string, value: string) => {}
    }
  }
}
