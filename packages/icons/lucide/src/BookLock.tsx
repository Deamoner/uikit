
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BookLockProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-book-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.873 1.063 C 5.147 1.194,4.470 1.562,3.958 2.105 C 3.562 2.524,3.318 2.949,3.130 3.548 L 3.020 3.900 3.020 12.000 L 3.020 20.100 3.130 20.452 C 3.511 21.666,4.334 22.489,5.548 22.870 L 5.900 22.980 13.013 22.991 C 17.737 22.998,20.177 22.988,20.277 22.961 C 20.498 22.901,20.739 22.710,20.867 22.492 L 20.980 22.300 20.980 18.500 L 20.980 14.700 20.871 14.514 C 20.648 14.134,20.208 13.941,19.786 14.035 C 19.515 14.096,19.270 14.275,19.129 14.514 C 19.024 14.693,19.019 14.726,19.007 15.350 L 18.993 16.000 12.622 16.000 C 5.699 16.000,5.896 15.994,5.296 16.220 C 5.150 16.275,5.023 16.320,5.014 16.320 C 5.006 16.320,5.003 13.580,5.009 10.230 L 5.020 4.140 5.133 3.896 C 5.276 3.587,5.585 3.279,5.900 3.132 L 6.140 3.020 8.220 3.000 L 10.300 2.980 10.492 2.867 C 11.248 2.423,11.123 1.306,10.290 1.055 C 10.026 0.976,6.318 0.982,5.873 1.063 M15.499 1.040 C 14.373 1.244,13.470 2.041,13.118 3.140 C 13.042 3.378,13.026 3.536,13.010 4.202 L 12.991 4.983 12.685 5.032 C 12.259 5.099,11.918 5.275,11.596 5.597 C 11.310 5.882,11.154 6.147,11.060 6.508 C 10.972 6.844,10.972 10.156,11.060 10.492 C 11.153 10.852,11.310 11.118,11.596 11.404 C 11.882 11.690,12.148 11.847,12.508 11.940 C 12.850 12.029,19.150 12.029,19.492 11.940 C 19.852 11.847,20.118 11.690,20.404 11.404 C 20.694 11.114,20.841 10.863,20.937 10.491 C 21.027 10.144,21.029 6.909,20.940 6.529 C 20.852 6.156,20.699 5.891,20.404 5.597 C 20.082 5.275,19.741 5.099,19.315 5.032 L 19.009 4.983 18.990 4.202 C 18.974 3.536,18.958 3.378,18.882 3.140 C 18.571 2.170,17.801 1.404,16.861 1.129 C 16.500 1.023,15.832 0.980,15.499 1.040 M16.310 3.061 C 16.452 3.103,16.571 3.178,16.697 3.303 C 16.948 3.554,17.000 3.751,17.000 4.447 L 17.000 5.000 16.000 5.000 L 15.000 5.000 15.000 4.427 C 15.000 3.735,15.048 3.558,15.307 3.299 C 15.582 3.024,15.918 2.944,16.310 3.061 M19.000 8.500 L 19.000 10.000 16.000 10.000 L 13.000 10.000 13.000 8.500 L 13.000 7.000 16.000 7.000 L 19.000 7.000 19.000 8.500 M19.000 19.500 L 19.000 21.001 12.570 20.990 L 6.140 20.980 5.900 20.868 C 5.583 20.720,5.275 20.413,5.135 20.104 C 5.040 19.896,5.024 19.808,5.024 19.500 C 5.023 19.191,5.039 19.106,5.134 18.900 C 5.328 18.477,5.755 18.124,6.174 18.042 C 6.265 18.024,9.189 18.007,12.670 18.004 L 19.000 18.000 19.000 19.500 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BookLock = /*@__PURE__*/ forwardRef<ComponentInternals, BookLockProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    