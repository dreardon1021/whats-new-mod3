import React from 'react';
import  { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import '@testing-library/jest-dom';

describe('Menu', () => {
  it('should be able to render buttons', () => {

    const { getByText } = render(<Menu />)

    const localButtonElement = getByText("Local News");
    const entertainmentButtonElement = getByText('Entertainment');
    const healthButtonElement = getByText('Health');
    const scienceButtonElement = getByText('Science');
    const technologyButtonElement = getByText('Technology');

    expect(localButtonElement).toBeInTheDocument()
    expect(entertainmentButtonElement).toBeInTheDocument()
    expect(healthButtonElement).toBeInTheDocument()
    expect(scienceButtonElement).toBeInTheDocument()
    expect(technologyButtonElement).toBeInTheDocument()

  })

  it('should be able to call updateState Function', () => {
    const mockUpdateState = jest.fn();

    const { getByText } = render(<Menu updateState={mockUpdateState}/>)

    fireEvent.click(getByText("Local News"));
    fireEvent.click(getByText("Entertainment"));
    fireEvent.click(getByText("Health"));
    fireEvent.click(getByText("Science"));
    fireEvent.click(getByText("Technology"));


    expect(mockUpdateState).toHaveBeenCalledTimes(5)

  })
})