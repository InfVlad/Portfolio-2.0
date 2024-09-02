import { useRef } from "preact/hooks";
import { useIntersection } from "~/hooks/useIntersection";
import { Text } from "../../primitives";
import { FooterLink } from "../footer-link/FooterLink";
import { AnimatedFooterLink } from "../animated-footer-link/AnimatedFooterLink";
import { exploreLinks, socialLinks } from "./data";
import { cn } from "~/utils/cn";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, "0px 0px -15% 0px");
  return (
    <footer className="container pb-4">
      <div
        ref={ref}
        className="flex w-full rounded-xl border border-bline px-3 pb-10 pt-12 md:px-16 xl:gap-36"
      >
        <div className="flex w-full justify-between">
          <div
            className={cn(
              "opacity-0",
              isVisible && "autoShowRightWithoutTimeline",
            )}
            style={{
              "--delay": `${0.1}s`,
            }}
          >
            <Text className="text-2xl font-bold">
              Turning <span className="text-primary-lila">ideas</span>
            </Text>
            <Text className="text-2xl font-bold">
              into <span className="text-primary-blue">reality</span>
            </Text>
          </div>
          <ul
            className={cn(
              "space-y-1 text-lg text-white opacity-0",
              isVisible && "autoShowRightWithoutTimeline",
            )}
            style={{
              "--delay": `${0.3}s`,
            }}
          >
            <li className="mb-4 text-xl font-semibold text-primary-lila">
              Explore
            </li>
            {exploreLinks.map(({ content, href }) => (
              <FooterLink href={href}>{content}</FooterLink>
            ))}
          </ul>
          <ul
            className={cn(
              "space-y-1 text-lg text-white opacity-0",
              isVisible && "autoShowRightWithoutTimeline",
            )}
            style={{
              "--delay": `${0.5}s`,
            }}
          >
            <li className="mb-4 text-xl font-semibold text-primary-blue">
              Follow Me
            </li>
            {socialLinks.map(({ content, href }) => (
              <FooterLink href={href} target="_blank" rel="noopener noreferrer">
                {content}
              </FooterLink>
            ))}
          </ul>
          <div
            className={cn(
              "opacity-0",
              isVisible && "autoShowRightWithoutTimeline",
            )}
            style={{
              "--delay": `${0.7}s`,
            }}
          >
            <AnimatedFooterLink
              withBorder
              title="Contact Me"
              subtitle="Say Hello !"
              href="/contact"
            />
            <AnimatedFooterLink
              title="My Projects"
              subtitle="Explore Projects"
              href="/projects"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-2 text-lg font-semibold">
        <Text>Vladimir Infante ©2024</Text>
        <Text>
          You can check this site's code{" "}
          <a
            href="https://github.com/InfVlad/Portfolio-2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-blue duration-300 hover:text-primary-blue"
          >
            here.
          </a>
        </Text>
      </div>
    </footer>
  );
};
