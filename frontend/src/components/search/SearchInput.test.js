import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should call onSearch when submit button is clicked', async() => {
    const mockOnSearch = jest.fn();
    render(<SearchInput/>); 
    screen.debug();

    const input  = screen.getAllByRole("input")
    expect(input.value).toBe(undefined);
    expect(input.value).not.toBe("random");
  });
});