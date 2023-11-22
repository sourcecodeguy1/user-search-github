import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import dateFormat from "dateformat";

jest.mock('axios');
describe('App component tests', () => {
    test('renders Header component', () => {
        render(<App />);
        const headerElement = screen.getByText('devfinder');
        expect(headerElement).toBeInTheDocument();
    });

    test('renders SearchBar component', () => {
        render(<App />);
        const searchBarElement = screen.getByPlaceholderText(/search github username/i);
        expect(searchBarElement).toBeInTheDocument();
    });

    test('renders Card component', () => {
        render(<App />);
        const cardElement = screen.getByTestId('user-card');
        expect(cardElement).toBeInTheDocument();
    });

    test('performs a user search and displays results', async () => {
        const user = {
            login: 'octocat',
            created_at: '2011-01-25T18:44:36Z',
            bio: 'There once was...',
            public_repos: 8,
            followers: 3938,
            following: 9,
            location: 'San Francisco',
            twitter_username: 'Not Available',
            html_url: 'https://github.com/octocat',
            avatar_url: '/img/Bitmap.png',
        };

        // Mock the axios.get response
        axios.get.mockResolvedValueOnce({ data: user });

        render(<App />);
        const searchInput = screen.getByPlaceholderText(/search github username/i);
        const searchButton = screen.getByRole('button', { name: /search/i });

        // Simulate user typing and clicking the search button
        fireEvent.change(searchInput, { target: { value: 'octocat' } });
        fireEvent.click(searchButton);

        // Wait for the user details to be displayed
        await waitFor(() => {
            // Check for each user property
            expect(screen.getByText(user.login)).toBeInTheDocument();
            expect(screen.getByText(`Joined ${dateFormat(user.created_at, "mmm d, yyyy")}`)).toBeInTheDocument();
            expect(screen.getByText(user.bio)).toBeInTheDocument();
            expect(screen.getByText(user.public_repos.toString())).toBeInTheDocument();
            expect(screen.getByText(user.followers.toString())).toBeInTheDocument();
            expect(screen.getByText(user.following.toString())).toBeInTheDocument();
            expect(screen.getByText(user.location)).toBeInTheDocument();
            expect(screen.getByText(user.twitter_username)).toBeInTheDocument();
            expect(screen.getByText(`@${user.login}`)).toBeInTheDocument();
            expect(screen.getByAltText('Profile image').src).toContain(user.avatar_url);
        });
    });

    test('handles user not found error', async () => {
        // Mock the axios.get to simulate an error response
        axios.get.mockRejectedValueOnce({
            response: {
                status: 404,
            },
        });

        render(<App />);
        const searchInput = screen.getByPlaceholderText(/search github username/i);
        const searchButton = screen.getByRole('button', { name: /search/i });

        // Simulate user typing a non-existent username and clicking the search button
        fireEvent.change(searchInput, { target: { value: 'nonexistentuser' } });
        fireEvent.click(searchButton);

        // Wait for the error message to be displayed
        await waitFor(() => {
            const errorMessage = screen.getByText(/was not found!/i);
            expect(errorMessage).toBeInTheDocument();
        });
    });
});


