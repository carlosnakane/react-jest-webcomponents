import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../raw';

describe("Fixed App Test", () => {
    it("Should render", () => {
        render(<App />);
        expect(screen.getByText('RawComponent rendered as HTML')).toBeInTheDocument();
    })
})
