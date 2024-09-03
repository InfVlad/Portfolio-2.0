import { useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import type { JSX } from "preact";
import { FormInput } from "../form-input/FormInput";
import { Toast } from "../../primitives/toast/Toast";
import { AnimatedButtonContainer } from "../animated-button-container/AnimatedButtonContainer";
import { inputsData } from "./data";
import { useToast } from "~/hooks/useToast";
import type { InputsList } from "./types";

export const ContactForm = ({ children }: { children: ComponentChildren }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<Record<InputsList, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { showToast, message, isSuccess } = useToast();

  const handleSubmit = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast("An error occured", false, {});
    }, 400);
  };

  const onChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    if (
      e.target &&
      "name" in e.target &&
      typeof e.target?.name === "string" &&
      "value" in e.target &&
      typeof e.target?.value === "string"
    ) {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[25rem] rounded-md border border-bline bg-card p-8 xl:max-w-[40rem]"
    >
      <legend className="mb-8 text-2xl font-bold text-white">
        Contact Form
      </legend>
      <fieldset className="mb-5 flex flex-col gap-y-2">
        {inputsData.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </fieldset>
      <button type="submit">
        <AnimatedButtonContainer isLink={false} className="px-12">
          {isLoading ? children : "Submit"}
        </AnimatedButtonContainer>
      </button>
      {message && <Toast message={message} isSuccess={isSuccess} />}
    </form>
  );
};
