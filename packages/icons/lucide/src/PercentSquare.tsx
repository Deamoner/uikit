
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PercentSquareProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-percent-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.755,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 5.758,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M8.695 8.055 C 8.464 8.130,8.255 8.300,8.128 8.516 C 8.037 8.672,8.020 8.746,8.020 9.000 C 8.020 9.257,8.036 9.327,8.133 9.492 C 8.651 10.374,9.998 10.018,9.998 9.000 C 9.998 8.623,9.792 8.281,9.463 8.112 C 9.265 8.010,8.911 7.984,8.695 8.055 M14.640 8.068 C 14.485 8.121,14.036 8.553,11.347 11.235 C 9.570 13.008,8.188 14.417,8.127 14.520 C 8.036 14.672,8.020 14.746,8.020 15.000 C 8.020 15.257,8.036 15.327,8.133 15.492 C 8.263 15.714,8.502 15.901,8.736 15.965 C 8.938 16.019,9.266 15.989,9.445 15.899 C 9.630 15.807,15.737 9.707,15.873 9.480 C 15.964 9.328,15.980 9.254,15.980 9.000 C 15.980 8.746,15.963 8.672,15.872 8.516 C 15.617 8.083,15.122 7.903,14.640 8.068 M14.695 14.055 C 14.464 14.130,14.255 14.300,14.128 14.516 C 14.037 14.672,14.020 14.746,14.020 15.000 C 14.020 15.257,14.036 15.327,14.133 15.492 C 14.651 16.374,15.998 16.018,15.998 15.000 C 15.998 14.623,15.792 14.281,15.463 14.112 C 15.265 14.010,14.911 13.984,14.695 14.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const PercentSquare = /*@__PURE__*/ forwardRef<ComponentInternals, PercentSquareProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    