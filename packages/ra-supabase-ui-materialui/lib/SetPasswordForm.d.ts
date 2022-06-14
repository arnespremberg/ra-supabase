import { OnFailure, OnSuccess } from 'ra-core';
import { ClassesOverride } from 'ra-ui-materialui';
export declare const SetPasswordForm: (props: SetPasswordFormProps) => JSX.Element;
export declare type SetPasswordFormProps = {
    classes?: ClassesOverride<typeof useStyles>;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
};
declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"button" | "icon" | "form" | "input">;
export {};
//# sourceMappingURL=SetPasswordForm.d.ts.map