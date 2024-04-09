
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BirdProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-bird" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.380 2.027 C 14.165 2.179,12.954 2.840,12.170 3.780 C 11.912 4.090,1.208 19.368,1.101 19.580 C 1.042 19.696,1.020 19.818,1.020 20.023 C 1.020 20.268,1.036 20.333,1.141 20.503 C 1.363 20.863,1.757 21.045,2.179 20.982 C 2.524 20.931,2.684 20.773,3.330 19.850 L 3.925 19.000 6.460 19.000 L 8.995 19.000 9.008 20.153 L 9.020 21.307 9.141 21.503 C 9.543 22.156,10.457 22.156,10.859 21.503 L 10.980 21.307 10.992 20.153 L 11.005 19.000 11.732 19.000 C 12.133 19.000,12.580 18.988,12.728 18.974 L 12.995 18.949 13.008 20.128 L 13.020 21.306 13.141 21.503 C 13.543 22.156,14.457 22.156,14.859 21.503 L 14.980 21.306 14.992 19.900 L 15.004 18.494 15.332 18.362 C 18.416 17.117,20.554 14.314,20.941 11.008 C 20.976 10.709,21.000 10.146,21.000 9.639 L 21.000 8.777 21.550 8.643 C 22.382 8.439,22.472 8.407,22.645 8.250 C 23.138 7.805,23.106 7.103,22.575 6.698 C 22.445 6.599,22.282 6.541,21.815 6.424 C 21.488 6.343,21.155 6.259,21.075 6.238 C 20.943 6.203,20.929 6.185,20.907 6.025 C 20.894 5.929,20.826 5.672,20.757 5.455 C 20.181 3.653,18.578 2.304,16.703 2.043 C 16.414 2.003,15.648 1.993,15.380 2.027 M16.728 4.096 C 17.611 4.320,18.275 4.851,18.677 5.654 C 18.982 6.264,18.980 6.242,18.980 8.560 C 18.980 10.707,18.965 10.960,18.795 11.660 C 18.190 14.150,16.200 16.159,13.725 16.777 C 13.234 16.900,12.868 16.955,12.330 16.985 L 11.900 17.010 12.083 16.815 C 12.593 16.272,12.970 15.720,13.300 15.031 C 14.034 13.497,14.194 11.838,13.761 10.219 C 13.483 9.176,13.065 8.357,12.391 7.534 L 12.156 7.249 12.907 6.174 C 13.372 5.509,13.758 5.001,13.921 4.840 C 14.653 4.117,15.709 3.838,16.728 4.096 M15.695 6.055 C 15.464 6.130,15.255 6.300,15.128 6.516 C 15.037 6.672,15.020 6.746,15.020 7.000 C 15.020 7.257,15.036 7.327,15.133 7.492 C 15.651 8.374,16.998 8.018,16.998 7.000 C 16.998 6.623,16.792 6.281,16.463 6.112 C 16.265 6.010,15.911 5.984,15.695 6.055 M11.481 9.820 C 11.898 10.673,12.061 11.558,11.969 12.470 C 11.904 13.105,11.762 13.605,11.480 14.185 C 10.796 15.591,9.604 16.523,8.000 16.907 C 7.807 16.953,7.429 16.974,6.529 16.988 L 5.319 17.008 8.045 13.114 C 9.544 10.972,10.815 9.160,10.870 9.087 L 10.969 8.953 11.108 9.147 C 11.184 9.253,11.352 9.556,11.481 9.820 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Bird = /*@__PURE__*/ forwardRef<ComponentInternals, BirdProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    