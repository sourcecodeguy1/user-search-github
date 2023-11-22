import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from "../components/Card/Card";

describe('Card', () => {
    const mockDetails = [{
        login: 'octocat',
        created_at: '2011-01-25T18:44:36Z',
        bio: 'This is a mock bio',
        public_repos: 8,
        followers: 3938,
        following: 9,
        location: 'San Francisco',
        twitter_username: 'octocat',
        html_url: 'https://github.com/octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4'
    }];

    it('renders the Card component with details', () => {
        render(<Card details={mockDetails} lightBackground={true} />);

        expect(screen.getByTestId('user-card')).toBeInTheDocument();
        expect(screen.getByText(`${mockDetails[0].login}`)).toBeInTheDocument();
        expect(screen.getByText(`${mockDetails[0].bio}`)).toBeInTheDocument();
        expect(screen.getByText(`${mockDetails[0].public_repos}`)).toBeInTheDocument(); // for repos
        expect(screen.getByText(`${mockDetails[0].followers}`)).toBeInTheDocument(); // for followers
        expect(screen.getByText(`${mockDetails[0].following}`)).toBeInTheDocument(); // for following
        expect(screen.getByText(`${mockDetails[0].location}`)).toBeInTheDocument();
        expect(screen.getByText(`@${mockDetails[0].login}`).closest('a')).toHaveAttribute('href', `${mockDetails[0].html_url}`);
        expect(screen.getByAltText('Profile image')).toHaveAttribute('src', `${mockDetails[0].avatar_url}`);
    });

    // Add more tests as needed to cover different scenarios and prop values
});