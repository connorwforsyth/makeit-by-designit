export default function ThreeBanner() {
  return (
    <div className="mt-5 flex flex-col items-center gap-3 text-center text-2xl *:flex *:rounded-full *:border-8 *:border-black *:bg-white *:p-1 *:font-bold *:text-black *:shadow-sm *:shadow-neutral-700 sm:text-3xl sm:*:p-2 md:text-4xl lg:mt-10 lg:gap-9 lg:*:text-6xl">
      <div className="rotate-[-5deg]">
        <h2>Create a testable prototype</h2>
      </div>
      <div className="rotate-[3deg]">
        <h2>Innovation roadmap creation</h2>
      </div>
      <div className="rotate-[-3deg]">
        <h2>Improve team cohesion</h2>
      </div>
    </div>
  );
}
