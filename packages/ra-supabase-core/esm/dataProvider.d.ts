import { DataProvider } from "react-admin";
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supabaseDataProvider: (client: SupabaseClient, resources: ResourcesOptions) => DataProvider;
declare type ResourceOptionsWithFullTextSearch = {
    table?: string;
    primaryKey?: string;
    fields: string[];
    fullTextSearchFields?: string[];
};
export declare type ResourceOptions = string[] | ResourceOptionsWithFullTextSearch;
export declare type ResourcesOptions = Record<string, ResourceOptions>;
export {};
//# sourceMappingURL=dataProvider.d.ts.map