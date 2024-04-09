
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BananaProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-banana" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.480 1.060 C 11.586 1.262,11.001 1.950,10.814 3.017 C 10.766 3.291,10.756 3.522,10.774 3.960 C 10.801 4.626,10.904 5.180,11.176 6.120 C 11.526 7.330,11.635 8.196,11.560 9.176 C 11.504 9.916,11.324 10.879,11.207 11.069 C 11.185 11.105,11.096 11.092,10.859 11.018 C 8.748 10.365,6.171 10.716,3.793 11.980 C 3.328 12.227,3.155 12.394,3.057 12.690 C 2.878 13.229,3.187 13.805,3.738 13.959 C 4.041 14.044,4.228 13.995,4.930 13.649 C 5.872 13.183,6.642 12.926,7.540 12.775 C 8.021 12.695,9.136 12.684,9.520 12.756 C 9.946 12.836,10.320 12.931,10.320 12.959 C 10.320 12.974,10.228 13.119,10.116 13.283 C 9.257 14.533,8.059 15.559,6.660 16.242 C 5.945 16.591,5.480 16.761,4.560 17.008 C 2.666 17.517,2.167 17.721,1.707 18.175 C 1.413 18.465,1.282 18.678,1.133 19.104 C 1.035 19.387,1.023 19.477,1.022 19.960 C 1.020 20.421,1.034 20.541,1.113 20.780 C 1.530 22.035,2.687 22.685,4.940 22.928 C 5.595 22.999,8.367 22.999,8.860 22.928 C 9.275 22.869,9.947 22.742,10.180 22.679 C 11.495 22.323,12.464 21.897,13.442 21.246 C 14.195 20.744,14.575 20.431,15.220 19.782 C 16.271 18.724,17.122 17.478,17.725 16.116 C 17.964 15.575,17.907 15.601,18.386 15.820 C 19.643 16.395,20.554 17.517,20.880 18.892 C 20.923 19.072,20.974 19.466,20.994 19.767 C 21.025 20.251,21.041 20.335,21.135 20.496 C 21.568 21.235,22.654 21.130,22.939 20.322 C 23.048 20.015,23.001 19.163,22.838 18.453 C 22.364 16.400,20.902 14.681,18.950 13.881 C 18.663 13.764,18.581 13.713,18.584 13.655 C 18.586 13.614,18.635 13.355,18.691 13.080 C 18.976 11.701,19.073 10.124,18.939 9.042 C 18.722 7.288,18.048 5.297,17.193 3.880 C 16.828 3.274,16.520 2.877,16.041 2.397 C 15.158 1.510,14.228 1.065,13.160 1.019 C 12.873 1.007,12.657 1.019,12.480 1.060 M13.368 3.045 C 13.826 3.141,14.250 3.411,14.711 3.898 C 15.834 5.084,16.790 7.469,16.967 9.528 C 17.045 10.426,16.922 11.847,16.668 12.980 L 16.578 13.380 16.159 13.411 C 15.630 13.450,15.105 13.537,14.723 13.649 L 14.427 13.736 14.363 13.638 C 14.103 13.238,13.490 12.561,13.094 12.235 L 12.967 12.131 13.101 11.728 C 13.426 10.747,13.570 9.832,13.575 8.700 C 13.581 7.558,13.484 6.907,13.122 5.651 C 12.834 4.649,12.784 4.376,12.782 3.780 C 12.780 3.141,12.823 3.000,13.023 3.000 C 13.096 3.000,13.251 3.020,13.368 3.045 M12.558 14.560 C 12.664 14.703,12.852 15.000,12.977 15.220 C 13.231 15.669,13.403 15.846,13.671 15.938 C 13.951 16.033,14.143 16.014,14.520 15.855 C 15.123 15.601,15.800 15.410,15.800 15.496 C 15.800 15.541,15.538 16.044,15.340 16.380 C 13.769 19.041,11.318 20.659,8.406 20.958 C 7.877 21.012,6.188 21.012,5.460 20.958 C 4.095 20.857,3.249 20.606,3.062 20.244 C 2.941 20.009,2.997 19.656,3.174 19.540 C 3.322 19.443,3.865 19.268,4.725 19.040 C 6.678 18.522,7.767 18.045,9.049 17.148 C 10.113 16.403,11.192 15.298,11.900 14.228 L 12.053 13.997 12.210 14.148 C 12.296 14.232,12.452 14.417,12.558 14.560 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Banana = /*@__PURE__*/ forwardRef<ComponentInternals, BananaProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    