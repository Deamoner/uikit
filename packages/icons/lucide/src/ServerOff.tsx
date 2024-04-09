
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ServerOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-server-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.449 1.142,1.250 1.309,1.129 1.515 C 1.040 1.667,1.023 1.741,1.028 1.959 C 1.032 2.102,1.031 2.427,1.027 2.680 C 1.023 2.933,1.020 4.355,1.020 5.840 L 1.020 8.540 1.114 8.840 C 1.418 9.816,2.151 10.555,3.140 10.886 L 3.420 10.979 6.500 10.991 L 9.580 11.002 10.570 11.991 L 11.561 12.980 7.510 13.000 L 3.460 13.021 3.139 13.122 C 2.169 13.427,1.419 14.182,1.114 15.160 L 1.020 15.460 1.020 18.000 L 1.020 20.540 1.114 20.840 C 1.418 21.816,2.149 22.554,3.140 22.886 L 3.420 22.980 12.055 22.991 L 20.690 23.001 21.005 22.865 C 21.195 22.783,21.330 22.744,21.345 22.768 C 21.405 22.865,21.786 22.999,22.000 22.999 C 22.731 22.999,23.217 22.236,22.904 21.580 C 22.826 21.417,20.946 19.520,12.674 11.255 C 3.302 1.891,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M6.695 1.057 C 6.465 1.129,6.256 1.299,6.128 1.516 C 6.037 1.672,6.020 1.746,6.020 2.000 C 6.020 2.256,6.036 2.328,6.131 2.489 C 6.256 2.702,6.449 2.864,6.670 2.943 C 6.793 2.987,8.018 2.997,13.463 2.998 C 20.936 3.000,20.370 2.976,20.697 3.303 C 21.002 3.609,21.000 3.589,21.000 6.001 C 21.000 8.287,20.996 8.333,20.779 8.618 C 20.718 8.698,20.585 8.813,20.484 8.872 L 20.300 8.980 17.520 9.000 C 15.418 9.015,14.713 9.032,14.627 9.070 C 14.428 9.158,14.239 9.328,14.128 9.516 C 14.037 9.672,14.020 9.746,14.020 10.000 C 14.020 10.257,14.036 10.327,14.133 10.492 C 14.262 10.711,14.502 10.901,14.727 10.962 C 14.829 10.989,15.844 10.999,17.731 10.991 L 20.580 10.979 20.860 10.885 C 21.849 10.556,22.582 9.816,22.886 8.840 L 22.980 8.540 22.980 6.000 L 22.980 3.460 22.886 3.160 C 22.581 2.182,21.832 1.428,20.861 1.121 L 20.540 1.020 13.700 1.012 C 8.174 1.006,6.828 1.015,6.695 1.057 M7.130 8.992 C 6.894 8.998,6.025 8.998,5.200 8.992 L 3.700 8.980 3.516 8.872 C 3.415 8.813,3.284 8.700,3.225 8.623 C 3.002 8.331,3.000 8.309,3.000 6.285 L 3.000 4.420 5.280 6.700 L 7.561 8.980 7.130 8.992 M18.695 13.055 C 18.464 13.130,18.255 13.300,18.128 13.516 C 18.037 13.672,18.020 13.746,18.020 14.000 C 18.020 14.256,18.036 14.328,18.131 14.489 C 18.192 14.592,18.304 14.725,18.381 14.783 C 18.623 14.968,18.768 14.996,19.483 14.998 C 20.256 15.000,20.430 15.042,20.682 15.287 C 20.950 15.547,20.973 15.638,20.998 16.523 L 21.020 17.306 21.141 17.503 C 21.543 18.156,22.457 18.156,22.859 17.503 L 22.980 17.306 22.980 16.383 C 22.980 15.527,22.973 15.438,22.886 15.160 C 22.580 14.180,21.820 13.416,20.861 13.125 C 20.574 13.039,20.451 13.027,19.700 13.015 C 19.072 13.004,18.818 13.015,18.695 13.055 M16.580 18.000 L 19.580 21.001 11.640 20.990 L 3.700 20.980 3.516 20.872 C 3.415 20.813,3.284 20.700,3.225 20.623 C 3.000 20.327,3.000 20.332,3.000 18.022 C 3.000 15.586,2.997 15.609,3.304 15.303 C 3.620 14.986,3.263 15.006,8.720 15.003 L 13.580 15.000 16.580 18.000 M5.695 17.055 C 5.464 17.130,5.255 17.300,5.128 17.516 C 5.037 17.672,5.020 17.746,5.020 18.000 C 5.020 18.257,5.036 18.327,5.133 18.492 C 5.651 19.374,6.998 19.018,6.998 18.000 C 6.998 17.623,6.792 17.281,6.463 17.112 C 6.265 17.010,5.911 16.984,5.695 17.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ServerOff = /*@__PURE__*/ forwardRef<ComponentInternals, ServerOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    