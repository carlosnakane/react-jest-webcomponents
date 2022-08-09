import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../vaadin';

describe("Fixed App Test", () => {
    it("Should render the React App and it's web components", () => {
        render(<App />);
        expect(screen.getByText('Frutas')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
        screen.debug();
    })
})
