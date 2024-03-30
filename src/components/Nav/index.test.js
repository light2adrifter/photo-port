import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const categories = [
    {name: 'portraits', description: 'Portraits of people in my life'}
]

const mockCurrentCategory =jest.fn();
const mockSetCurrentCategory = jest.fn();

it('renders', ()=> {
    render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}/>);
});

describe('About component' , () => {
    //renders Nav test

    //1st test
    it('renders', () => {
        render(<Nav/>);
    });

    //2nd test
    it('matches snapshot DOM node structure', () => {
        // render Nav
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
        });
        
});afterEach(cleanup);
