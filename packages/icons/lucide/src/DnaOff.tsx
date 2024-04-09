
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DnaOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-dna-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.036 1.672,1.020 1.745,1.021 2.000 C 1.021 2.212,1.043 2.341,1.095 2.440 C 1.135 2.517,3.067 4.481,5.389 6.805 L 9.610 11.031 9.315 11.057 C 7.650 11.204,6.763 11.358,5.820 11.667 C 4.331 12.154,3.164 12.785,1.885 13.793 C 1.338 14.225,1.141 14.435,1.061 14.676 C 0.830 15.371,1.378 16.063,2.100 15.989 C 2.359 15.962,2.480 15.901,2.788 15.644 L 3.027 15.444 3.184 15.605 C 3.405 15.834,3.641 15.962,3.888 15.987 C 4.295 16.029,4.660 15.844,4.867 15.492 C 4.964 15.327,4.980 15.257,4.980 14.996 C 4.980 14.724,4.967 14.672,4.850 14.484 L 4.720 14.275 5.110 14.093 C 5.325 13.993,5.660 13.849,5.856 13.773 L 6.212 13.634 6.536 13.951 C 6.943 14.349,7.054 14.424,7.301 14.469 C 7.750 14.550,8.186 14.339,8.377 13.949 C 8.484 13.731,8.520 13.430,8.462 13.245 C 8.441 13.181,8.456 13.158,8.528 13.142 C 8.724 13.097,9.622 13.042,10.573 13.015 L 11.567 12.987 16.493 17.910 C 19.203 20.617,21.483 22.865,21.560 22.905 C 21.659 22.957,21.788 22.979,22.000 22.979 C 22.258 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M14.699 1.053 C 14.439 1.139,14.335 1.228,13.940 1.706 C 12.871 2.996,12.194 4.204,11.702 5.701 C 11.475 6.392,11.458 6.504,11.541 6.789 C 11.604 7.008,11.651 7.064,12.474 7.893 C 12.950 8.374,13.421 8.815,13.520 8.873 C 13.672 8.963,13.747 8.980,14.000 8.980 C 14.257 8.980,14.327 8.964,14.492 8.867 C 14.714 8.737,14.901 8.498,14.965 8.264 C 15.019 8.061,14.989 7.733,14.898 7.555 C 14.861 7.481,14.560 7.147,14.230 6.814 L 13.630 6.207 13.741 5.914 C 13.802 5.752,13.949 5.414,14.067 5.162 L 14.282 4.704 15.351 5.768 C 15.939 6.352,16.483 6.864,16.560 6.905 C 16.659 6.957,16.787 6.979,17.000 6.979 C 17.258 6.980,17.327 6.964,17.492 6.867 C 17.968 6.587,18.139 5.967,17.865 5.508 C 17.810 5.416,17.243 4.819,16.605 4.183 L 15.445 3.026 15.645 2.787 C 15.901 2.480,15.962 2.359,15.988 2.101 C 16.030 1.700,15.802 1.287,15.436 1.098 C 15.265 1.010,14.899 0.988,14.699 1.053 M19.670 8.061 C 19.448 8.142,19.250 8.309,19.128 8.516 C 19.036 8.672,19.020 8.746,19.020 9.004 C 19.020 9.276,19.033 9.328,19.149 9.514 L 19.277 9.721 18.969 9.875 C 18.799 9.960,18.466 10.107,18.229 10.201 L 17.797 10.372 17.445 10.027 C 17.034 9.625,16.842 9.522,16.498 9.521 C 15.700 9.518,15.229 10.406,15.681 11.060 C 15.742 11.148,16.059 11.483,16.386 11.804 C 17.024 12.432,17.120 12.491,17.498 12.492 C 17.978 12.494,19.565 11.872,20.540 11.300 C 21.532 10.718,22.727 9.777,22.882 9.455 C 23.195 8.809,22.809 8.099,22.099 8.015 C 21.801 7.980,21.596 8.054,21.271 8.317 L 20.982 8.550 20.747 8.337 C 20.397 8.021,20.033 7.927,19.670 8.061 M9.670 15.061 C 9.448 15.142,9.250 15.309,9.128 15.516 C 9.036 15.672,9.020 15.745,9.021 16.000 C 9.021 16.214,9.043 16.340,9.096 16.440 C 9.136 16.517,9.438 16.851,9.766 17.183 L 10.363 17.786 10.256 18.083 C 10.198 18.246,10.053 18.586,9.934 18.837 L 9.719 19.294 8.629 18.213 C 7.678 17.269,7.515 17.124,7.343 17.066 C 6.864 16.905,6.382 17.084,6.128 17.516 C 6.037 17.672,6.020 17.746,6.020 18.000 C 6.020 18.254,6.036 18.328,6.127 18.480 C 6.186 18.579,6.757 19.181,7.395 19.817 L 8.555 20.974 8.355 21.213 C 8.099 21.520,8.038 21.641,8.011 21.900 C 7.971 22.291,8.164 22.665,8.511 22.869 C 8.767 23.019,9.166 23.026,9.451 22.886 C 9.778 22.725,10.716 21.535,11.300 20.540 C 11.878 19.556,12.491 17.986,12.496 17.480 C 12.499 17.107,12.409 16.983,11.430 16.014 C 10.665 15.257,10.512 15.124,10.343 15.066 C 10.108 14.987,9.875 14.985,9.670 15.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const DnaOff = /*@__PURE__*/ forwardRef<ComponentInternals, DnaOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    