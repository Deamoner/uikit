
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type MonitorCheckProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-monitor-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.043 C 2.380 2.232,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 10.000 L 1.020 15.540 1.114 15.840 C 1.418 16.816,2.149 17.554,3.140 17.886 L 3.420 17.980 7.210 17.991 L 11.000 18.003 11.000 19.001 L 11.000 20.000 9.446 20.000 C 7.758 20.000,7.658 20.011,7.382 20.221 C 7.302 20.282,7.187 20.415,7.128 20.516 C 7.037 20.672,7.020 20.746,7.020 21.000 C 7.020 21.256,7.036 21.328,7.131 21.489 C 7.256 21.702,7.449 21.864,7.670 21.943 C 7.892 22.022,16.108 22.022,16.330 21.943 C 16.551 21.864,16.744 21.702,16.869 21.489 C 16.964 21.328,16.980 21.256,16.980 21.000 C 16.980 20.746,16.963 20.672,16.872 20.516 C 16.813 20.415,16.698 20.282,16.618 20.221 C 16.342 20.011,16.242 20.000,14.554 20.000 L 13.000 20.000 13.000 19.001 L 13.000 18.003 16.790 17.991 L 20.580 17.980 20.860 17.886 C 21.851 17.554,22.582 16.816,22.886 15.840 L 22.980 15.540 22.980 10.000 L 22.980 4.460 22.886 4.160 C 22.581 3.182,21.832 2.428,20.861 2.121 L 20.540 2.020 12.120 2.014 C 7.489 2.011,3.609 2.024,3.499 2.043 M20.310 4.061 C 20.589 4.144,20.856 4.411,20.939 4.690 C 20.992 4.868,21.000 5.546,21.000 10.001 C 21.000 14.212,20.990 15.139,20.945 15.290 C 20.872 15.533,20.707 15.740,20.484 15.872 L 20.300 15.980 12.000 15.980 L 3.700 15.980 3.516 15.872 C 3.303 15.747,3.141 15.550,3.058 15.316 C 2.969 15.061,2.971 4.993,3.061 4.690 C 3.140 4.421,3.412 4.143,3.673 4.063 C 3.833 4.014,5.030 4.005,11.983 4.003 C 19.144 4.000,20.130 4.007,20.310 4.061 M14.640 7.068 C 14.488 7.121,14.196 7.394,12.731 8.853 L 11.002 10.575 10.271 9.855 C 9.655 9.247,9.509 9.123,9.343 9.067 C 8.865 8.905,8.383 9.083,8.128 9.516 C 8.036 9.672,8.020 9.745,8.021 10.000 C 8.021 10.213,8.043 10.341,8.095 10.440 C 8.197 10.633,10.297 12.740,10.520 12.873 C 10.673 12.964,10.745 12.980,11.000 12.979 C 11.212 12.979,11.341 12.957,11.440 12.905 C 11.632 12.805,15.739 8.705,15.873 8.480 C 15.964 8.328,15.980 8.254,15.980 8.000 C 15.980 7.746,15.963 7.672,15.872 7.516 C 15.617 7.083,15.121 6.903,14.640 7.068 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const MonitorCheck = /*@__PURE__*/ forwardRef<ComponentInternals, MonitorCheckProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    