import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

describe('SearchBar Component', () => {

    test('renders search input', () => {
        render(<SearchBar parentCallBack={() => {}} lightBackground={false} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    test('allows users to input text', () => {
        render(<SearchBar parentCallBack={() => {}} lightBackground={false} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'testuser' } });
        expect(inputElement.value).toBe('testuser');
    });

    test('triggers search when button is clicked', () => {
        const mockCallBack = jest.fn();
        render(<SearchBar parentCallBack={mockCallBack} lightBackground={false} />);
        const inputElement = screen.getByRole('textbox');
        const buttonElement = screen.getByRole('button');

        fireEvent.change(inputElement, { target: { value: 'testuser' } });
        fireEvent.click(buttonElement);

        expect(mockCallBack).toHaveBeenCalledWith('testuser');
    });

    test('triggers search when enter key is pressed', () => {
        const mockCallBack = jest.fn();
        render(<SearchBar parentCallBack={mockCallBack} lightBackground={false} />);
        const inputElement = screen.getByRole('textbox');

        fireEvent.change(inputElement, { target: { value: 'testuser' } });
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

        expect(mockCallBack).toHaveBeenCalledWith('testuser');
    });

    test('calls GitHub API with the username on search', async () => {
        const mockResponse = { data: {
            login: 'testuser',
            } };
        axios.get.mockResolvedValue(mockResponse);

        render(<App />);
        // Get the input and search button elements
        const inputElement = screen.getByRole('textbox');
        const searchButton = screen.getByRole('button', { name: /search/i });
        // Simulate user typing a username and clicking the search button
        fireEvent.change(inputElement, { target: { value: 'testuser' } });
        fireEvent.click(searchButton);

        await waitFor(() => {
            // Check if axios.get was called with the correct endpoint
            expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/users/testuser`);
        });
    });
});
