import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../lit';

describe("Fixed App Test", () => {
    it("Should render", () => {
        render(<App />);
        expect(screen.getByText('Lit Button')).toBeInTheDocument();
    })
})
