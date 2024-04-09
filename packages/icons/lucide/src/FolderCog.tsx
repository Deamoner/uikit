
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FolderCogProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folder-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.042 C 2.376 2.236,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 11.500 L 1.020 18.540 1.114 18.840 C 1.418 19.816,2.150 20.554,3.140 20.886 L 3.420 20.979 6.940 20.991 C 10.870 21.004,10.645 21.019,10.973 20.724 C 11.181 20.536,11.288 20.292,11.288 20.003 C 11.288 19.615,11.094 19.298,10.740 19.106 C 10.580 19.020,10.572 19.020,7.140 19.000 L 3.700 18.980 3.516 18.872 C 3.303 18.747,3.141 18.550,3.058 18.316 C 2.968 18.060,2.971 4.993,3.061 4.690 C 3.144 4.411,3.411 4.144,3.690 4.061 C 3.979 3.975,7.928 3.970,8.211 4.055 C 8.507 4.144,8.610 4.247,9.046 4.890 C 9.684 5.829,9.891 6.093,10.166 6.316 C 10.497 6.583,10.975 6.817,11.400 6.918 C 11.730 6.997,11.861 6.999,15.923 7.000 C 20.649 7.000,20.376 6.983,20.697 7.303 C 20.998 7.604,21.000 7.623,21.000 9.697 L 21.001 11.500 21.095 11.700 C 21.276 12.082,21.595 12.288,22.003 12.288 C 22.292 12.288,22.536 12.181,22.724 11.973 C 23.011 11.655,23.006 11.696,22.991 9.438 C 22.978 7.454,22.976 7.415,22.885 7.140 C 22.561 6.162,21.820 5.424,20.861 5.122 L 20.540 5.021 16.160 5.000 L 11.780 4.980 11.613 4.891 C 11.409 4.781,11.285 4.629,10.759 3.840 C 10.204 3.007,9.805 2.605,9.278 2.346 C 8.596 2.011,8.723 2.024,6.060 2.015 C 4.762 2.011,3.609 2.023,3.499 2.042 M16.000 13.384 C 15.675 13.524,15.401 13.935,15.400 14.283 C 15.400 14.383,15.429 14.550,15.464 14.654 L 15.528 14.842 15.250 15.111 C 15.097 15.259,14.918 15.448,14.852 15.532 L 14.732 15.684 14.544 15.637 C 14.076 15.519,13.565 15.774,13.376 16.220 C 13.292 16.419,13.289 16.774,13.369 16.963 C 13.453 17.161,13.663 17.390,13.846 17.483 L 14.000 17.562 14.000 17.951 C 14.001 18.165,14.011 18.404,14.024 18.482 C 14.047 18.618,14.040 18.628,13.883 18.699 C 13.284 18.969,13.116 19.764,13.555 20.252 C 13.838 20.565,14.252 20.673,14.654 20.536 L 14.842 20.472 15.111 20.750 C 15.259 20.903,15.449 21.082,15.533 21.149 C 15.683 21.268,15.685 21.274,15.643 21.425 C 15.510 21.907,15.762 22.430,16.220 22.624 C 16.418 22.707,16.771 22.707,16.969 22.623 C 17.171 22.537,17.389 22.339,17.483 22.154 L 17.562 22.000 17.951 22.000 C 18.165 21.999,18.404 21.989,18.482 21.976 C 18.618 21.953,18.628 21.960,18.699 22.117 C 18.739 22.208,18.848 22.351,18.940 22.436 C 19.437 22.894,20.213 22.728,20.506 22.100 C 20.615 21.866,20.624 21.656,20.538 21.365 L 20.475 21.155 20.751 20.888 C 20.903 20.740,21.082 20.551,21.149 20.467 C 21.268 20.317,21.274 20.315,21.425 20.357 C 21.906 20.490,22.429 20.239,22.624 19.780 C 22.708 19.581,22.711 19.226,22.631 19.037 C 22.547 18.839,22.337 18.610,22.154 18.517 L 22.000 18.438 22.000 18.049 C 21.999 17.835,21.989 17.596,21.976 17.518 C 21.953 17.383,21.960 17.372,22.112 17.304 C 22.463 17.145,22.692 16.787,22.690 16.399 C 22.686 15.716,22.056 15.262,21.384 15.457 L 21.154 15.524 20.887 15.249 C 20.740 15.097,20.551 14.920,20.466 14.855 C 20.314 14.738,20.312 14.734,20.356 14.578 C 20.459 14.207,20.346 13.816,20.065 13.570 C 19.861 13.391,19.671 13.320,19.395 13.320 C 19.013 13.320,18.712 13.503,18.503 13.861 L 18.420 14.005 17.894 14.018 L 17.368 14.031 17.297 13.874 C 17.215 13.692,16.969 13.457,16.777 13.376 C 16.601 13.303,16.177 13.307,16.000 13.384 M18.408 16.044 C 18.734 16.112,19.096 16.302,19.352 16.539 C 19.585 16.755,19.612 16.796,19.835 17.284 C 20.141 17.949,19.990 18.781,19.461 19.352 C 19.343 19.480,19.186 19.613,19.113 19.648 C 18.372 20.006,18.460 19.980,17.982 19.979 C 17.573 19.978,17.517 19.968,17.233 19.846 C 17.022 19.756,16.847 19.642,16.672 19.482 C 16.416 19.248,16.391 19.210,16.160 18.707 C 15.938 18.225,15.955 17.659,16.205 17.130 C 16.340 16.846,16.689 16.448,16.887 16.351 C 17.248 16.175,17.506 16.064,17.617 16.038 C 17.807 15.992,18.174 15.995,18.408 16.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FolderCog = /*@__PURE__*/ forwardRef<ComponentInternals, FolderCogProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    