import LocalFont from "next/font/local";

// Configure Designit Alphabeta
// const alphabeta = {
//   regular: LocalFont({ src: "/fonts/DesignitAlphaBeta-Regular.otf" }),
//   regularItalic: LocalFont({
//     src: "/fonts/DesignitAlphaBeta-RegularItalic.otf",
//   }),
//   bold: LocalFont({ src: "/fonts/DesignitAlphaBeta-Bold.otf" }),
//   boldItalic: LocalFont({
//     src: "/fonts/DesignitAlphaBeta-BoldItalic.otf",
//   }),
//   light: LocalFont({ src: "/fonts/DesignitAlphaBeta-Light.otf" }),
//   lightItalic: LocalFont({
//     src: "/fonts/DesignitAlphaBeta-LightItalic.otf",
//   }),
// };

const alphabeta = LocalFont({
  src: [
    // {
    //   path: "../public/fonts/DesignitAlphabeta-Light.otf",
    //   style: "light",
    //   weight: "300",
    // },
    // {
    //   path: "../public/fonts/DesignitAlphabeta-LightItalic.otf",
    //   style: "light-italic",
    //   weight: "300",
    // },
    {
      path: "../public/fonts/DesignitAlphabeta-Regular.otf",
      style: "regular",
      weight: "400",
    },
    // {
    //   path: "../public/fonts/DesignitAlphabeta-RegularItalic.otf",
    //   style: "italic",
    //   weight: "400",
    // },
    // {
    //   path: "../public/fonts/DesignitAlphabeta-Bold.otf",
    //   style: "bold",
    //   weight: "700",
    // },
    // {
    //   path: "../public/fonts/DesignitAlphabeta-BoldItalic.otf",
    //   style: "bold-italic",
    //   weight: "00",
    // },
  ],
});

export default alphabeta;
