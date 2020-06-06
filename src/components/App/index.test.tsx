import React from 'react';
import { create } from 'react-test-renderer'

import App from './index';

test('it renders the correct markup', () => {
  const tree = create(<App />)
  .toJSON()

  expect(tree).toMatchSnapshot();
});
