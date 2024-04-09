
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LibraryBigProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-library-big" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.477 2.073 C 2.806 2.249,2.238 2.823,2.060 3.508 C 1.969 3.854,1.969 20.146,2.060 20.492 C 2.153 20.852,2.310 21.118,2.596 21.404 C 2.882 21.690,3.148 21.847,3.508 21.940 C 3.850 22.029,10.150 22.029,10.492 21.940 C 11.146 21.770,11.701 21.243,11.925 20.580 C 11.969 20.451,11.983 19.480,11.999 15.501 L 12.020 10.582 13.835 15.601 C 14.833 18.362,15.695 20.719,15.752 20.840 C 15.886 21.129,16.346 21.590,16.645 21.735 C 17.113 21.962,17.620 22.021,18.043 21.896 C 18.444 21.777,20.218 21.114,20.420 21.007 C 21.090 20.653,21.571 19.714,21.448 19.001 C 21.420 18.834,20.314 15.722,18.586 10.946 C 16.264 4.530,15.742 3.123,15.612 2.932 C 15.180 2.297,14.312 1.928,13.598 2.075 C 13.478 2.100,12.979 2.267,12.488 2.446 L 11.596 2.773 11.408 2.589 C 11.305 2.488,11.115 2.342,10.986 2.265 C 10.541 1.998,10.569 2.000,6.972 2.002 C 4.050 2.004,3.715 2.011,3.477 2.073 M6.000 12.000 L 6.000 20.000 5.000 20.000 L 4.000 20.000 4.000 12.000 L 4.000 4.000 5.000 4.000 L 6.000 4.000 6.000 12.000 M10.000 12.000 L 10.000 20.000 9.000 20.000 L 8.000 20.000 8.000 12.000 L 8.000 4.000 9.000 4.000 L 10.000 4.000 10.000 12.000 M16.703 11.621 C 18.208 15.779,19.439 19.200,19.439 19.224 C 19.440 19.262,17.563 19.980,17.540 19.951 C 17.484 19.881,12.055 4.771,12.078 4.748 C 12.117 4.706,13.889 4.044,13.934 4.055 C 13.952 4.059,15.198 7.464,16.703 11.621 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const LibraryBig = /*@__PURE__*/ forwardRef<ComponentInternals, LibraryBigProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    