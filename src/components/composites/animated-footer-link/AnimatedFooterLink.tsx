import { MoveRight } from "lucide-preact";
import { cn } from "~/utils/cn";
import { Text } from "../../primitives";

type Props = {
  title: string;
  subtitle: string;
  href: string;
  withBorder?: boolean;
};

export const AnimatedFooterLink = ({
  title,
  subtitle,
  href,
  withBorder,
}: Props) => {
  return (
    <a
      href={href}
      className={cn(
        "group flex gap-2 py-4",
        withBorder && "border-b border-bline",
      )}
    >
      <div>
        <Text className="text-xl font-semibold transition-colors duration-300 group-hover:text-secondary-blue">
          {title}
        </Text>
        <Text className="text-sm text-opacity-80">{subtitle}</Text>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-bline text-primary-blue transition-transform duration-300 group-hover:rotate-[-45deg]">
        <MoveRight size={24} />
      </div>
    </a>
  );
};
