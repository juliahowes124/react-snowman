import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Snowman from './Snowman';

describe('proper rendering', () => {
  it('renders without crashing', () => {
    render(<Snowman/>);
  })
  //test vs it?
  it('matches snapshot at endgame', () => {
    const { container } = render(<Snowman/>);

    // container.querySelector('button[value="b"]').fireEvent('click')
    // container.querySelector('button[value="c"]').fireEvent('click')
    // container.querySelector('button[value="d"]').fireEvent('click')
    // container.querySelector('button[value="f"]').fireEvent('click')
    // container.querySelector('button[value="g"]').fireEvent('click')
    // container.querySelector('button[value="h"]').fireEvent('click')

    // expect(container).toMatchSnapshot();
  })
})