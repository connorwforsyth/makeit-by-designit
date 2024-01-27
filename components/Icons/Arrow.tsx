import * as React from "react";

const Arrow = ({ className }: { className?: string }) => (
  <svg
    width={20}
    height={20}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="currentColor" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M13.501 10.543H4.416V9.46h9.085L9.234 5.192 10 4.418l5.583 5.583L10 15.585l-.766-.774 4.267-4.268Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default Arrow;
