import { Check, X } from "lucide-preact";
import { Portal } from "../portal/Portal";

interface ToastProps {
  message: string;
  isSuccess: boolean;
}

export const Toast = ({ message, isSuccess = false }: ToastProps) => {
  return (
    <Portal>
      <div
        role="dialog"
        className="animate-toast fixed bottom-5 right-5 flex min-w-[12.5rem] translate-x-[4rem] items-center gap-x-4 rounded-md border border-bline bg-primary-bg px-3 py-4 text-lg font-semibold text-white opacity-0 transition-all duration-500"
      >
        {message}
        {isSuccess ? (
          <Check width={24} height={24} className="text-green-500" />
        ) : (
          <X width={24} height={24} className="text-red-500" />
        )}
      </div>
    </Portal>
  );
};
