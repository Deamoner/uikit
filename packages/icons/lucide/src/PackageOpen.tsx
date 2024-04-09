
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PackageOpenProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-package-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.246 1.041 C 6.907 1.088,6.651 1.175,6.220 1.389 C 5.427 1.784,2.607 3.263,2.420 3.382 C 1.370 4.051,0.821 5.338,1.058 6.575 C 1.167 7.143,1.470 7.732,1.861 8.132 C 2.030 8.306,2.067 8.363,2.022 8.388 C 1.908 8.452,1.527 8.929,1.395 9.172 C 1.071 9.771,0.982 10.156,1.012 10.838 C 1.035 11.378,1.101 11.645,1.317 12.079 C 1.593 12.637,1.968 13.034,2.586 13.423 L 2.980 13.671 3.002 15.525 C 3.020 17.130,3.033 17.412,3.093 17.618 C 3.331 18.427,3.760 19.024,4.397 19.432 C 4.664 19.603,10.613 22.661,10.925 22.788 C 11.604 23.063,12.396 23.063,13.075 22.788 C 13.387 22.661,19.336 19.603,19.603 19.432 C 20.240 19.024,20.669 18.427,20.907 17.618 C 20.967 17.412,20.980 17.130,20.998 15.525 L 21.020 13.671 21.414 13.423 C 22.182 12.939,22.622 12.391,22.884 11.590 C 22.990 11.266,23.033 10.452,22.961 10.126 C 22.819 9.481,22.569 9.004,22.122 8.524 L 21.959 8.348 22.143 8.167 C 22.572 7.744,22.889 7.097,22.989 6.442 C 23.165 5.292,22.618 4.065,21.645 3.425 C 21.372 3.246,17.871 1.412,17.490 1.249 C 17.110 1.086,16.805 1.027,16.340 1.027 C 15.580 1.027,15.523 1.050,13.430 2.174 C 12.665 2.584,12.022 2.920,12.000 2.920 C 11.978 2.920,11.335 2.584,10.570 2.174 C 8.975 1.317,8.705 1.184,8.398 1.106 C 8.099 1.029,7.557 0.998,7.246 1.041 M8.875 3.536 C 9.394 3.811,9.823 4.050,9.828 4.068 C 9.834 4.085,8.529 4.800,6.929 5.656 L 4.020 7.211 3.769 7.077 C 3.421 6.891,3.276 6.762,3.146 6.523 C 2.911 6.092,2.975 5.599,3.310 5.245 C 3.477 5.070,3.729 4.926,5.390 4.064 C 6.430 3.524,7.339 3.064,7.410 3.042 C 7.706 2.952,7.880 3.011,8.875 3.536 M16.604 3.055 C 16.925 3.155,20.528 5.062,20.693 5.219 C 20.912 5.428,21.011 5.676,21.009 6.010 C 21.007 6.329,20.875 6.650,20.675 6.818 C 20.480 6.982,20.075 7.205,19.995 7.192 C 19.901 7.177,14.162 4.109,14.161 4.074 C 14.160 4.040,15.881 3.125,16.075 3.055 C 16.264 2.988,16.388 2.988,16.604 3.055 M14.974 6.798 C 16.594 7.666,17.920 8.386,17.919 8.398 C 17.917 8.431,12.115 11.698,12.032 11.713 C 11.993 11.720,10.636 10.974,9.016 10.056 C 6.250 8.488,6.077 8.384,6.166 8.335 C 7.097 7.824,11.987 5.210,12.004 5.214 C 12.017 5.217,13.353 5.930,14.974 6.798 M6.985 11.201 C 8.588 12.109,9.914 12.864,9.932 12.880 C 9.961 12.905,8.343 13.837,8.068 13.953 C 7.911 14.019,7.597 14.012,7.419 13.937 C 7.216 13.852,3.577 11.702,3.400 11.563 C 2.924 11.187,2.862 10.415,3.272 9.962 C 3.434 9.783,3.901 9.511,4.005 9.535 C 4.041 9.543,5.382 10.293,6.985 11.201 M20.326 9.666 C 20.780 9.904,21.000 10.243,21.000 10.700 C 21.000 11.012,20.895 11.270,20.683 11.475 C 20.563 11.592,19.858 12.032,18.640 12.751 C 17.617 13.355,16.702 13.883,16.607 13.924 C 16.411 14.010,16.099 14.023,15.932 13.953 C 15.611 13.817,14.044 12.901,14.089 12.875 C 14.880 12.424,20.024 9.521,20.034 9.521 C 20.042 9.520,20.173 9.586,20.326 9.666 M11.000 17.622 L 11.000 20.604 10.030 20.105 C 9.496 19.830,8.250 19.191,7.260 18.684 C 5.703 17.886,5.437 17.737,5.291 17.578 C 5.023 17.287,5.000 17.157,5.000 15.933 C 5.000 15.354,5.009 14.880,5.021 14.880 C 5.033 14.880,5.361 15.068,5.751 15.298 C 6.624 15.813,7.022 15.960,7.620 15.989 C 8.366 16.025,8.759 15.889,10.060 15.147 C 10.544 14.871,10.954 14.644,10.970 14.643 C 10.987 14.641,11.000 15.982,11.000 17.622 M13.995 15.178 C 14.626 15.536,15.069 15.759,15.321 15.846 C 15.676 15.969,15.734 15.977,16.240 15.977 C 16.745 15.977,16.804 15.969,17.160 15.847 C 17.417 15.759,17.770 15.581,18.249 15.298 C 18.639 15.068,18.967 14.880,18.979 14.880 C 18.991 14.880,19.000 15.354,19.000 15.933 C 19.000 17.157,18.977 17.287,18.709 17.578 C 18.563 17.737,18.297 17.886,16.740 18.684 C 15.750 19.191,14.503 19.830,13.970 20.105 L 13.000 20.604 13.000 17.622 C 13.000 15.982,13.011 14.640,13.024 14.640 C 13.036 14.640,13.473 14.882,13.995 15.178 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const PackageOpen = /*@__PURE__*/ forwardRef<ComponentInternals, PackageOpenProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    