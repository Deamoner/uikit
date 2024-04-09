
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type HeartProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.842 2.041 C 4.203 2.318,1.996 4.160,1.261 6.700 C 1.069 7.362,1.022 7.722,1.024 8.520 C 1.025 9.131,1.041 9.333,1.115 9.680 C 1.398 11.005,1.944 12.059,3.021 13.361 C 3.460 13.891,11.297 21.740,11.520 21.873 C 11.672 21.964,11.746 21.980,12.000 21.980 C 12.254 21.980,12.328 21.964,12.480 21.873 C 12.694 21.746,20.392 14.042,20.866 13.480 C 22.026 12.108,22.592 11.040,22.886 9.671 C 23.002 9.134,23.014 7.977,22.910 7.420 C 22.456 4.984,20.820 3.094,18.500 2.325 C 17.498 1.993,16.303 1.921,15.124 2.123 C 14.107 2.297,13.167 2.729,12.250 3.446 L 12.000 3.641 11.750 3.446 C 10.827 2.724,9.895 2.297,8.856 2.119 C 8.309 2.026,7.343 1.988,6.842 2.041 M8.126 4.042 C 9.262 4.158,10.061 4.554,11.087 5.511 C 11.542 5.935,11.626 5.978,12.000 5.978 C 12.374 5.978,12.458 5.935,12.913 5.511 C 13.505 4.959,14.106 4.544,14.615 4.337 C 15.257 4.075,16.184 3.954,16.943 4.033 C 19.081 4.256,20.733 5.897,20.963 8.028 C 21.107 9.360,20.672 10.551,19.528 11.960 C 19.330 12.203,17.676 13.894,15.594 15.980 L 12.001 19.580 8.479 16.060 C 6.542 14.124,4.804 12.360,4.617 12.140 C 3.885 11.278,3.394 10.445,3.180 9.700 C 2.587 7.638,3.593 5.400,5.537 4.459 C 6.338 4.071,7.140 3.942,8.126 4.042 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Heart = /*@__PURE__*/ forwardRef<ComponentInternals, HeartProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    