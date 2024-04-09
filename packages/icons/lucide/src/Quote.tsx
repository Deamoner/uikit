
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type QuoteProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-quote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.420 2.044 C 2.778 2.140,2.276 2.395,1.819 2.856 C 1.463 3.216,1.264 3.551,1.114 4.041 L 1.022 4.340 1.009 7.780 C 1.000 10.154,1.009 11.316,1.040 11.529 C 1.094 11.907,1.234 12.329,1.406 12.632 C 1.583 12.945,2.081 13.435,2.400 13.609 C 2.816 13.836,3.419 13.999,3.850 14.000 L 4.000 14.000 4.000 14.530 C 4.000 14.822,3.981 15.128,3.958 15.211 C 3.895 15.436,3.612 15.759,3.364 15.889 C 3.182 15.984,3.103 16.000,2.825 16.000 C 1.900 16.001,1.365 16.283,1.116 16.902 L 1.020 17.140 1.020 19.000 L 1.020 20.860 1.124 21.106 C 1.293 21.508,1.496 21.710,1.894 21.874 C 2.476 22.114,4.532 22.001,5.720 21.663 C 7.018 21.294,7.910 20.784,8.760 19.922 C 9.254 19.422,9.612 18.912,9.958 18.220 C 10.372 17.389,10.625 16.590,10.797 15.573 C 10.979 14.490,10.980 14.463,10.980 9.320 C 10.980 3.805,11.002 4.215,10.671 3.521 C 10.539 3.245,10.447 3.120,10.165 2.840 C 9.783 2.461,9.460 2.267,8.959 2.115 C 8.663 2.025,8.633 2.024,6.160 2.016 C 4.785 2.011,3.552 2.024,3.420 2.044 M15.420 2.044 C 14.778 2.140,14.276 2.395,13.819 2.856 C 13.463 3.216,13.264 3.551,13.114 4.041 L 13.022 4.340 13.009 7.780 C 12.995 11.423,13.001 11.595,13.180 12.121 C 13.325 12.547,13.502 12.827,13.837 13.163 C 14.283 13.610,14.782 13.855,15.459 13.961 C 15.612 13.985,15.745 14.012,15.755 14.021 C 15.764 14.031,15.752 14.288,15.728 14.593 C 15.656 15.494,15.529 15.719,14.998 15.884 C 14.863 15.926,14.570 15.970,14.346 15.983 C 14.123 15.995,13.856 16.024,13.754 16.046 C 13.510 16.099,13.266 16.282,13.129 16.514 L 13.020 16.700 13.020 18.780 L 13.020 20.860 13.124 21.106 C 13.293 21.508,13.496 21.710,13.894 21.874 C 14.476 22.114,16.532 22.001,17.720 21.663 C 19.018 21.294,19.910 20.784,20.760 19.922 C 21.254 19.422,21.612 18.912,21.958 18.220 C 22.457 17.219,22.704 16.343,22.910 14.840 C 22.964 14.448,22.976 13.669,22.989 9.580 C 23.006 4.500,23.004 4.420,22.820 3.879 C 22.672 3.444,22.497 3.170,22.143 2.819 C 21.784 2.463,21.448 2.263,20.959 2.115 C 20.663 2.025,20.633 2.024,18.160 2.016 C 16.785 2.011,15.552 2.024,15.420 2.044 M8.581 4.112 C 8.776 4.224,8.902 4.401,8.957 4.640 C 9.011 4.878,9.014 13.254,8.960 14.020 C 8.765 16.783,7.855 18.533,6.178 19.372 C 5.480 19.721,4.202 19.997,3.270 19.999 L 3.000 20.000 3.000 19.009 L 3.000 18.018 3.332 17.972 C 4.564 17.804,5.681 16.758,5.942 15.527 C 6.010 15.208,6.022 13.529,5.960 13.198 C 5.875 12.751,5.613 12.371,5.266 12.193 C 5.032 12.073,4.625 12.001,4.177 12.001 C 3.937 12.000,3.693 11.976,3.572 11.940 C 3.297 11.858,3.103 11.643,3.043 11.352 C 3.011 11.201,3.001 10.162,3.009 7.858 C 3.021 4.240,3.005 4.468,3.270 4.220 C 3.499 4.007,3.543 4.003,6.080 4.012 L 8.420 4.020 8.581 4.112 M20.581 4.112 C 20.776 4.224,20.902 4.401,20.957 4.640 C 21.011 4.878,21.014 13.254,20.960 14.020 C 20.765 16.783,19.855 18.533,18.178 19.372 C 17.480 19.721,16.202 19.997,15.270 19.999 L 15.000 20.000 15.000 18.968 L 15.000 17.936 15.367 17.847 C 16.480 17.576,17.198 16.939,17.518 15.940 C 17.704 15.359,17.740 15.012,17.740 13.820 C 17.740 12.791,17.736 12.732,17.654 12.579 C 17.544 12.374,17.383 12.214,17.181 12.108 C 17.042 12.035,16.925 12.020,16.320 11.999 C 15.822 11.982,15.580 11.957,15.479 11.914 C 15.265 11.820,15.094 11.599,15.042 11.351 C 15.011 11.201,15.001 10.149,15.009 7.858 C 15.021 4.240,15.005 4.468,15.270 4.220 C 15.499 4.007,15.543 4.003,18.080 4.012 L 20.420 4.020 20.581 4.112 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Quote = /*@__PURE__*/ forwardRef<ComponentInternals, QuoteProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    