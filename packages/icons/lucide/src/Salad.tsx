
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SaladProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-salad" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.500 2.379 C 18.346 2.407,18.112 2.470,17.980 2.519 C 17.848 2.567,17.711 2.616,17.675 2.627 C 17.638 2.638,17.485 2.602,17.335 2.548 C 16.928 2.402,16.505 2.345,16.009 2.372 C 15.289 2.410,14.674 2.644,14.074 3.107 L 13.799 3.320 13.362 3.320 C 12.534 3.320,11.875 3.538,11.240 4.022 C 10.827 4.337,10.447 4.813,10.235 5.282 L 10.148 5.476 10.004 5.414 C 9.146 5.044,8.055 4.909,7.175 5.062 C 5.109 5.421,3.524 6.951,3.095 9.002 C 3.018 9.367,2.995 10.303,3.051 10.741 L 3.082 10.981 2.834 11.028 C 2.530 11.086,2.303 11.241,2.140 11.502 C 2.020 11.694,2.020 11.695,2.022 12.297 C 2.026 13.166,2.150 13.963,2.424 14.868 C 2.913 16.487,3.725 17.845,4.919 19.043 C 5.371 19.496,6.037 20.065,6.267 20.194 C 6.313 20.219,6.297 20.265,6.185 20.433 C 5.855 20.922,5.993 21.548,6.497 21.859 L 6.694 21.980 12.000 21.980 L 17.306 21.980 17.503 21.859 C 18.007 21.548,18.145 20.922,17.815 20.433 C 17.703 20.265,17.687 20.219,17.733 20.194 C 18.161 19.954,19.377 18.807,19.847 18.200 C 21.206 16.443,21.966 14.343,21.977 12.320 C 21.980 11.714,21.978 11.696,21.871 11.514 C 21.810 11.412,21.689 11.275,21.602 11.210 L 21.442 11.093 21.565 10.977 C 21.761 10.791,22.030 10.393,22.182 10.063 C 22.566 9.233,22.599 8.311,22.277 7.445 L 22.197 7.229 22.297 6.965 C 22.462 6.530,22.519 6.213,22.519 5.720 C 22.520 4.541,21.998 3.564,21.003 2.884 C 20.317 2.414,19.357 2.221,18.500 2.379 M19.741 4.466 C 20.005 4.595,20.294 4.891,20.409 5.151 C 20.594 5.568,20.539 6.124,20.274 6.508 C 20.095 6.768,20.032 6.952,20.032 7.211 C 20.032 7.448,20.074 7.559,20.333 8.004 C 20.559 8.393,20.551 8.879,20.310 9.331 C 20.160 9.615,19.979 9.778,19.653 9.926 C 19.205 10.129,18.980 10.403,18.932 10.803 L 18.909 11.000 17.165 11.000 L 15.422 11.000 16.626 9.790 C 17.289 9.125,17.864 8.517,17.905 8.440 C 17.957 8.341,17.979 8.213,17.979 8.000 C 17.980 7.745,17.964 7.672,17.872 7.516 C 17.618 7.084,17.138 6.906,16.657 7.065 C 16.480 7.124,16.264 7.326,14.516 9.069 L 12.571 11.006 11.795 10.993 L 11.018 10.980 10.753 10.850 C 10.445 10.698,10.233 10.480,10.087 10.165 C 9.936 9.840,9.935 9.355,10.085 9.035 C 10.289 8.601,10.606 8.352,11.120 8.222 C 11.761 8.061,12.041 7.642,11.952 6.979 C 11.879 6.433,12.020 6.016,12.389 5.678 C 12.776 5.325,13.230 5.239,13.857 5.399 C 14.368 5.530,14.681 5.417,15.041 4.975 C 15.411 4.521,15.728 4.358,16.237 4.362 C 16.550 4.364,16.690 4.410,17.055 4.630 C 17.512 4.907,17.840 4.897,18.309 4.594 C 18.657 4.367,18.838 4.316,19.210 4.339 C 19.438 4.353,19.578 4.386,19.741 4.466 M8.591 7.064 C 8.761 7.099,8.913 7.135,8.929 7.145 C 8.945 7.155,8.849 7.300,8.717 7.467 C 8.433 7.825,8.195 8.279,8.078 8.687 C 7.904 9.292,7.941 10.193,8.162 10.776 C 8.205 10.888,8.240 10.985,8.240 10.990 C 8.240 10.995,7.550 11.000,6.706 11.000 L 5.173 11.000 5.127 10.847 C 5.042 10.565,4.992 10.062,5.019 9.760 C 5.181 7.939,6.824 6.699,8.591 7.064 M19.920 13.078 C 19.920 13.121,19.883 13.349,19.837 13.586 C 19.600 14.814,18.976 16.116,18.153 17.100 C 17.388 18.015,16.523 18.693,15.471 19.200 C 13.267 20.265,10.733 20.265,8.529 19.200 C 7.477 18.693,6.612 18.015,5.847 17.100 C 5.021 16.113,4.401 14.818,4.163 13.586 C 4.117 13.349,4.080 13.121,4.080 13.078 C 4.080 13.001,4.175 13.000,12.000 13.000 C 19.825 13.000,19.920 13.001,19.920 13.078 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Salad = /*@__PURE__*/ forwardRef<ComponentInternals, SaladProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    