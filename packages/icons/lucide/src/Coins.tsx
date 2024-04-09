
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CoinsProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-coins" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.540 1.023 C 6.715 1.102,6.250 1.200,5.620 1.427 C 2.247 2.641,0.338 6.242,1.221 9.724 C 1.911 12.445,4.151 14.469,6.980 14.926 C 7.392 14.992,8.607 14.992,9.020 14.926 C 12.109 14.428,14.428 12.109,14.926 9.020 C 14.954 8.844,14.977 8.385,14.977 8.000 C 14.977 7.056,14.876 6.462,14.573 5.620 C 13.715 3.237,11.581 1.473,9.102 1.098 C 8.726 1.041,7.813 0.997,7.540 1.023 M8.552 3.043 C 10.413 3.246,12.001 4.479,12.680 6.248 C 13.092 7.320,13.085 8.720,12.663 9.793 C 12.120 11.174,10.991 12.256,9.600 12.732 C 9.044 12.922,8.670 12.980,8.000 12.980 C 7.330 12.980,6.956 12.922,6.400 12.732 C 4.808 12.188,3.580 10.864,3.161 9.240 C 2.920 8.307,2.983 7.125,3.320 6.248 C 4.146 4.096,6.274 2.793,8.552 3.043 M6.695 5.057 C 6.466 5.129,6.256 5.299,6.128 5.516 C 6.036 5.672,6.020 5.746,6.020 6.003 C 6.020 6.271,6.034 6.329,6.141 6.503 C 6.288 6.741,6.577 6.946,6.819 6.982 L 6.997 7.009 7.008 8.658 L 7.020 10.306 7.141 10.503 C 7.543 11.156,8.457 11.156,8.859 10.503 L 8.980 10.306 8.980 8.003 L 8.980 5.700 8.872 5.516 C 8.740 5.293,8.533 5.128,8.290 5.055 C 8.050 4.983,6.928 4.984,6.695 5.057 M17.869 9.402 C 17.643 9.458,17.510 9.537,17.352 9.712 C 17.069 10.025,17.016 10.443,17.210 10.831 C 17.327 11.065,17.511 11.212,17.879 11.365 C 19.076 11.863,19.954 12.702,20.523 13.895 C 21.178 15.267,21.138 16.920,20.416 18.320 C 19.970 19.184,19.145 20.003,18.280 20.439 C 16.881 21.144,15.260 21.175,13.896 20.524 C 12.670 19.938,11.834 19.034,11.303 17.721 C 11.111 17.246,10.803 17.022,10.340 17.022 C 10.011 17.022,9.806 17.112,9.601 17.345 C 9.225 17.773,9.260 18.165,9.760 19.160 C 11.112 21.850,14.141 23.393,17.100 22.901 C 19.882 22.438,22.101 20.401,22.776 17.688 C 22.945 17.011,22.977 16.731,22.975 15.960 C 22.974 15.361,22.956 15.132,22.884 14.760 C 22.413 12.347,20.878 10.457,18.620 9.508 C 18.333 9.388,18.075 9.352,17.869 9.402 M16.440 12.915 C 15.839 13.112,15.555 13.744,15.816 14.305 C 15.869 14.418,15.933 14.524,15.960 14.540 C 15.992 14.560,15.623 14.957,14.886 15.695 C 13.681 16.904,13.602 17.007,13.601 17.380 C 13.600 17.709,13.669 17.880,13.894 18.106 C 14.120 18.331,14.289 18.399,14.622 18.400 C 15.006 18.400,15.096 18.328,16.745 16.671 C 18.447 14.962,18.429 14.985,18.391 14.508 C 18.380 14.370,18.342 14.203,18.307 14.138 C 18.205 13.947,17.315 13.063,17.145 12.984 C 16.970 12.902,16.591 12.865,16.440 12.915 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Coins = /*@__PURE__*/ forwardRef<ComponentInternals, CoinsProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    