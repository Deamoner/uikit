
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type AirplayProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-airplay" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.043 C 2.380 2.232,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 10.000 L 1.020 15.540 1.114 15.840 C 1.419 16.818,2.164 17.569,3.140 17.882 C 3.383 17.960,3.531 17.974,4.260 17.990 C 4.805 18.002,5.158 17.993,5.264 17.964 C 5.497 17.901,5.737 17.714,5.867 17.492 C 5.964 17.327,5.980 17.257,5.980 17.000 C 5.980 16.746,5.963 16.672,5.872 16.516 C 5.760 16.325,5.567 16.154,5.373 16.073 C 5.307 16.045,4.934 16.016,4.480 16.003 C 3.724 15.981,3.694 15.977,3.516 15.872 C 3.415 15.813,3.284 15.700,3.225 15.623 C 2.988 15.312,3.000 15.608,3.000 10.022 C 3.000 4.240,2.980 4.627,3.303 4.303 C 3.632 3.974,2.892 4.000,12.000 4.000 C 21.108 4.000,20.368 3.974,20.697 4.303 C 21.020 4.627,21.000 4.243,21.000 10.001 C 21.000 14.212,20.990 15.139,20.945 15.290 C 20.872 15.533,20.707 15.740,20.484 15.872 C 20.306 15.977,20.276 15.981,19.520 16.003 C 19.066 16.016,18.693 16.045,18.627 16.073 C 18.433 16.154,18.240 16.325,18.128 16.516 C 18.037 16.672,18.020 16.746,18.020 17.000 C 18.020 17.257,18.036 17.327,18.133 17.492 C 18.263 17.714,18.503 17.901,18.736 17.964 C 18.842 17.993,19.195 18.002,19.740 17.990 C 20.469 17.974,20.617 17.960,20.860 17.882 C 21.836 17.569,22.581 16.818,22.886 15.840 L 22.980 15.540 22.980 10.000 L 22.980 4.460 22.886 4.160 C 22.581 3.182,21.832 2.428,20.861 2.121 L 20.540 2.020 12.120 2.014 C 7.489 2.011,3.609 2.024,3.499 2.043 M11.680 14.059 C 11.581 14.091,11.442 14.167,11.372 14.228 C 11.301 14.290,10.091 15.725,8.683 17.417 C 6.588 19.934,6.110 20.530,6.056 20.692 C 5.887 21.201,6.162 21.762,6.670 21.943 C 6.792 21.987,7.774 21.997,11.983 21.998 C 17.787 22.000,17.381 22.021,17.702 21.700 C 18.002 21.400,18.085 20.879,17.887 20.542 C 17.844 20.469,16.647 19.017,15.229 17.315 C 13.271 14.965,12.609 14.197,12.482 14.126 C 12.272 14.008,11.927 13.979,11.680 14.059 M13.442 18.290 L 14.850 19.980 13.425 19.991 C 12.641 19.996,11.359 19.996,10.575 19.991 L 9.150 19.980 10.558 18.290 C 11.333 17.360,11.982 16.600,12.000 16.600 C 12.018 16.600,12.667 17.360,13.442 18.290 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Airplay = /*@__PURE__*/ forwardRef<ComponentInternals, AirplayProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    