
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Layers3Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-layers-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.500 1.046 C 11.390 1.066,11.210 1.111,11.100 1.146 C 10.809 1.239,2.135 5.186,1.910 5.328 C 1.378 5.665,1.000 6.359,1.000 7.000 C 1.000 7.597,1.353 8.283,1.832 8.614 C 1.919 8.675,2.354 8.893,2.797 9.099 C 3.241 9.304,3.604 9.486,3.604 9.502 C 3.605 9.518,3.245 9.698,2.805 9.900 C 1.745 10.389,1.487 10.586,1.228 11.103 C 0.849 11.857,0.962 12.702,1.525 13.334 C 1.783 13.624,1.965 13.733,2.871 14.144 C 3.296 14.336,3.629 14.506,3.611 14.521 C 3.594 14.536,3.230 14.708,2.801 14.904 C 1.760 15.379,1.489 15.586,1.228 16.103 C 0.933 16.689,0.932 17.320,1.227 17.909 C 1.361 18.176,1.665 18.517,1.909 18.672 C 2.178 18.844,10.839 22.773,11.180 22.878 C 11.766 23.058,12.506 23.023,13.101 22.786 C 13.448 22.647,21.785 18.853,22.010 18.731 C 22.256 18.597,22.641 18.193,22.775 17.929 C 23.175 17.141,23.036 16.229,22.422 15.615 C 22.157 15.349,21.944 15.229,20.980 14.800 C 20.672 14.663,20.406 14.538,20.389 14.523 C 20.373 14.507,20.535 14.416,20.749 14.320 C 21.933 13.789,22.118 13.689,22.377 13.440 C 23.394 12.463,23.136 10.851,21.858 10.209 C 21.683 10.121,21.288 9.937,20.980 9.800 C 20.672 9.663,20.407 9.539,20.391 9.525 C 20.376 9.511,20.502 9.438,20.671 9.363 C 20.841 9.288,21.258 9.094,21.597 8.931 C 22.129 8.675,22.245 8.602,22.440 8.400 C 22.691 8.139,22.893 7.768,22.964 7.439 C 23.025 7.156,22.988 6.552,22.895 6.320 C 22.743 5.937,22.469 5.591,22.136 5.358 C 21.977 5.248,13.724 1.468,13.124 1.231 C 12.592 1.021,12.001 0.953,11.500 1.046 M16.343 4.879 C 18.585 5.900,20.554 6.795,20.718 6.870 L 21.016 7.005 19.495 7.697 C 18.659 8.077,17.832 8.452,17.657 8.529 C 17.483 8.606,16.287 9.150,15.000 9.738 C 13.713 10.326,12.543 10.853,12.400 10.908 C 11.949 11.081,12.018 11.104,9.317 9.874 C 7.988 9.268,6.032 8.378,4.971 7.896 C 3.910 7.414,3.042 7.011,3.041 7.000 C 3.040 6.984,11.560 3.099,11.760 3.024 C 11.793 3.012,11.920 3.007,12.043 3.013 C 12.241 3.023,12.725 3.233,16.343 4.879 M8.493 11.696 C 9.817 12.298,11.026 12.831,11.180 12.879 C 11.579 13.003,12.134 13.029,12.561 12.942 C 12.985 12.856,13.063 12.824,15.734 11.607 L 17.929 10.609 18.474 10.857 C 18.774 10.994,19.456 11.303,19.989 11.543 C 20.522 11.783,20.958 11.991,20.959 12.004 C 20.960 12.025,20.075 12.434,18.020 13.362 C 17.646 13.531,16.233 14.173,14.880 14.789 C 13.527 15.404,12.350 15.931,12.265 15.959 C 12.180 15.986,12.025 16.001,11.920 15.991 C 11.778 15.977,10.630 15.473,7.385 13.998 C 4.995 12.912,3.054 12.010,3.070 11.994 C 3.094 11.970,6.027 10.610,6.073 10.602 C 6.080 10.601,7.169 11.093,8.493 11.696 M8.488 16.696 C 9.814 17.298,11.026 17.830,11.180 17.877 C 11.741 18.050,12.416 18.029,12.998 17.821 C 13.142 17.770,14.308 17.250,15.590 16.667 L 17.920 15.605 19.439 16.293 C 20.274 16.671,20.958 16.991,20.959 17.004 C 20.960 17.029,12.686 20.799,12.340 20.931 C 11.946 21.082,12.118 21.149,7.387 18.999 C 4.996 17.913,3.053 17.011,3.070 16.994 C 3.091 16.973,5.998 15.623,6.068 15.602 C 6.072 15.601,7.161 16.093,8.488 16.696 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Layers3 = /*@__PURE__*/ forwardRef<ComponentInternals, Layers3Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    