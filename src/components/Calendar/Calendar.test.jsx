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

    it("Opens and closes the month drop down", () => {

        render(
            <BrowserRouter>
                <Calendar />
            </BrowserRouter>
        )

        const monthButton = document.querySelector('.month-title');
        expect(monthButton).toBeVisible();
        monthButton.click();
        expect(screen.getByText("January")).toBeVisible();
        expect(screen.getByText("February")).toBeVisible();
        screen.getByText("February").click();
        expect(screen.getByText("January")).toHaveClass('hidden');

    })
})