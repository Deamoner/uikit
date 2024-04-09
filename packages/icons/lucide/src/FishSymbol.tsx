
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FishSymbolProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-fish-symbol" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.080 6.999 C 10.548 7.168,8.098 8.256,5.635 10.306 L 5.286 10.597 5.055 10.348 C 4.420 9.663,3.527 8.518,3.019 7.737 C 2.712 7.264,2.583 7.143,2.291 7.055 C 2.052 6.983,1.897 6.986,1.667 7.064 C 1.170 7.233,0.880 7.833,1.056 8.326 C 1.210 8.757,2.394 10.358,3.411 11.510 L 3.844 12.000 3.411 12.490 C 2.394 13.642,1.210 15.243,1.056 15.674 C 0.845 16.264,1.265 16.923,1.892 16.988 C 2.360 17.036,2.629 16.864,3.016 16.268 C 3.528 15.482,4.419 14.338,5.057 13.650 L 5.289 13.400 5.514 13.593 C 7.781 15.533,10.110 16.648,12.560 16.965 C 13.136 17.040,14.445 17.030,15.020 16.946 C 17.531 16.583,19.785 15.410,22.149 13.238 C 22.891 12.556,22.980 12.424,22.980 12.000 C 22.980 11.746,22.963 11.672,22.872 11.516 C 22.720 11.257,21.688 10.306,20.860 9.661 C 18.401 7.747,15.703 6.824,13.080 6.999 M14.900 9.063 C 16.528 9.305,18.200 10.094,19.800 11.375 C 20.031 11.560,20.292 11.776,20.380 11.856 L 20.540 12.000 20.380 12.144 C 19.601 12.847,18.449 13.634,17.545 14.080 C 14.414 15.628,11.279 15.280,8.040 13.027 C 7.609 12.727,6.760 12.049,6.760 12.004 C 6.760 11.916,7.916 11.040,8.629 10.589 C 10.705 9.274,12.834 8.755,14.900 9.063 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FishSymbol = /*@__PURE__*/ forwardRef<ComponentInternals, FishSymbolProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    