import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../celebration';

describe("Fixed App Test", () => {
    it("Should render", () => {
        render(<App />);
        expect(screen.getByText('Meu Drawer')).toBeInTheDocument();
        screen.debug();
    })
})
