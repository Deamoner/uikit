
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ArrowBigDownProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-arrow-big-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.695 5.057 C 8.466 5.129,8.256 5.299,8.128 5.516 L 8.020 5.700 8.009 8.350 L 7.998 11.000 6.449 11.000 C 5.441 11.000,4.844 11.016,4.741 11.045 C 4.502 11.111,4.255 11.300,4.131 11.511 C 4.036 11.672,4.020 11.744,4.020 12.000 C 4.020 12.254,4.036 12.328,4.127 12.480 C 4.263 12.707,11.368 19.805,11.560 19.905 C 11.659 19.957,11.788 19.979,12.000 19.979 C 12.255 19.980,12.327 19.964,12.480 19.873 C 12.583 19.811,14.194 18.229,16.265 16.153 C 19.698 12.713,19.874 12.530,19.940 12.325 C 20.073 11.914,19.943 11.469,19.618 11.221 C 19.342 11.011,19.242 11.000,17.555 11.000 L 16.002 11.000 15.991 8.350 L 15.980 5.700 15.872 5.516 C 15.740 5.293,15.533 5.128,15.290 5.055 C 15.030 4.977,8.945 4.979,8.695 5.057 M14.002 9.590 C 14.003 11.649,14.014 12.211,14.057 12.330 C 14.136 12.551,14.298 12.744,14.511 12.869 C 14.700 12.980,14.702 12.980,15.630 13.000 L 16.561 13.020 14.280 15.300 L 12.000 17.580 9.720 15.300 L 7.439 13.020 8.370 13.000 C 9.298 12.980,9.300 12.980,9.489 12.869 C 9.702 12.744,9.864 12.551,9.943 12.330 C 9.986 12.211,9.997 11.649,9.998 9.590 L 10.000 7.000 12.000 7.000 L 14.000 7.000 14.002 9.590 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ArrowBigDown = /*@__PURE__*/ forwardRef<ComponentInternals, ArrowBigDownProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    