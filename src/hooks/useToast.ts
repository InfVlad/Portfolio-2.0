import { useState } from "preact/hooks";

export const useToast = (duration: number = 3000) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(true);
  const showToast = (toastMessage: string, isSuccess: boolean) => {
    setMessage(toastMessage);
    setIsSuccess(isSuccess);
    setTimeout(() => setMessage(null), duration); // Hide the toast after 3 seconds
  };
  return { showToast, message, isSuccess };
};
