
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LocateProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-locate" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.695 1.057 C 11.466 1.129,11.256 1.299,11.128 1.516 L 11.020 1.700 11.008 2.880 L 10.996 4.060 10.505 4.148 C 8.405 4.525,6.476 5.828,5.264 7.689 C 4.953 8.166,4.594 8.924,4.405 9.500 C 4.249 9.979,4.080 10.703,4.080 10.898 L 4.080 11.000 2.986 11.000 C 1.794 11.000,1.645 11.021,1.382 11.221 C 1.302 11.282,1.187 11.415,1.128 11.516 C 1.037 11.672,1.020 11.746,1.020 12.000 C 1.020 12.256,1.036 12.328,1.131 12.489 C 1.192 12.592,1.304 12.725,1.381 12.783 C 1.644 12.984,1.735 12.996,2.950 12.998 L 4.080 13.000 4.080 13.102 C 4.080 13.297,4.249 14.021,4.405 14.500 C 4.693 15.380,5.201 16.313,5.789 17.040 C 6.075 17.394,6.761 18.067,7.100 18.326 C 7.804 18.863,8.680 19.327,9.500 19.595 C 9.976 19.751,10.703 19.920,10.896 19.920 L 10.996 19.920 11.008 21.113 L 11.020 22.306 11.141 22.503 C 11.543 23.156,12.457 23.156,12.859 22.503 L 12.980 22.306 12.992 21.113 L 13.004 19.920 13.104 19.920 C 13.297 19.920,14.024 19.751,14.500 19.595 C 15.728 19.193,16.820 18.506,17.741 17.554 C 18.389 16.886,18.803 16.294,19.200 15.471 C 19.549 14.751,19.920 13.528,19.920 13.102 L 19.920 13.000 21.050 12.998 C 22.265 12.996,22.356 12.984,22.619 12.783 C 22.696 12.725,22.808 12.592,22.869 12.489 C 22.964 12.328,22.980 12.256,22.980 12.000 C 22.980 11.746,22.963 11.672,22.872 11.516 C 22.813 11.415,22.698 11.282,22.618 11.221 C 22.355 11.021,22.206 11.000,21.014 11.000 L 19.920 11.000 19.920 10.898 C 19.920 10.703,19.751 9.979,19.595 9.500 C 19.229 8.382,18.612 7.352,17.801 6.504 C 16.657 5.309,15.223 4.506,13.648 4.178 C 13.391 4.124,13.140 4.080,13.092 4.080 L 13.004 4.080 12.992 2.890 L 12.980 1.700 12.872 1.516 C 12.628 1.101,12.150 0.915,11.695 1.057 M12.564 6.039 C 14.921 6.269,16.913 7.837,17.671 10.060 C 18.168 11.517,18.068 13.251,17.410 14.580 C 16.550 16.316,15.056 17.478,13.160 17.885 C 12.554 18.015,11.446 18.015,10.840 17.885 C 8.941 17.478,7.451 16.319,6.590 14.580 C 5.932 13.251,5.832 11.517,6.329 10.060 C 6.618 9.212,7.080 8.470,7.731 7.805 C 9.008 6.503,10.757 5.864,12.564 6.039 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const Locate = /*@__PURE__*/ forwardRef<ComponentInternals, LocateProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    