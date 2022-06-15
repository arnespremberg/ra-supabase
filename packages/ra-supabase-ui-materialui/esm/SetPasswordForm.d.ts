import { OnSuccess } from 'ra-core';
export declare const SetPasswordForm: (props: SetPasswordFormProps) => JSX.Element;
export declare type OnFailure = (error?: any) => void;
export declare type ClassesOverride<UseStyles extends (props: any) => Record<string, string>> = Partial<Record<keyof ReturnType<UseStyles>, string>>;
export declare type SetPasswordFormProps = {
    classes?: ClassesOverride<typeof useStyles>;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
};
declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "icon" | "form" | "input">;
export {};
//# sourceMappingURL=SetPasswordForm.d.ts.map