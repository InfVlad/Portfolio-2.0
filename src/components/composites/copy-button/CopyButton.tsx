import { useState } from "preact/hooks";
import { Copy, Check } from "lucide-preact";
import { copyToClipboard } from "~/utils/copyToClipboard";

type Props = {
  textToCopy: string;
};

export const CopyButton = ({ textToCopy }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (textToCopy: string) => {
    copyToClipboard(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <div className="relative flex">
      <button
        onClick={() => handleCopy(textToCopy)}
        className="text-white duration-300 hover:text-secondary-blue"
        title="Copy email"
      >
        <Copy width={20} height={20} />
      </button>
      {isCopied && (
        <Check
          className="draw-animation absolute -right-6 top-0 text-green-500"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default CopyButton;
