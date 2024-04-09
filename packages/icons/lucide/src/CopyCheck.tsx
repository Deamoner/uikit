
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CopyCheckProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-copy-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 1.043 C 2.857 1.152,2.395 1.398,1.896 1.896 C 1.496 2.296,1.296 2.613,1.125 3.113 L 1.020 3.420 1.020 9.000 L 1.020 14.580 1.125 14.887 C 1.296 15.387,1.496 15.704,1.896 16.104 C 2.301 16.508,2.627 16.714,3.107 16.866 C 3.466 16.980,4.031 17.028,4.264 16.965 C 4.498 16.901,4.737 16.714,4.867 16.492 C 4.964 16.327,4.980 16.257,4.980 15.997 C 4.980 15.729,4.966 15.671,4.860 15.502 C 4.697 15.241,4.475 15.090,4.180 15.037 C 3.713 14.955,3.578 14.915,3.433 14.815 C 3.251 14.689,3.096 14.460,3.040 14.233 C 3.010 14.114,3.001 12.457,3.009 8.900 C 3.020 3.889,3.022 3.735,3.097 3.584 C 3.196 3.385,3.385 3.196,3.584 3.097 C 3.736 3.022,3.878 3.020,9.000 3.020 C 14.122 3.020,14.264 3.022,14.416 3.097 C 14.769 3.273,14.940 3.543,15.001 4.027 C 15.049 4.410,15.183 4.646,15.452 4.828 C 15.923 5.144,16.554 4.998,16.859 4.503 C 16.976 4.313,16.980 4.290,16.975 3.863 C 16.967 3.080,16.713 2.505,16.104 1.896 C 15.694 1.486,15.363 1.280,14.861 1.121 L 14.540 1.020 9.120 1.014 C 6.139 1.011,3.609 1.024,3.499 1.043 M9.499 7.043 C 8.379 7.233,7.461 8.048,7.114 9.160 L 7.020 9.460 7.020 15.000 L 7.020 20.540 7.114 20.840 C 7.422 21.827,8.173 22.578,9.160 22.886 L 9.460 22.980 15.000 22.980 L 20.540 22.980 20.840 22.886 C 21.827 22.578,22.578 21.827,22.886 20.840 L 22.980 20.540 22.980 15.000 L 22.980 9.460 22.886 9.160 C 22.581 8.182,21.832 7.428,20.861 7.121 L 20.540 7.020 15.120 7.014 C 12.139 7.011,9.609 7.024,9.499 7.043 M20.310 9.061 C 20.589 9.144,20.856 9.411,20.939 9.690 C 20.992 9.868,21.000 10.546,21.000 15.001 C 21.000 19.212,20.990 20.139,20.945 20.290 C 20.872 20.533,20.707 20.740,20.484 20.872 L 20.300 20.980 15.000 20.980 L 9.700 20.980 9.516 20.872 C 9.303 20.747,9.141 20.550,9.058 20.316 C 8.969 20.061,8.971 9.993,9.061 9.690 C 9.140 9.421,9.412 9.143,9.673 9.063 C 9.963 8.974,20.010 8.972,20.310 9.061 M17.640 12.068 C 17.488 12.121,17.196 12.394,15.731 13.853 L 14.002 15.575 13.271 14.855 C 12.655 14.247,12.509 14.123,12.343 14.067 C 11.865 13.905,11.383 14.083,11.128 14.516 C 11.036 14.672,11.020 14.745,11.021 15.000 C 11.021 15.213,11.043 15.341,11.095 15.440 C 11.197 15.633,13.297 17.740,13.520 17.873 C 13.673 17.964,13.745 17.980,14.000 17.979 C 14.212 17.979,14.341 17.957,14.440 17.905 C 14.632 17.805,18.739 13.705,18.873 13.480 C 18.964 13.328,18.980 13.254,18.980 13.000 C 18.980 12.746,18.963 12.672,18.872 12.516 C 18.617 12.083,18.121 11.903,17.640 12.068 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CopyCheck = /*@__PURE__*/ forwardRef<ComponentInternals, CopyCheckProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    