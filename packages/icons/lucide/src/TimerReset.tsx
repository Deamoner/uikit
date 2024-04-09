
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TimerResetProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-timer-reset" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.695 1.057 C 9.466 1.129,9.256 1.299,9.128 1.516 C 9.037 1.672,9.020 1.746,9.020 2.000 C 9.020 2.256,9.036 2.328,9.131 2.489 C 9.256 2.702,9.449 2.864,9.670 2.943 C 9.889 3.021,14.111 3.021,14.330 2.943 C 14.551 2.864,14.744 2.702,14.869 2.489 C 14.964 2.328,14.980 2.256,14.980 2.000 C 14.980 1.746,14.963 1.672,14.872 1.516 C 14.740 1.293,14.533 1.128,14.290 1.055 C 14.033 0.978,9.943 0.979,9.695 1.057 M11.240 5.025 C 8.035 5.320,5.334 7.134,3.908 9.949 C 3.587 10.582,3.395 11.094,3.222 11.774 C 3.032 12.519,2.971 12.992,3.033 13.232 C 3.101 13.493,3.267 13.716,3.498 13.859 C 3.671 13.966,3.729 13.980,3.997 13.980 C 4.257 13.980,4.327 13.964,4.492 13.867 C 4.710 13.739,4.904 13.495,4.956 13.284 C 4.975 13.205,5.030 12.933,5.077 12.680 C 5.429 10.807,6.571 9.123,8.180 8.105 C 9.740 7.118,11.627 6.780,13.460 7.159 C 15.241 7.528,16.897 8.677,17.901 10.240 C 18.786 11.617,19.179 13.534,18.901 15.116 C 18.489 17.460,17.070 19.335,14.951 20.338 C 14.062 20.759,13.254 20.954,12.260 20.987 C 10.739 21.039,9.322 20.643,8.120 19.830 C 7.741 19.574,7.590 19.450,6.689 18.650 L 5.956 18.000 7.568 17.998 C 9.302 17.996,9.346 17.992,9.619 17.783 C 9.696 17.725,9.808 17.592,9.869 17.489 C 9.964 17.328,9.980 17.256,9.980 17.000 C 9.980 16.746,9.963 16.672,9.872 16.516 C 9.740 16.293,9.533 16.128,9.290 16.055 C 9.022 15.974,3.978 15.974,3.710 16.055 C 3.467 16.128,3.260 16.293,3.128 16.516 L 3.020 16.700 3.020 19.503 L 3.020 22.306 3.141 22.503 C 3.543 23.156,4.457 23.156,4.859 22.503 L 4.980 22.307 5.000 21.077 L 5.020 19.847 5.380 20.167 C 6.106 20.814,6.630 21.236,7.044 21.508 C 9.471 23.103,12.525 23.438,15.199 22.402 C 16.498 21.899,17.520 21.216,18.495 20.197 C 19.601 19.043,20.321 17.736,20.719 16.160 C 20.914 15.387,20.976 14.866,20.976 14.000 C 20.976 13.111,20.913 12.600,20.703 11.780 C 19.793 8.239,16.875 5.619,13.260 5.098 C 12.858 5.040,11.577 4.994,11.240 5.025 M11.695 9.057 C 11.466 9.129,11.256 9.299,11.128 9.516 L 11.020 9.700 11.020 12.003 L 11.020 14.306 11.141 14.503 C 11.209 14.613,11.346 14.756,11.452 14.828 C 11.923 15.144,12.554 14.999,12.859 14.503 L 12.980 14.306 12.980 12.003 L 12.980 9.700 12.872 9.516 C 12.628 9.101,12.150 8.915,11.695 9.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const TimerReset = /*@__PURE__*/ forwardRef<ComponentInternals, TimerResetProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    