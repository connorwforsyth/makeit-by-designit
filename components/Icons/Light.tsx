import * as React from "react";

const LightBulbIcon = ({ className }: { className: string }) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M77.74 162.039H46.52v9.029h31.22v-9.029Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M90.74 138.258v-4.275c0-20.836 19.06-29.785 26.34-45.127 3.86-8.14 6.18-17.19 6.18-26.798C123.26 28.338 95.89 1 62.13 1 28.37 1 1 28.338 1 62.058c0 9.608 2.32 18.658 6.18 26.798 7.28 15.342 26.34 24.291 26.34 45.127v4.275h57.22Z"
      fill="#EB3232"
    />
    <mask
      id="a"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={123}
      height={138}
    >
      <path
        d="M90.74 138.258v-4.275c0-20.836 19.06-29.785 26.34-45.127 3.86-8.14 6.18-17.19 6.18-26.798C123.26 28.338 95.89 1 62.13 1 28.37 1 1 28.338 1 62.058c0 9.608 2.32 18.658 6.18 26.798 7.28 15.342 26.34 24.291 26.34 45.127v4.275h57.22Z"
        fill="#fff"
      />
    </mask>
    <g
      mask="url(#a)"
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M62.14 87.468c14.05 0 25.44-11.376 25.44-25.41 0-14.033-11.39-25.41-25.44-25.41S36.7 48.025 36.7 62.058c0 14.034 11.39 25.41 25.44 25.41ZM62.14 169.312c22.627 0 40.97-18.321 40.97-40.922 0-22.6-18.343-40.921-40.97-40.921S21.17 105.79 21.17 128.39c0 22.601 18.343 40.922 40.97 40.922Z" />
    </g>
    <path
      d="M90.74 138.258v-4.275c0-20.836 19.06-29.785 26.34-45.127 3.86-8.14 6.18-17.19 6.18-26.798C123.26 28.338 95.89 1 62.13 1 28.37 1 1 28.338 1 62.058c0 9.608 2.32 18.658 6.18 26.798 7.28 15.342 26.34 24.291 26.34 45.127v4.275h57.22Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M90.75 131.703H33.53v30.324h57.22v-30.324Z" fill="#D5D5D5" />
    <mask
      id="b"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={33}
      y={131}
      width={58}
      height={32}
    >
      <path d="M90.75 131.703H33.53v30.324h57.22v-30.324Z" fill="#fff" />
    </mask>
    <g
      mask="url(#b)"
      stroke="#050505"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M-5.19 141.82h152.251M-5.19 151.93h152.251" />
    </g>
    <path
      d="M90.75 131.703H33.53v30.324h57.22v-30.324Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LightBulbIcon;
