import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import HelloPage from '../pages/HelloPage';
describe('HelloPage', () => {
    test('renders centered hello world heading with QA hooks', () => {
        render(_jsx(HelloPage, {}));
        const container = screen.getByTestId('hello-container');
        const heading = screen.getByRole('heading', { name: /hello world/i });
        expect(container).toHaveAttribute('data-hello-world', 'container');
        expect(heading).toHaveAttribute('data-testid', 'hello-text');
        expect(heading).toHaveAttribute('data-hello-world', 'text');
        expect(heading).toHaveClass('fade-in');
    });
});
