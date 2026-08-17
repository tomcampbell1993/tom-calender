import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import Calendar from './Calendar.jsx';

describe('Calendar component', () => {
    it("Renders the Calendar component", () => {
        render(
            <BrowserRouter>
                <Calendar />
            </BrowserRouter>
        )

        expect(screen.getByText("Calendar")).toBeInTheDocument();
    })
})