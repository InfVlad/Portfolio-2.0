import type { HTMLAttributes } from "preact/compat";

export type InputsList = "name" | "subject" | "message" | "email";

export interface InputData
  extends Pick<
    HTMLAttributes<HTMLInputElement>,
    "id" | "placeholder" | "pattern" | "required" | "type"
  > {
  name: InputsList;
  label: string;
  errorMessage: string;
  isLast?: boolean;
  isTextArea?: boolean;
}
