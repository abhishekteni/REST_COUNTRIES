import React from 'react';
import FilterCountry from './FilterCountry';
import { fireEvent, render,screen } from '@testing-library/react';
describe('FilterCountry component', () => {

  // Test that component renders without crashing
  it('should render without errors', () => {
    render(<FilterCountry />);
    screen.debug();
  });

});
