
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ThermometerSnowflakeProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-thermometer-snowflake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.499 1.040 C 16.374 1.244,15.488 2.024,15.114 3.140 L 15.020 3.420 15.009 8.720 L 14.998 14.020 14.861 14.114 C 14.655 14.255,14.079 14.867,13.889 15.146 C 12.930 16.559,12.741 18.323,13.379 19.905 C 13.651 20.581,13.988 21.069,14.554 21.607 C 15.272 22.291,16.072 22.712,17.060 22.927 C 17.379 22.996,18.621 22.996,18.940 22.927 C 19.949 22.708,20.738 22.286,21.488 21.566 C 23.231 19.893,23.492 17.181,22.106 15.140 C 21.920 14.866,21.343 14.253,21.139 14.114 L 21.002 14.020 20.991 8.720 L 20.980 3.420 20.886 3.140 C 20.555 2.154,19.800 1.403,18.861 1.129 C 18.500 1.023,17.832 0.980,17.499 1.040 M8.695 3.057 C 8.466 3.129,8.256 3.299,8.128 3.516 L 8.020 3.700 8.008 5.135 L 7.996 6.570 7.268 5.852 C 6.655 5.247,6.509 5.123,6.343 5.067 C 5.865 4.905,5.383 5.083,5.128 5.516 C 5.037 5.672,5.020 5.746,5.020 6.000 C 5.020 6.254,5.036 6.327,5.127 6.480 C 5.186 6.579,5.857 7.281,6.617 8.040 L 8.000 9.420 8.000 10.210 L 8.000 11.000 7.212 11.000 L 6.423 11.000 4.982 9.566 C 3.702 8.293,3.518 8.124,3.343 8.066 C 2.863 7.906,2.382 8.084,2.128 8.516 C 2.036 8.672,2.020 8.745,2.021 9.000 C 2.021 9.213,2.043 9.340,2.096 9.440 C 2.136 9.517,2.486 9.900,2.873 10.290 L 3.577 11.000 2.735 11.000 C 1.812 11.000,1.634 11.029,1.382 11.221 C 1.302 11.282,1.187 11.415,1.128 11.516 C 1.037 11.672,1.020 11.746,1.020 12.000 C 1.020 12.256,1.036 12.328,1.131 12.489 C 1.192 12.592,1.304 12.725,1.381 12.783 C 1.635 12.977,1.753 12.996,2.699 12.998 L 3.577 13.000 2.873 13.710 C 2.486 14.101,2.136 14.483,2.096 14.560 C 2.043 14.660,2.021 14.787,2.021 15.000 C 2.020 15.258,2.036 15.327,2.133 15.492 C 2.413 15.968,3.033 16.139,3.492 15.865 C 3.584 15.810,4.281 15.143,5.040 14.383 L 6.420 13.000 7.210 13.000 L 8.000 13.000 8.000 13.790 L 8.000 14.580 6.617 15.960 C 5.857 16.719,5.186 17.421,5.127 17.520 C 5.036 17.673,5.020 17.746,5.020 18.000 C 5.020 18.257,5.036 18.327,5.133 18.492 C 5.263 18.714,5.502 18.901,5.736 18.965 C 5.939 19.019,6.267 18.989,6.445 18.899 C 6.519 18.861,6.899 18.515,7.288 18.129 L 7.996 17.427 8.008 18.867 L 8.020 20.306 8.141 20.503 C 8.543 21.156,9.457 21.156,9.859 20.503 L 9.980 20.306 9.992 18.830 C 10.001 17.685,10.015 17.362,10.052 17.393 C 10.136 17.462,10.492 17.505,10.695 17.470 C 11.369 17.354,11.715 16.508,11.320 15.943 C 11.257 15.853,10.935 15.510,10.603 15.181 L 10.000 14.581 10.000 13.791 L 10.000 13.000 11.090 12.998 C 12.262 12.996,12.357 12.983,12.619 12.783 C 12.696 12.725,12.808 12.592,12.869 12.489 C 12.964 12.328,12.980 12.256,12.980 12.000 C 12.980 11.746,12.963 11.672,12.872 11.516 C 12.813 11.415,12.698 11.282,12.618 11.221 C 12.356 11.022,12.203 11.000,11.054 11.000 L 10.000 11.000 10.000 10.210 L 10.000 9.420 11.383 8.040 C 12.143 7.281,12.814 6.579,12.873 6.480 C 12.964 6.327,12.980 6.254,12.980 6.000 C 12.980 5.746,12.963 5.672,12.872 5.516 C 12.617 5.083,12.135 4.905,11.657 5.067 C 11.491 5.123,11.345 5.247,10.732 5.852 L 10.004 6.570 9.992 5.135 L 9.980 3.700 9.872 3.516 C 9.628 3.101,9.150 2.915,8.695 3.057 M18.310 3.061 C 18.589 3.144,18.856 3.411,18.939 3.690 C 18.992 3.869,19.000 4.580,19.000 9.317 L 19.001 14.740 19.095 14.940 C 19.201 15.163,19.299 15.262,19.683 15.530 C 19.986 15.742,20.275 16.023,20.448 16.273 C 20.611 16.508,20.859 17.052,20.925 17.320 C 21.004 17.637,20.993 18.434,20.905 18.760 C 20.631 19.770,19.852 20.573,18.840 20.887 C 18.406 21.022,17.594 21.022,17.160 20.887 C 16.148 20.573,15.370 19.772,15.095 18.760 C 15.010 18.448,14.997 17.596,15.073 17.320 C 15.282 16.562,15.698 15.963,16.317 15.530 C 16.675 15.280,16.792 15.168,16.894 14.980 L 16.980 14.820 17.000 9.280 C 17.022 3.071,16.994 3.601,17.322 3.283 C 17.589 3.024,17.928 2.947,18.310 3.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ThermometerSnowflake = /*@__PURE__*/ forwardRef<ComponentInternals, ThermometerSnowflakeProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    