
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CloudCogProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-cloud-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.380 2.040 C 7.182 2.126,6.104 2.461,5.009 3.088 C 3.327 4.051,2.099 5.539,1.449 7.401 C 0.820 9.204,0.860 11.136,1.566 12.953 C 1.940 13.916,2.463 14.728,3.209 15.505 C 3.674 15.988,3.843 16.088,4.197 16.088 C 4.716 16.088,5.126 15.720,5.188 15.198 C 5.228 14.855,5.148 14.677,4.768 14.267 C 4.248 13.706,3.945 13.274,3.640 12.660 C 2.754 10.873,2.799 8.864,3.767 7.096 C 4.472 5.807,5.711 4.787,7.160 4.304 C 7.751 4.106,8.261 4.030,9.000 4.029 C 10.623 4.025,12.005 4.586,13.181 5.726 C 13.942 6.464,14.323 7.085,14.779 8.334 C 14.866 8.574,15.040 8.777,15.256 8.892 C 15.412 8.975,15.485 8.981,16.720 9.004 C 17.883 9.025,18.054 9.037,18.340 9.115 C 19.645 9.469,20.652 10.571,20.883 11.898 C 20.960 12.344,20.912 13.110,20.781 13.520 C 20.554 14.228,20.184 14.769,19.601 15.245 C 19.176 15.592,19.044 15.781,19.012 16.092 C 18.939 16.798,19.600 17.350,20.289 17.158 C 20.601 17.072,21.436 16.342,21.843 15.801 C 22.622 14.764,23.052 13.270,22.924 12.046 C 22.720 10.097,21.652 8.503,19.963 7.625 C 19.099 7.176,18.507 7.042,17.253 7.011 L 16.405 6.990 16.357 6.865 C 16.272 6.648,15.964 6.048,15.794 5.770 C 15.060 4.570,13.836 3.474,12.500 2.819 C 11.596 2.375,10.702 2.134,9.628 2.043 C 9.078 1.997,8.993 1.997,8.380 2.040 M10.000 12.384 C 9.675 12.524,9.401 12.935,9.400 13.283 C 9.400 13.383,9.429 13.550,9.464 13.654 L 9.528 13.842 9.250 14.111 C 9.097 14.259,8.918 14.448,8.852 14.532 L 8.732 14.684 8.544 14.637 C 8.076 14.519,7.565 14.774,7.376 15.220 C 7.292 15.419,7.289 15.774,7.369 15.963 C 7.453 16.161,7.663 16.390,7.846 16.483 L 8.000 16.562 8.000 16.951 C 8.001 17.165,8.011 17.404,8.024 17.482 C 8.047 17.618,8.040 17.628,7.883 17.699 C 7.284 17.969,7.116 18.764,7.555 19.252 C 7.838 19.565,8.252 19.673,8.654 19.536 L 8.842 19.472 9.111 19.750 C 9.259 19.903,9.449 20.082,9.533 20.149 C 9.683 20.268,9.685 20.274,9.643 20.425 C 9.510 20.907,9.762 21.430,10.220 21.624 C 10.418 21.707,10.771 21.707,10.969 21.623 C 11.171 21.537,11.389 21.339,11.483 21.154 L 11.562 21.000 11.951 21.000 C 12.165 20.999,12.404 20.989,12.482 20.976 C 12.618 20.953,12.628 20.960,12.699 21.117 C 12.739 21.208,12.848 21.351,12.940 21.436 C 13.437 21.894,14.213 21.728,14.506 21.100 C 14.615 20.866,14.624 20.656,14.538 20.365 L 14.475 20.155 14.751 19.888 C 14.903 19.740,15.082 19.551,15.149 19.467 C 15.268 19.317,15.274 19.315,15.425 19.357 C 15.906 19.490,16.429 19.239,16.624 18.780 C 16.708 18.581,16.711 18.226,16.631 18.037 C 16.547 17.839,16.337 17.610,16.154 17.517 L 16.000 17.438 16.000 17.049 C 15.999 16.835,15.989 16.596,15.976 16.518 C 15.953 16.383,15.960 16.372,16.112 16.304 C 16.463 16.145,16.692 15.787,16.690 15.399 C 16.686 14.716,16.056 14.262,15.384 14.457 L 15.154 14.524 14.887 14.249 C 14.740 14.097,14.551 13.920,14.466 13.855 C 14.314 13.738,14.312 13.734,14.356 13.578 C 14.459 13.207,14.346 12.816,14.065 12.570 C 13.861 12.391,13.671 12.320,13.395 12.320 C 13.013 12.320,12.712 12.503,12.503 12.861 L 12.420 13.005 11.894 13.018 L 11.368 13.031 11.297 12.874 C 11.215 12.692,10.969 12.457,10.777 12.376 C 10.601 12.303,10.177 12.307,10.000 12.384 M12.408 15.044 C 12.734 15.112,13.096 15.302,13.352 15.539 C 13.585 15.755,13.612 15.796,13.835 16.284 C 14.141 16.949,13.990 17.781,13.461 18.352 C 13.343 18.480,13.186 18.613,13.113 18.648 C 12.372 19.006,12.460 18.980,11.982 18.979 C 11.573 18.978,11.517 18.968,11.233 18.846 C 11.022 18.756,10.847 18.642,10.672 18.482 C 10.416 18.248,10.391 18.210,10.160 17.707 C 9.938 17.225,9.955 16.659,10.205 16.130 C 10.340 15.846,10.689 15.448,10.887 15.351 C 11.248 15.175,11.506 15.064,11.617 15.038 C 11.807 14.992,12.174 14.995,12.408 15.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CloudCog = /*@__PURE__*/ forwardRef<ComponentInternals, CloudCogProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    