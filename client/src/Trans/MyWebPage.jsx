// import React, { useEffect } from "react";

// function MyWebPage() {
//   useEffect(() => {
//     function googleTranslateElementInit() {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     }

//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.head.appendChild(script);

//     return () => {
//       // Очистка ресурсов при размонтировании компонента, если это необходимо
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <html lang="en-US">
//       <body>
//         <button></button>
//         <div id="google_translate_element"></div>
//       </body>
//     </html>
//   );
// }

// export default MyWebPage;
