import { OnSuccess } from 'ra-core';
import { SetPasswordParams } from './authProvider';
/**
 * This hook returns a function to call in order to set a user password on Supabase.
 *
 * @example
 * import { useSupabaseAccessToken } from 'ra-supabase-core';
 *
 * const SetPasswordPage = () => {
 *     const access_token = useSupabaseAccessToken();
 *     const setPassword = useSetPassword();
 *
 *     const handleSubmit = event => {
 *         setPassword({
 *             access_token,
 *             password: event.currentTarget.elements.password.value,
 *         });
 *     };
 *
 *     return (
 *         <form onSubmit={handleSubmit}>
 *             <label for="password">Choose a password:</label>
 *             <input id="password" name="password" type="password" />
 *             <button type="submit">Save</button>
 *         </form>
 *     );
 * };
 **/
export declare const useSetPassword: (options?: UseSetPasswordOptions) => (params: SetPasswordParams) => void;
export declare type OnFailure = (error?: any) => void;
export declare type UseSetPasswordOptions = {
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
};
//# sourceMappingURL=useSetPassword.d.ts.map