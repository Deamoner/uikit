
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BetweenHorizontalEndProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-between-horizontal-end" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.477 2.073 C 2.806 2.249,2.238 2.823,2.060 3.508 C 2.010 3.700,2.000 4.180,2.000 6.500 C 2.000 9.501,1.999 9.484,2.225 9.930 C 2.361 10.199,2.801 10.639,3.070 10.775 C 3.536 11.011,3.220 11.000,9.493 11.000 C 15.783 11.000,15.464 11.011,15.937 10.771 C 16.197 10.639,16.639 10.197,16.771 9.937 C 17.000 9.485,17.000 9.489,16.999 6.514 C 16.999 3.558,16.995 3.505,16.781 3.083 C 16.646 2.816,16.297 2.449,16.017 2.281 C 15.530 1.988,15.925 2.005,9.500 2.005 C 4.184 2.005,3.720 2.010,3.477 2.073 M15.000 6.500 L 15.000 9.000 9.500 9.000 L 4.000 9.000 4.000 6.500 L 4.000 4.000 9.500 4.000 L 15.000 4.000 15.000 6.500 M21.640 8.069 C 21.488 8.121,21.208 8.381,19.847 9.735 C 18.960 10.618,18.186 11.421,18.127 11.520 C 18.037 11.672,18.020 11.746,18.020 12.000 C 18.020 12.254,18.036 12.328,18.127 12.480 C 18.261 12.704,21.371 15.807,21.555 15.899 C 22.009 16.128,22.601 15.944,22.867 15.492 C 22.964 15.327,22.980 15.258,22.979 15.000 C 22.979 14.787,22.957 14.659,22.905 14.560 C 22.864 14.483,22.289 13.876,21.626 13.210 L 20.422 12.000 21.626 10.790 C 22.289 10.125,22.864 9.517,22.905 9.440 C 22.957 9.341,22.979 9.213,22.979 9.000 C 22.980 8.745,22.964 8.672,22.872 8.516 C 22.617 8.083,22.121 7.902,21.640 8.069 M3.477 13.073 C 2.806 13.249,2.238 13.823,2.060 14.508 C 2.010 14.700,2.000 15.180,2.000 17.500 C 2.000 20.501,1.999 20.484,2.225 20.930 C 2.361 21.199,2.801 21.639,3.070 21.775 C 3.536 22.011,3.220 22.000,9.493 22.000 C 15.783 22.000,15.464 22.011,15.937 21.771 C 16.197 21.639,16.639 21.197,16.771 20.937 C 17.000 20.485,17.000 20.489,16.999 17.514 C 16.999 14.558,16.995 14.505,16.781 14.083 C 16.646 13.816,16.297 13.449,16.017 13.281 C 15.530 12.988,15.925 13.005,9.500 13.005 C 4.184 13.005,3.720 13.010,3.477 13.073 M15.000 17.500 L 15.000 20.000 9.500 20.000 L 4.000 20.000 4.000 17.500 L 4.000 15.000 9.500 15.000 L 15.000 15.000 15.000 17.500 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BetweenHorizontalEnd = /*@__PURE__*/ forwardRef<ComponentInternals, BetweenHorizontalEndProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    