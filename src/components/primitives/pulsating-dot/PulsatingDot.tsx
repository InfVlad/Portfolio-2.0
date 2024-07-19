export const PulsatingDot = () => {
  return (
    <div class="relative w-fit">
      <div class="absolute mt-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-green-500 sm:h-3 sm:w-3 md:h-4 md:w-4"></div>
      <div class="mt-0.5 h-2 w-2 animate-ping rounded-full bg-green-500 sm:h-3 sm:w-3 md:h-4 md:w-4"></div>
    </div>
  );
};
