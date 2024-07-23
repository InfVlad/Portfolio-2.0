import { useState } from "preact/hooks";
import { FormInput } from "../form-input/FormInput";
import { AnimatedButtonContainer } from "../animated-button-container/AnimatedButtonContainer";
import { inputsData } from "./data";
import type { JSX } from "preact";
import type { InputsList } from "./types";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<Record<InputsList, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(values);
    setTimeout(() => setIsLoading(false), 400);
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
      className="mx-auto max-w-[25rem] rounded-md border border-bline bg-card p-8 xl:max-w-[40rem]"
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
        <AnimatedButtonContainer className="px-12">
          Submit
        </AnimatedButtonContainer>
      </button>
    </form>
  );
};
