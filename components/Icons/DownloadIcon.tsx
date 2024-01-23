import * as React from "react";

const Download = () => (
  <svg
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
        d="M10 12.825 6.609 9.434l.774-.758 2.075 2.075V3.418h1.083v7.333l2.076-2.075.774.758L10 12.825Zm-4.25 2.76c-.375 0-.691-.13-.948-.389a1.3 1.3 0 0 1-.385-.951v-1.26H5.5v1.26c0 .064.027.123.08.176.053.054.112.08.176.08h8.487a.245.245 0 0 0 .177-.08.245.245 0 0 0 .08-.176v-1.26h1.083v1.26c0 .375-.13.692-.389.951-.259.26-.576.389-.952.389H5.75Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default Download;
