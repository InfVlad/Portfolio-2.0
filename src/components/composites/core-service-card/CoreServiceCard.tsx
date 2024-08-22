import { Text } from "~/components/primitives";
import { cn } from "~/utils/cn";
import type { CoreService } from "~/types/coreService";

interface Props extends CoreService {
  index: number;
  isVisible: boolean;
}

export const CoreServiceCard = ({
  title,
  description,
  Icon,
  index,
  isVisible,
}: Props) => {
  return (
    <article
      className={cn(
        "flex h-[21.875rem] flex-1 flex-col rounded-md border border-bline bg-card p-10 pl-6 pt-36 opacity-0 transition-opacity duration-300",
        index % 2 === 1 ? "text-primary-lila" : "text-primary-blue",
        isVisible && "autoShowRightWithoutTimeline",
      )}
      style={{
        "--delay": `${0.3 * index}s`,
        // "--viewEnd": `${70 - 8 * index}%`,
        // "--viewStart": `${20 + 8 * index}%`,
      }}
    >
      <div className="mb-4 h-fit w-full">
        <Icon size={50} />
      </div>
      <Text element="h4" className="mb-3 text-lg font-semibold text-inherit">
        {title}
      </Text>
      <Text element="p" className="text-white">
        {description}
      </Text>
    </article>
  );
};
