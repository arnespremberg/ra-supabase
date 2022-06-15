import * as React from 'react';
import { renderWithRedux } from 'ra-test';
import { waitFor } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import {
    useSupabaseAccessToken,
    UseSupabaseAccessTokenOptions,
} from './useSupabaseAccessToken';

describe('useSupabaseAccessToken', () => {
    const UseSupabaseAccessToken = (props?: UseSupabaseAccessTokenOptions) => {
        const token = useSupabaseAccessToken(props);

        return <span>{token}</span>;
    };

    test('should return the access token if present in the URL', async () => {
        window.history.pushState(
            {},
            'React Admin',
            '/set-password?access_token=bazinga'
        );
        const history = createMemoryHistory({
            initialEntries: ['/set-password'],
        });

        const { queryByText } = renderWithRedux(
            <HistoryRouter history={history}>
                <UseSupabaseAccessToken />
            </HistoryRouter>
        );

        await waitFor(() => {
            expect(queryByText('bazinga')).not.toBeNull();
        });
    });

    test('should return the access token from the provided key if present in the URL', async () => {
        window.history.pushState(
            {},
            'React Admin',
            '/set-password?my_token=bazinga'
        );
        const history = createMemoryHistory({
            initialEntries: ['/set-password'],
        });

        const { queryByText } = renderWithRedux(
            <HistoryRouter history={history}>
                <UseSupabaseAccessToken parameterName="my_token" />
            </HistoryRouter>
        );

        await waitFor(() => {
            expect(queryByText('bazinga')).not.toBeNull();
        });
    });

    test('should redirect users if the access token is not present in the URL', async () => {
        window.history.pushState({}, 'React Admin', '/set-password');
        const history = createMemoryHistory({
            initialEntries: ['/set-password'],
        });

        renderWithRedux(
            <HistoryRouter history={history}>
                <UseSupabaseAccessToken />
            </HistoryRouter>
        );

        await waitFor(() => {
            expect(history.location.pathname).toEqual('/');
        });
    });

    test('should redirect users to the provided path if the access token is not present in the URL', async () => {
        window.history.pushState({}, 'React Admin', '/set-password');
        const history = createMemoryHistory({
            initialEntries: ['/set-password'],
        });

        renderWithRedux(
            <HistoryRouter history={history}>
                <UseSupabaseAccessToken redirectTo="/login" />
            </HistoryRouter>
        );

        await waitFor(() => {
            expect(history.location.pathname).toEqual('/login');
        });
    });

    test('should not redirect users if the access token is not present in the URL and redirectTo is false', async () => {
        window.history.pushState({}, 'React Admin', '/set-password');
        const history = createMemoryHistory({
            initialEntries: ['/set-password'],
        });

        renderWithRedux(
            <HistoryRouter history={history}>
                <UseSupabaseAccessToken redirectTo={false} />
            </HistoryRouter>
        );

        await waitFor(() => {
            expect(history.location.pathname).toEqual('/set-password');
        });
    });
});
