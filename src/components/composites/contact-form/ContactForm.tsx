import { useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import type { JSX } from "preact";
import { FormInput } from "../form-input/FormInput";
import { Toast } from "../../primitives/toast/Toast";
import { AnimatedButtonContainer } from "../animated-button-container/AnimatedButtonContainer";
import { inputsData } from "./data";
import { useToast } from "~/hooks/useToast";
import type { InputsList } from "./types";
import { emailSender } from "~/utils/email-sender";

export const ContactForm = ({ children }: { children: ComponentChildren }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<Record<InputsList, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { showToast, message, isSuccess } = useToast();

  const handleSubmit = async (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await emailSender(values);

    if (result.success) {
      showToast("Message sent successfully", true);
    } else {
      showToast("An error occurred while sending the message", false);
    }

    setIsSubmitting(false);
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
      className="mx-auto w-full min-w-[22.5rem] max-w-[30rem] rounded-md border border-bline bg-card p-8 xl:max-w-[40rem]"
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
      <AnimatedButtonContainer
        isLink={false}
        type="submit"
        className="px-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? children : "Submit"}
      </AnimatedButtonContainer>
      {message && <Toast message={message} isSuccess={isSuccess} />}
    </form>
  );
};
