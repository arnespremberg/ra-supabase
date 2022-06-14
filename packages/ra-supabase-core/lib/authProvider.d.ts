import { AuthProvider, UserIdentity } from 'react-admin';
import { SupabaseClient, User } from '@supabase/supabase-js';
export declare const supabaseAuthProvider: (client: SupabaseClient, { getIdentity }: SupabaseAuthProviderOptions) => SupabaseAuthProvider;
export declare type GetIdentity = (user: User) => Promise<UserIdentity>;
export declare type SupabaseAuthProviderOptions = {
    getIdentity?: GetIdentity;
};
export interface SupabaseAuthProvider extends AuthProvider {
    setPassword: (params: SetPasswordParams) => Promise<void>;
}
export declare type SetPasswordParams = {
    access_token: string;
    password: string;
};
//# sourceMappingURL=authProvider.d.ts.map