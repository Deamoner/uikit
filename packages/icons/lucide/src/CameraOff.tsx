
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CameraOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-camera-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.036 1.672,1.020 1.745,1.021 2.000 C 1.021 2.212,1.043 2.341,1.095 2.440 C 1.135 2.517,1.933 3.347,2.868 4.284 L 4.567 5.989 4.014 6.010 C 3.596 6.027,3.381 6.056,3.139 6.127 C 2.186 6.410,1.420 7.179,1.114 8.160 L 1.020 8.460 1.020 13.500 L 1.020 18.540 1.114 18.840 C 1.418 19.816,2.149 20.554,3.140 20.886 L 3.420 20.980 11.500 20.991 L 19.579 21.001 20.500 21.916 C 21.006 22.419,21.483 22.864,21.560 22.905 C 21.659 22.957,21.787 22.979,22.000 22.979 C 22.258 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M9.240 3.037 C 8.792 3.176,8.512 3.546,8.512 4.000 C 8.512 4.405,8.719 4.724,9.100 4.905 L 9.300 4.999 11.667 5.000 L 14.033 5.000 15.197 6.397 C 16.183 7.580,16.390 7.808,16.551 7.887 C 16.738 7.979,16.757 7.980,18.500 8.000 C 20.474 8.022,20.419 8.014,20.717 8.321 C 21.013 8.627,21.000 8.420,21.000 12.797 L 21.001 16.700 21.095 16.900 C 21.276 17.282,21.595 17.488,22.003 17.488 C 22.292 17.488,22.536 17.381,22.724 17.173 C 23.021 16.843,23.004 17.139,22.991 12.540 L 22.980 8.420 22.886 8.140 C 22.556 7.157,21.814 6.418,20.861 6.124 C 20.550 6.028,20.493 6.024,18.995 6.002 L 17.451 5.980 16.420 4.740 C 15.218 3.294,15.152 3.221,14.940 3.107 C 14.781 3.020,14.767 3.020,12.060 3.013 C 10.564 3.009,9.295 3.020,9.240 3.037 M7.770 9.190 L 8.960 10.380 8.733 10.680 C 8.238 11.336,7.952 12.200,7.955 13.031 C 7.960 14.172,8.341 15.105,9.118 15.882 C 10.140 16.904,11.608 17.295,13.000 16.916 C 13.366 16.816,14.030 16.496,14.296 16.291 C 14.403 16.208,14.521 16.118,14.557 16.091 C 14.614 16.049,14.822 16.242,16.101 17.521 L 17.580 19.001 10.640 18.990 L 3.700 18.980 3.516 18.872 C 3.415 18.813,3.284 18.700,3.225 18.623 C 2.989 18.314,3.000 18.562,3.000 13.522 C 3.000 8.298,2.981 8.625,3.304 8.303 C 3.591 8.015,3.651 8.006,5.220 8.003 L 6.581 8.000 7.770 9.190 M13.107 14.681 C 12.674 15.019,11.923 15.140,11.357 14.963 C 10.118 14.576,9.572 13.128,10.245 12.017 L 10.378 11.798 11.786 13.206 C 13.181 14.601,13.193 14.614,13.107 14.681 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CameraOff = /*@__PURE__*/ forwardRef<ComponentInternals, CameraOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    