import { useRedirect } from 'ra-core';
import { useEffect } from 'react';
/**
 * This hook gets the access_token from supabase in the current browser URL and redirects to the specified page (/ by default) if there is none.
 * To be used in pages such as those which set the password after a reset or an invitation.
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
export var useSupabaseAccessToken = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.redirectTo, redirectTo = _c === void 0 ? '/' : _c, _d = _b.parameterName, parameterName = _d === void 0 ? 'access_token' : _d;
    var redirect = useRedirect();
    var urlSearchParams = new URLSearchParams(window.location.search.substr(1));
    var access_token = urlSearchParams.get(parameterName);
    useEffect(function () {
        if (access_token == null) {
            if (redirectTo !== false) {
                redirect(redirectTo);
            }
        }
    });
    return access_token;
};
