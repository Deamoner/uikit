
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LeafProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-leaf" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.700 1.056 C 18.447 1.136,18.384 1.189,17.899 1.745 C 16.384 3.482,15.231 3.982,10.536 4.936 C 8.521 5.345,7.928 5.531,7.075 6.021 C 5.116 7.147,3.763 8.922,3.218 11.079 C 2.883 12.409,2.914 13.928,3.303 15.251 L 3.408 15.607 3.020 15.992 C 1.964 17.037,1.369 18.198,1.099 19.740 C 1.013 20.231,0.978 21.056,1.035 21.264 C 1.099 21.498,1.286 21.737,1.508 21.867 C 1.673 21.964,1.743 21.980,2.003 21.980 C 2.271 21.980,2.329 21.966,2.503 21.859 C 2.744 21.711,2.948 21.420,2.975 21.189 C 2.985 21.096,3.013 20.786,3.036 20.500 C 3.126 19.393,3.469 18.520,4.120 17.737 L 4.340 17.473 4.420 17.583 C 4.861 18.190,5.285 18.654,5.780 19.069 C 7.861 20.813,10.417 21.383,13.280 20.741 C 14.645 20.434,16.148 19.754,17.300 18.919 C 18.058 18.370,18.976 17.502,19.560 16.782 C 20.491 15.635,21.262 14.123,21.641 12.703 C 21.928 11.629,22.020 10.757,21.986 9.460 C 21.928 7.239,21.580 5.484,20.830 3.620 C 20.559 2.947,20.028 1.783,19.865 1.505 C 19.622 1.091,19.157 0.912,18.700 1.056 M18.958 4.324 C 19.491 5.657,19.781 6.868,19.926 8.360 C 20.004 9.160,19.994 10.691,19.908 11.236 C 19.503 13.797,18.016 16.064,15.780 17.530 C 13.900 18.762,11.556 19.271,9.680 18.854 C 8.930 18.688,8.117 18.324,7.495 17.877 C 6.919 17.464,5.985 16.481,6.057 16.365 C 6.094 16.305,6.764 16.099,7.380 15.958 C 8.597 15.681,9.545 15.333,10.720 14.736 C 11.832 14.170,12.686 13.615,13.388 13.002 C 13.874 12.578,13.980 12.398,13.980 12.000 C 13.980 11.746,13.963 11.672,13.872 11.516 C 13.740 11.293,13.533 11.128,13.290 11.055 C 12.881 10.932,12.613 11.018,12.160 11.419 C 11.507 11.996,10.741 12.494,9.720 13.003 C 8.676 13.523,8.019 13.758,6.820 14.037 C 6.446 14.124,5.927 14.270,5.667 14.361 C 5.407 14.452,5.186 14.520,5.177 14.511 C 5.168 14.502,5.125 14.282,5.081 14.023 C 4.943 13.218,4.980 12.251,5.178 11.486 C 5.677 9.561,7.153 7.978,9.060 7.324 C 9.258 7.256,10.050 7.074,10.820 6.919 C 14.100 6.257,15.510 5.850,16.776 5.200 C 17.389 4.885,18.235 4.286,18.577 3.924 C 18.642 3.856,18.707 3.800,18.722 3.800 C 18.737 3.800,18.843 4.036,18.958 4.324 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Leaf = /*@__PURE__*/ forwardRef<ComponentInternals, LeafProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    