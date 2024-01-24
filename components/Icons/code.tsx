import Image from "next/image";
import * as React from "react";

const CodeIcon = ({ className }: { className: string }) => (
  <Image
    alt="code-icon"
    width={162}
    height={159}
    src="/iconsvgs/development.svg"
    className={className}
  />
);

export default CodeIcon;
