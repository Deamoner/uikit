
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TicketCheckProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-ticket-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 4.043 C 2.390 4.230,1.478 5.033,1.116 6.140 C 1.030 6.404,1.024 6.495,1.009 7.764 C 0.992 9.220,1.003 9.321,1.198 9.591 C 1.386 9.850,1.613 9.960,2.048 10.001 C 2.525 10.047,2.769 10.122,3.063 10.312 C 3.923 10.869,4.236 11.969,3.793 12.880 C 3.638 13.198,3.227 13.625,2.930 13.775 C 2.668 13.908,2.319 14.000,2.078 14.000 C 1.668 14.000,1.320 14.189,1.128 14.516 L 1.020 14.700 1.020 16.120 C 1.020 17.497,1.023 17.549,1.114 17.840 C 1.422 18.827,2.173 19.578,3.160 19.886 L 3.460 19.980 12.000 19.980 L 20.540 19.980 20.840 19.886 C 21.827 19.578,22.578 18.827,22.886 17.840 C 22.977 17.549,22.980 17.497,22.980 16.120 L 22.980 14.700 22.872 14.516 C 22.680 14.189,22.332 14.000,21.922 14.000 C 21.112 14.000,20.287 13.341,20.073 12.523 C 19.848 11.661,20.181 10.810,20.937 10.314 C 21.230 10.122,21.473 10.047,21.952 10.001 C 22.387 9.960,22.614 9.850,22.802 9.591 C 22.997 9.321,23.008 9.220,22.991 7.764 C 22.976 6.495,22.970 6.404,22.884 6.140 C 22.565 5.167,21.822 4.425,20.861 4.121 L 20.540 4.020 12.120 4.014 C 7.489 4.011,3.609 4.024,3.499 4.043 M20.310 6.061 C 20.452 6.103,20.571 6.178,20.697 6.304 C 20.959 6.566,21.005 6.754,20.991 7.517 L 20.980 8.126 20.720 8.217 C 19.350 8.697,18.370 9.816,18.083 11.227 C 17.700 13.105,18.756 15.031,20.540 15.711 C 20.716 15.778,20.892 15.843,20.930 15.855 C 20.993 15.875,21.000 15.942,21.000 16.492 C 21.000 17.358,20.899 17.628,20.484 17.872 L 20.300 17.980 12.000 17.980 L 3.700 17.980 3.516 17.872 C 3.415 17.813,3.284 17.700,3.225 17.623 C 3.034 17.372,3.000 17.207,3.000 16.514 C 3.000 15.943,3.007 15.875,3.070 15.855 C 4.342 15.450,5.237 14.646,5.704 13.488 C 6.560 11.365,5.464 8.982,3.280 8.217 L 3.020 8.126 3.009 7.517 C 2.995 6.754,3.041 6.566,3.303 6.303 C 3.421 6.185,3.552 6.100,3.673 6.063 C 3.833 6.014,5.030 6.005,11.983 6.003 C 19.144 6.000,20.130 6.007,20.310 6.061 M14.640 9.068 C 14.488 9.121,14.196 9.394,12.731 10.853 L 11.002 12.575 10.268 11.851 C 9.603 11.195,9.515 11.122,9.320 11.064 C 9.057 10.986,8.946 10.984,8.710 11.055 C 8.467 11.128,8.260 11.293,8.128 11.516 C 8.036 11.672,8.020 11.745,8.021 12.000 C 8.021 12.213,8.043 12.341,8.095 12.440 C 8.197 12.633,10.297 14.740,10.520 14.873 C 10.673 14.964,10.745 14.980,11.000 14.979 C 11.212 14.979,11.341 14.957,11.440 14.905 C 11.632 14.805,15.739 10.705,15.873 10.480 C 15.964 10.328,15.980 10.254,15.980 10.000 C 15.980 9.746,15.963 9.672,15.872 9.516 C 15.617 9.083,15.121 8.903,14.640 9.068 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const TicketCheck = /*@__PURE__*/ forwardRef<ComponentInternals, TicketCheckProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    