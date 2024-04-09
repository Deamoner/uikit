
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type HardDriveProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-hard-drive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.781 3.044 C 5.993 3.161,5.195 3.674,4.745 4.353 C 4.648 4.500,3.765 6.228,2.783 8.194 L 0.997 11.768 1.009 15.174 L 1.021 18.580 1.114 18.860 C 1.445 19.850,2.184 20.582,3.160 20.886 L 3.460 20.980 12.000 20.980 L 20.540 20.980 20.840 20.886 C 21.816 20.582,22.555 19.850,22.886 18.860 L 22.979 18.580 22.991 15.174 L 23.003 11.768 21.217 8.194 C 20.235 6.228,19.352 4.500,19.255 4.353 C 18.984 3.944,18.540 3.553,18.105 3.340 C 17.402 2.995,17.905 3.022,12.140 3.015 C 9.324 3.011,6.913 3.024,6.781 3.044 M17.099 5.066 C 17.473 5.193,17.489 5.220,18.979 8.198 C 19.738 9.716,20.360 10.968,20.360 10.979 C 20.360 10.991,16.598 11.000,12.000 11.000 C 7.402 11.000,3.640 10.991,3.640 10.980 C 3.640 10.969,4.263 9.713,5.025 8.190 C 6.126 5.987,6.441 5.390,6.562 5.274 C 6.860 4.990,6.519 5.007,11.983 5.003 C 16.449 5.000,16.924 5.006,17.099 5.066 M21.000 15.554 C 21.000 18.325,21.000 18.328,20.779 18.618 C 20.718 18.698,20.585 18.813,20.484 18.872 L 20.300 18.980 12.000 18.980 L 3.700 18.980 3.516 18.872 C 3.415 18.813,3.284 18.700,3.225 18.623 C 2.996 18.323,3.000 18.373,3.000 15.575 L 3.000 13.000 12.000 13.000 L 21.000 13.000 21.000 15.554 M5.695 15.055 C 5.464 15.130,5.255 15.300,5.128 15.516 C 5.037 15.672,5.020 15.746,5.020 16.000 C 5.020 16.257,5.036 16.327,5.133 16.492 C 5.651 17.374,6.998 17.018,6.998 16.000 C 6.998 15.623,6.792 15.281,6.463 15.112 C 6.265 15.010,5.911 14.984,5.695 15.055 M9.695 15.055 C 9.464 15.130,9.255 15.300,9.128 15.516 C 9.037 15.672,9.020 15.746,9.020 16.000 C 9.020 16.257,9.036 16.327,9.133 16.492 C 9.651 17.374,10.998 17.018,10.998 16.000 C 10.998 15.623,10.792 15.281,10.463 15.112 C 10.265 15.010,9.911 14.984,9.695 15.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const HardDrive = /*@__PURE__*/ forwardRef<ComponentInternals, HardDriveProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    