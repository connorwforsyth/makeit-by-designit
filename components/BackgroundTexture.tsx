export default function Texture() {
  return (
    <svg className="absolute -z-10 flex w-full">
      <filter id="grainy">
        <feTurbulence
          type="turbulence"
          seed={0 * Math.random()}
          baseFrequency="5"
        />
        <feComponentTransfer in="coloredNoise">
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}
