import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';


it('should open about', () => {
    const component = renderer.create(<App />);
    const instance = component.getInstance();

    
})