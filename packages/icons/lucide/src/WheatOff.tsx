
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type WheatOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-wheat-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.037 1.672,1.020 1.746,1.020 2.000 C 1.020 2.254,1.036 2.327,1.127 2.480 C 1.188 2.581,2.413 3.837,3.913 5.335 L 6.591 8.011 6.377 8.275 C 6.110 8.604,5.753 9.310,5.625 9.760 C 5.572 9.947,5.513 10.099,5.494 10.099 C 5.475 10.098,5.356 10.073,5.230 10.042 C 4.913 9.967,4.628 10.031,4.370 10.238 C 4.067 10.480,2.555 12.033,2.329 12.334 C 2.215 12.485,2.033 12.791,1.923 13.014 C 1.293 14.293,1.293 15.707,1.923 16.986 C 2.179 17.505,2.414 17.814,3.056 18.472 L 3.575 19.003 2.372 20.212 C 1.710 20.876,1.138 21.481,1.101 21.555 C 0.872 22.009,1.056 22.601,1.508 22.867 C 1.673 22.964,1.742 22.980,2.000 22.979 C 2.213 22.979,2.341 22.957,2.440 22.905 C 2.517 22.864,3.124 22.290,3.788 21.628 L 4.997 20.425 5.528 20.943 C 5.821 21.228,6.168 21.544,6.300 21.645 C 6.864 22.077,7.615 22.387,8.365 22.497 C 8.898 22.576,9.102 22.576,9.635 22.497 C 10.383 22.387,11.130 22.080,11.700 21.647 C 12.048 21.382,13.750 19.690,13.866 19.492 C 13.999 19.267,14.031 18.945,13.945 18.685 C 13.863 18.434,13.863 18.440,13.970 18.440 C 14.130 18.439,14.811 18.182,15.160 17.991 C 15.347 17.889,15.610 17.716,15.745 17.607 L 15.989 17.409 18.665 20.087 C 20.163 21.587,21.419 22.812,21.520 22.873 C 21.673 22.964,21.746 22.980,22.000 22.980 C 22.257 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M19.400 1.044 C 18.572 1.138,17.797 1.443,17.068 1.963 C 16.449 2.404,15.822 3.141,15.533 3.768 L 15.426 4.001 14.483 3.067 C 13.668 2.260,13.513 2.124,13.343 2.066 C 13.094 1.983,12.907 1.982,12.657 2.066 C 12.485 2.123,12.335 2.256,11.475 3.116 C 10.489 4.101,10.252 4.377,10.036 4.788 C 9.688 5.449,10.145 6.234,10.889 6.251 C 11.286 6.260,11.527 6.110,11.852 5.651 C 11.973 5.480,12.282 5.133,12.538 4.880 L 13.004 4.420 13.553 4.980 C 14.329 5.772,14.530 6.186,14.532 7.000 C 14.533 7.580,14.389 8.027,14.051 8.491 C 13.764 8.885,13.737 9.292,13.973 9.685 C 14.206 10.077,14.705 10.277,15.124 10.148 C 15.225 10.117,15.419 10.015,15.557 9.922 C 16.041 9.593,16.439 9.469,17.016 9.468 C 17.457 9.468,17.790 9.549,18.175 9.750 C 18.395 9.864,18.588 10.024,19.020 10.447 L 19.580 10.996 19.120 11.462 C 18.867 11.718,18.520 12.027,18.349 12.148 C 17.897 12.468,17.743 12.710,17.743 13.101 C 17.743 13.642,18.196 14.081,18.755 14.079 C 19.012 14.079,19.274 13.964,19.663 13.680 C 19.997 13.436,21.745 11.697,21.873 11.480 C 21.963 11.328,21.980 11.253,21.980 11.000 C 21.980 10.746,21.964 10.672,21.873 10.520 C 21.814 10.421,21.369 9.945,20.884 9.462 L 20.003 8.584 20.357 8.397 C 21.659 7.709,22.586 6.461,22.907 4.960 C 22.970 4.666,22.980 4.421,22.980 3.160 L 22.980 1.700 22.872 1.516 C 22.740 1.293,22.533 1.128,22.290 1.055 C 22.082 0.992,19.931 0.984,19.400 1.044 M20.990 3.770 C 20.973 4.433,20.957 4.584,20.874 4.861 C 20.588 5.810,19.828 6.572,18.860 6.882 C 18.621 6.958,18.464 6.974,17.785 6.990 L 16.990 7.010 17.010 6.235 C 17.027 5.566,17.042 5.416,17.126 5.139 C 17.452 4.057,18.389 3.229,19.499 3.043 C 19.609 3.025,19.995 3.007,20.355 3.005 L 21.009 3.000 20.990 3.770 M10.258 12.148 C 10.127 12.406,10.004 12.557,9.550 13.020 L 9.001 13.580 8.450 13.020 C 7.663 12.221,7.469 11.821,7.469 11.000 C 7.469 10.427,7.612 9.963,7.910 9.566 L 8.011 9.431 9.213 10.633 L 10.416 11.836 10.258 12.148 M5.565 12.990 C 6.336 13.781,6.531 14.186,6.531 15.000 C 6.531 15.820,6.337 16.221,5.551 17.020 L 5.000 17.580 4.449 17.020 C 3.663 16.221,3.469 15.820,3.469 15.000 C 3.469 14.186,3.664 13.781,4.435 12.990 C 4.731 12.688,4.985 12.440,5.000 12.440 C 5.015 12.440,5.269 12.688,5.565 12.990 M13.379 14.799 C 14.728 16.149,14.637 15.993,14.220 16.236 C 13.666 16.559,12.853 16.637,12.220 16.427 C 11.774 16.280,11.498 16.083,10.920 15.500 L 10.420 14.995 10.981 14.448 C 11.425 14.013,11.602 13.869,11.835 13.750 C 11.996 13.668,12.140 13.600,12.154 13.600 C 12.169 13.600,12.720 14.140,13.379 14.799 M9.680 17.547 C 10.141 17.673,10.426 17.865,11.020 18.447 L 11.580 18.996 11.080 19.500 C 10.502 20.083,10.226 20.280,9.780 20.428 C 9.508 20.518,9.391 20.534,9.000 20.534 C 8.155 20.534,7.741 20.328,6.920 19.500 L 6.420 18.996 6.980 18.447 C 7.546 17.892,7.825 17.698,8.260 17.558 C 8.638 17.436,9.259 17.431,9.680 17.547 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const WheatOff = /*@__PURE__*/ forwardRef<ComponentInternals, WheatOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    