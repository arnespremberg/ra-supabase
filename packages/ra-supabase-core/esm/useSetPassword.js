import { useAuthProvider, useNotify, useRedirect, } from 'ra-core';
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
export var useSetPassword = function (options) {
    var notify = useNotify();
    var redirect = useRedirect();
    var authProvider = useAuthProvider();
    var _a = options || {}, _b = _a.onSuccess, onSuccess = _b === void 0 ? function () { return redirect('/'); } : _b, _c = _a.onFailure, onFailure = _c === void 0 ? function (error) { return notify(error.message, { type: 'error' }); } : _c;
    return function (params) {
        authProvider
            .setPassword(params)
            .then(function () {
            if (onSuccess) {
                onSuccess();
            }
        })
            .catch(function (error) {
            if (onFailure) {
                onFailure(error);
            }
        });
    };
};
