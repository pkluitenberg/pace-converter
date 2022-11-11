import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Header from './Header';

it('renders the Header', () => {
    act(() => {
        render(<Header />);
    });
    expect(screen.findByText("Pace Converter"))
});