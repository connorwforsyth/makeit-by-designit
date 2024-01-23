import MakeitLogo from "./Icons/MakeitLogo";

export default function Hero() {
  return (
    <main className="py-36 max-w-2xl flex flex-col gap-16 p-2">
      <h1 className="text-5xl flex flex-col gap-4">
        <span className="sr-only">Makeit</span>
        <MakeitLogo aria-hidden="true" />
        <div className="flex">
          <span className="flex-grow"></span>
          <span className="">— by Designit</span>
        </div>
      </h1>
      <div className="pr-80">
        <p className="text-xl">
          Get everyone on board - your team, your users and our squad - for a
          4-hour jam to tackle a real-life problem, creating a prototype that
          can be tested with your customers right away.
        </p>
      </div>
    </main>
  );
}
