
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ClipboardCheckProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-clipboard-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.477 1.073 C 7.806 1.249,7.238 1.823,7.060 2.508 C 7.027 2.634,7.000 2.794,7.000 2.864 L 7.000 2.991 6.230 3.010 C 5.567 3.027,5.416 3.043,5.139 3.126 C 4.181 3.415,3.420 4.179,3.114 5.160 L 3.020 5.460 3.020 13.000 L 3.020 20.540 3.114 20.840 C 3.422 21.827,4.173 22.578,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.827 22.578,20.578 21.827,20.886 20.840 L 20.980 20.540 20.980 13.000 L 20.980 5.460 20.886 5.160 C 20.580 4.179,19.819 3.415,18.861 3.126 C 18.585 3.043,18.433 3.027,17.778 3.010 L 17.017 2.991 16.968 2.687 C 16.942 2.520,16.869 2.275,16.806 2.141 C 16.665 1.839,16.321 1.464,16.017 1.281 C 15.548 0.999,15.636 1.005,12.000 1.005 C 9.047 1.005,8.715 1.011,8.477 1.073 M15.000 4.000 L 15.000 5.000 12.000 5.000 L 9.000 5.000 9.000 4.000 L 9.000 3.000 12.000 3.000 L 15.000 3.000 15.000 4.000 M7.000 5.132 C 7.000 5.323,7.104 5.690,7.225 5.930 C 7.361 6.199,7.801 6.639,8.070 6.775 C 8.522 7.004,8.454 7.000,11.993 7.000 C 15.539 7.000,15.479 7.003,15.937 6.771 C 16.197 6.639,16.639 6.197,16.771 5.937 C 16.888 5.707,17.000 5.309,17.000 5.124 L 17.000 5.000 17.553 5.000 C 18.249 5.000,18.446 5.052,18.697 5.303 C 19.024 5.631,19.000 5.009,19.000 13.001 C 19.000 18.907,18.991 20.138,18.945 20.290 C 18.872 20.533,18.707 20.740,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.986 20.309,5.000 20.795,5.000 13.022 C 5.000 5.005,4.975 5.631,5.304 5.303 C 5.554 5.052,5.727 5.006,6.430 5.003 L 7.000 5.000 7.000 5.132 M14.660 11.066 C 14.476 11.122,14.321 11.265,12.731 12.851 L 11.002 14.575 10.271 13.855 C 9.655 13.247,9.509 13.123,9.343 13.067 C 8.865 12.905,8.383 13.083,8.128 13.516 C 8.036 13.672,8.020 13.745,8.021 14.000 C 8.021 14.213,8.043 14.341,8.095 14.440 C 8.197 14.633,10.297 16.740,10.520 16.873 C 10.673 16.964,10.745 16.980,11.000 16.979 C 11.212 16.979,11.341 16.957,11.440 16.905 C 11.632 16.805,15.739 12.705,15.873 12.480 C 15.964 12.328,15.980 12.254,15.980 12.000 C 15.980 11.746,15.963 11.672,15.872 11.516 C 15.740 11.293,15.533 11.128,15.290 11.055 C 15.062 10.986,14.914 10.989,14.660 11.066 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ClipboardCheck = /*@__PURE__*/ forwardRef<ComponentInternals, ClipboardCheckProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    