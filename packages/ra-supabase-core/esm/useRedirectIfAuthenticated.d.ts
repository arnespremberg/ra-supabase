/**
 * This hook redirect the user to the provided path (/ by default) if they are authenticated.
 *
 * @example
 * import { useRedirectIfAuthenticated } from 'react-admin';
 * const MyLoginPage = () => {
 *     useRedirectIfAuthenticated();
 *     // UI and logic for authentication
 * }
 **/
export declare const useRedirectIfAuthenticated: (redirectTo?: UseRedirectIfAuthenticatedOptions) => void;
export declare type UseRedirectIfAuthenticatedOptions = string;
//# sourceMappingURL=useRedirectIfAuthenticated.d.ts.map