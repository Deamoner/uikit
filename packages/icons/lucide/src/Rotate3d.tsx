
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Rotate3dProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-rotate-3d" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.460 1.042 C 10.058 1.259,8.712 2.377,7.776 4.100 C 7.405 4.783,7.016 5.714,6.803 6.429 L 6.717 6.717 6.429 6.803 C 5.612 7.046,4.456 7.551,3.772 7.965 C 2.980 8.443,2.188 9.148,1.749 9.764 C 1.494 10.122,1.268 10.586,1.136 11.020 C 1.036 11.346,1.026 11.438,1.026 12.000 C 1.026 12.562,1.036 12.654,1.136 12.980 C 1.644 14.651,3.216 16.020,5.680 16.939 C 5.933 17.034,6.270 17.150,6.429 17.197 L 6.717 17.283 6.803 17.571 C 6.927 17.988,7.205 18.721,7.406 19.160 C 8.319 21.155,9.569 22.436,11.020 22.860 C 11.949 23.132,13.244 22.958,13.703 22.499 C 14.179 22.023,14.054 21.221,13.457 20.923 C 13.173 20.781,12.960 20.774,12.542 20.896 C 12.113 21.020,11.893 21.026,11.554 20.921 C 10.914 20.724,10.318 20.196,9.767 19.340 C 9.594 19.070,9.124 18.145,9.043 17.913 C 8.997 17.781,9.016 17.777,9.440 17.840 C 9.990 17.922,11.254 18.000,12.020 17.999 C 13.571 17.998,15.089 17.824,16.530 17.482 C 16.788 17.421,17.000 17.374,17.000 17.379 C 17.000 17.383,16.811 17.780,16.580 18.261 C 16.188 19.077,16.160 19.152,16.160 19.380 C 16.160 19.947,16.588 20.371,17.160 20.372 C 17.437 20.372,17.716 20.245,17.891 20.038 C 17.962 19.955,18.461 18.981,18.999 17.874 C 19.929 15.964,19.979 15.848,19.993 15.601 C 20.005 15.376,19.991 15.311,19.893 15.124 C 19.831 15.006,19.717 14.859,19.640 14.799 C 19.563 14.739,18.600 14.252,17.500 13.717 C 15.681 12.833,15.478 12.743,15.257 12.728 C 14.804 12.697,14.357 13.001,14.240 13.421 C 14.129 13.817,14.286 14.298,14.592 14.499 C 14.673 14.552,15.124 14.786,15.594 15.018 C 16.064 15.250,16.424 15.448,16.394 15.459 C 16.292 15.496,15.659 15.634,15.220 15.715 C 13.419 16.049,11.308 16.089,9.440 15.823 C 8.995 15.760,8.397 15.651,8.375 15.628 C 8.348 15.601,8.237 14.964,8.161 14.397 C 8.028 13.405,7.980 12.136,8.035 11.093 C 8.082 10.204,8.179 9.336,8.300 8.703 C 8.334 8.528,8.367 8.380,8.373 8.373 C 8.380 8.367,8.528 8.334,8.703 8.300 C 9.780 8.093,11.422 7.974,12.600 8.016 C 14.951 8.102,16.857 8.522,18.500 9.316 C 19.707 9.899,20.398 10.485,20.824 11.287 C 21.033 11.681,21.196 11.844,21.475 11.939 C 21.997 12.117,22.568 11.838,22.739 11.322 C 22.838 11.025,22.805 10.793,22.605 10.375 C 21.888 8.883,20.076 7.593,17.578 6.799 L 17.296 6.710 17.086 6.084 C 16.543 4.467,15.885 3.330,14.940 2.376 C 14.252 1.682,13.651 1.312,12.899 1.120 C 12.546 1.030,11.799 0.989,11.460 1.042 M12.328 3.044 C 13.219 3.229,14.129 4.222,14.821 5.763 C 14.922 5.986,14.996 6.178,14.986 6.188 C 14.976 6.197,14.726 6.178,14.431 6.143 C 13.375 6.021,12.194 5.982,11.105 6.035 C 10.552 6.061,9.893 6.109,9.640 6.141 C 8.988 6.224,8.996 6.224,9.043 6.087 C 9.124 5.855,9.594 4.930,9.767 4.660 C 10.436 3.619,11.226 3.030,11.988 3.004 C 12.058 3.002,12.211 3.020,12.328 3.044 M6.145 9.588 C 6.042 10.463,6.000 11.156,6.000 12.000 C 6.000 12.844,6.042 13.537,6.145 14.412 C 6.181 14.715,6.201 14.972,6.191 14.983 C 6.180 14.993,5.966 14.910,5.716 14.797 C 3.879 13.972,2.850 12.804,3.035 11.754 C 3.182 10.920,3.994 10.069,5.249 9.435 C 5.675 9.219,6.174 9.001,6.194 9.021 C 6.203 9.029,6.181 9.285,6.145 9.588 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Rotate3d = /*@__PURE__*/ forwardRef<ComponentInternals, Rotate3dProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    