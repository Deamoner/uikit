
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ScissorsSquareDashedBottomProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-scissors-square-dashed-bottom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 1.043 C 2.380 1.232,1.461 2.048,1.114 3.160 L 1.020 3.460 1.020 12.000 L 1.020 20.540 1.114 20.840 C 1.419 21.818,2.180 22.584,3.137 22.877 C 3.481 22.982,4.040 23.026,4.264 22.965 C 4.498 22.901,4.737 22.714,4.867 22.492 C 4.964 22.327,4.980 22.257,4.980 22.000 C 4.980 21.746,4.963 21.672,4.872 21.516 C 4.758 21.323,4.561 21.149,4.375 21.078 C 4.314 21.055,4.130 21.019,3.966 20.998 C 3.622 20.955,3.387 20.835,3.225 20.623 C 2.985 20.308,3.000 20.888,3.000 12.022 C 3.000 2.889,2.974 3.632,3.303 3.303 C 3.632 2.974,2.892 3.000,12.000 3.000 C 21.108 3.000,20.368 2.974,20.697 3.303 C 21.026 3.632,21.000 2.891,21.000 12.001 C 21.000 20.808,21.013 20.311,20.779 20.618 C 20.613 20.835,20.380 20.954,20.034 20.998 C 19.870 21.019,19.686 21.055,19.625 21.078 C 19.439 21.149,19.242 21.323,19.128 21.516 C 19.037 21.672,19.020 21.746,19.020 22.000 C 19.020 22.257,19.036 22.327,19.133 22.492 C 19.263 22.714,19.502 22.901,19.736 22.965 C 19.960 23.026,20.519 22.982,20.863 22.877 C 21.820 22.584,22.581 21.818,22.886 20.840 L 22.980 20.540 22.980 12.000 L 22.980 3.460 22.886 3.160 C 22.581 2.182,21.832 1.428,20.861 1.121 L 20.540 1.020 12.120 1.014 C 7.489 1.011,3.609 1.024,3.499 1.043 M7.499 5.040 C 6.363 5.246,5.460 6.049,5.114 7.160 C 4.979 7.594,4.979 8.406,5.114 8.840 C 5.421 9.826,6.173 10.578,7.160 10.886 C 7.417 10.966,7.541 10.980,8.020 10.978 C 8.541 10.976,8.605 10.967,8.940 10.851 L 9.300 10.726 9.940 11.363 L 10.580 12.000 9.940 12.638 L 9.300 13.275 9.017 13.179 C 7.359 12.615,5.633 13.491,5.114 15.160 C 4.979 15.594,4.979 16.406,5.114 16.840 C 5.421 17.826,6.174 18.579,7.160 18.886 C 7.594 19.021,8.406 19.021,8.840 18.886 C 9.826 18.579,10.578 17.827,10.886 16.840 C 10.966 16.583,10.980 16.459,10.978 15.980 C 10.976 15.459,10.967 15.395,10.851 15.060 L 10.726 14.700 14.779 10.640 C 17.008 8.407,18.865 6.517,18.905 6.440 C 18.957 6.341,18.979 6.212,18.979 6.000 C 18.980 5.745,18.964 5.672,18.872 5.516 C 18.618 5.084,18.138 4.906,17.657 5.065 C 17.478 5.125,17.210 5.380,14.730 7.855 L 11.999 10.579 11.362 9.939 L 10.726 9.300 10.851 8.940 C 10.967 8.605,10.976 8.541,10.978 8.020 C 10.980 7.541,10.966 7.417,10.886 7.160 C 10.580 6.178,9.810 5.407,8.861 5.129 C 8.500 5.023,7.832 4.980,7.499 5.040 M8.310 7.061 C 8.688 7.173,9.000 7.598,9.000 8.000 C 9.000 8.220,8.880 8.510,8.722 8.673 C 8.481 8.921,8.347 8.978,8.000 8.979 C 7.745 8.980,7.672 8.964,7.516 8.872 C 6.935 8.530,6.833 7.774,7.304 7.303 C 7.583 7.024,7.916 6.944,8.310 7.061 M14.495 13.857 C 14.266 13.929,14.056 14.099,13.928 14.316 C 13.836 14.472,13.820 14.545,13.821 14.800 C 13.821 15.012,13.843 15.141,13.895 15.240 C 13.996 15.432,17.296 18.739,17.520 18.873 C 17.672 18.964,17.746 18.980,18.000 18.980 C 18.257 18.980,18.327 18.964,18.492 18.867 C 18.968 18.587,19.138 17.968,18.866 17.508 C 18.811 17.416,17.995 16.572,17.053 15.634 C 15.416 14.004,15.330 13.925,15.123 13.864 C 14.866 13.788,14.719 13.787,14.495 13.857 M8.334 15.064 C 8.698 15.188,9.000 15.613,9.000 16.001 C 9.000 16.331,8.784 16.696,8.484 16.872 C 8.328 16.963,8.254 16.980,8.000 16.980 C 7.746 16.980,7.672 16.963,7.516 16.872 C 6.937 16.531,6.833 15.774,7.301 15.306 C 7.587 15.019,7.952 14.934,8.334 15.064 M7.695 21.057 C 7.466 21.129,7.256 21.299,7.128 21.516 C 7.037 21.672,7.020 21.746,7.020 22.000 C 7.020 22.256,7.036 22.328,7.131 22.489 C 7.256 22.702,7.449 22.864,7.670 22.943 C 7.885 23.020,10.115 23.020,10.330 22.943 C 10.551 22.864,10.744 22.702,10.869 22.489 C 10.964 22.328,10.980 22.256,10.980 22.000 C 10.980 21.746,10.963 21.672,10.872 21.516 C 10.740 21.293,10.533 21.128,10.290 21.055 C 10.039 20.979,7.937 20.981,7.695 21.057 M13.695 21.057 C 13.466 21.129,13.256 21.299,13.128 21.516 C 13.037 21.672,13.020 21.746,13.020 22.000 C 13.020 22.256,13.036 22.328,13.131 22.489 C 13.256 22.702,13.449 22.864,13.670 22.943 C 13.885 23.020,16.115 23.020,16.330 22.943 C 16.551 22.864,16.744 22.702,16.869 22.489 C 16.964 22.328,16.980 22.256,16.980 22.000 C 16.980 21.746,16.963 21.672,16.872 21.516 C 16.740 21.293,16.533 21.128,16.290 21.055 C 16.039 20.979,13.937 20.981,13.695 21.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ScissorsSquareDashedBottom = /*@__PURE__*/ forwardRef<ComponentInternals, ScissorsSquareDashedBottomProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    