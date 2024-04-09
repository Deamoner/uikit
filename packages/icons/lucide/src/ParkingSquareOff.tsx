
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ParkingSquareOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-parking-square-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.037 1.672,1.020 1.746,1.020 2.000 C 1.020 2.254,1.036 2.327,1.127 2.480 C 1.264 2.709,21.367 22.805,21.560 22.905 C 21.659 22.957,21.788 22.979,22.000 22.979 C 22.258 22.980,22.327 22.964,22.492 22.867 C 22.714 22.737,22.901 22.498,22.965 22.264 C 23.019 22.061,22.989 21.733,22.898 21.555 C 22.861 21.481,22.581 21.167,22.276 20.859 L 21.721 20.298 21.798 20.095 C 22.011 19.535,22.003 19.863,21.991 11.840 L 21.980 4.420 21.886 4.140 C 21.556 3.158,20.821 2.425,19.861 2.121 L 19.540 2.020 12.182 2.009 C 4.240 1.998,4.436 1.993,3.928 2.204 L 3.719 2.291 3.129 1.713 C 2.646 1.239,2.503 1.122,2.342 1.067 C 2.109 0.987,1.876 0.985,1.670 1.061 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.728,20.000 11.737 L 20.000 18.580 17.462 16.042 L 14.924 13.504 15.092 13.406 C 15.184 13.352,15.384 13.207,15.536 13.084 C 16.656 12.179,17.207 10.649,16.921 9.243 C 16.628 7.806,15.637 6.680,14.245 6.204 C 13.715 6.023,13.368 6.000,11.060 6.000 C 9.642 6.000,8.845 6.015,8.740 6.044 C 8.513 6.105,8.284 6.272,8.160 6.467 L 8.054 6.634 6.737 5.317 L 5.420 4.000 12.263 4.000 C 18.272 4.000,19.130 4.007,19.310 4.061 M2.580 7.795 C 2.377 7.887,2.151 8.137,2.064 8.364 C 2.003 8.526,1.998 8.980,2.009 14.060 L 2.020 19.580 2.114 19.860 C 2.443 20.840,3.160 21.557,4.140 21.886 L 4.420 21.980 9.940 21.991 C 16.101 22.004,15.640 22.024,15.973 21.724 C 16.181 21.536,16.288 21.292,16.288 21.003 C 16.288 20.615,16.094 20.298,15.740 20.106 L 15.580 20.020 10.140 20.000 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.988 19.312,4.000 19.626,4.000 13.825 L 3.999 8.500 3.905 8.300 C 3.793 8.065,3.599 7.869,3.391 7.782 C 3.188 7.697,2.780 7.703,2.580 7.795 M13.523 8.073 C 14.490 8.326,15.121 9.304,14.967 10.310 C 14.853 11.054,14.286 11.708,13.567 11.923 L 13.395 11.974 11.697 10.277 L 10.000 8.580 10.000 8.290 L 10.000 8.000 11.630 8.002 C 13.037 8.004,13.296 8.014,13.523 8.073 M8.580 13.795 C 8.377 13.887,8.151 14.137,8.064 14.365 C 8.004 14.521,7.997 14.704,8.008 15.924 L 8.020 17.306 8.141 17.503 C 8.543 18.156,9.457 18.156,9.859 17.503 L 9.980 17.306 9.992 15.924 C 10.005 14.374,10.000 14.333,9.724 14.028 C 9.528 13.809,9.320 13.722,9.000 13.722 C 8.834 13.722,8.682 13.748,8.580 13.795 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ParkingSquareOff = /*@__PURE__*/ forwardRef<ComponentInternals, ParkingSquareOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    