import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('About component' , () => {
    //renders About test

    //1st test
    it('renders', () => {
        render(<About/>);
    });

    //2nd test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
        });
        
});afterEach(cleanup);

