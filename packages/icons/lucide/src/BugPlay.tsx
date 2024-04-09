
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BugPlayProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-bug-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.670 1.061 C 7.448 1.142,7.250 1.309,7.128 1.516 C 7.037 1.672,7.020 1.746,7.020 2.000 C 7.020 2.410,7.090 2.516,7.892 3.314 L 8.550 3.969 8.453 4.141 C 8.178 4.633,8.000 5.370,8.000 6.016 L 8.000 6.422 7.710 6.567 C 7.279 6.781,6.763 7.167,6.398 7.547 L 6.074 7.884 5.927 7.838 C 5.502 7.704,4.902 7.233,4.577 6.779 C 4.220 6.278,4.066 5.829,4.004 5.110 C 3.974 4.762,3.947 4.645,3.864 4.503 C 3.481 3.849,2.517 3.853,2.132 4.510 C 1.938 4.841,1.971 5.596,2.216 6.443 C 2.599 7.762,3.613 8.954,4.855 9.544 C 5.163 9.690,5.167 9.694,5.141 9.816 C 5.038 10.295,5.000 10.695,5.000 11.310 L 5.000 12.000 3.446 12.000 C 1.758 12.000,1.658 12.011,1.382 12.221 C 1.302 12.282,1.187 12.415,1.128 12.516 C 1.037 12.672,1.020 12.746,1.020 13.000 C 1.020 13.256,1.036 13.328,1.131 13.489 C 1.192 13.592,1.304 13.725,1.381 13.783 C 1.654 13.991,1.700 13.996,3.410 13.998 L 5.000 14.000 5.001 14.230 C 5.002 14.695,5.137 15.467,5.342 16.183 C 5.363 16.256,5.325 16.284,5.055 16.402 C 3.732 16.979,2.717 18.084,2.264 19.440 C 2.085 19.976,1.988 20.563,2.009 20.988 C 2.023 21.264,2.044 21.345,2.144 21.508 C 2.539 22.150,3.458 22.154,3.852 21.514 C 3.949 21.356,3.972 21.263,4.004 20.897 C 4.049 20.378,4.125 20.067,4.288 19.743 C 4.656 19.007,5.274 18.436,5.981 18.178 C 6.146 18.118,6.288 18.076,6.296 18.084 C 6.304 18.093,6.420 18.239,6.555 18.409 C 6.903 18.849,7.391 19.318,7.595 19.410 C 8.204 19.682,8.908 19.272,8.988 18.598 C 9.029 18.251,8.947 18.072,8.563 17.663 C 8.067 17.136,7.830 16.803,7.561 16.260 C 7.298 15.728,7.194 15.435,7.090 14.924 C 7.029 14.623,7.020 14.327,7.020 12.540 C 7.020 10.530,7.021 10.495,7.112 10.178 C 7.391 9.204,8.204 8.391,9.178 8.112 C 9.499 8.020,9.510 8.020,12.000 8.020 C 14.496 8.020,14.501 8.020,14.820 8.113 C 15.790 8.394,16.594 9.185,16.867 10.129 C 16.916 10.299,16.974 10.638,16.995 10.883 C 17.028 11.264,17.050 11.354,17.148 11.514 C 17.542 12.154,18.460 12.150,18.856 11.508 C 18.956 11.345,18.977 11.264,18.991 10.988 C 19.005 10.704,18.953 10.249,18.855 9.794 C 18.834 9.695,18.853 9.678,19.146 9.534 C 20.592 8.822,21.617 7.438,21.900 5.815 C 22.062 4.885,21.918 4.373,21.420 4.108 C 21.197 3.989,20.764 3.989,20.539 4.107 C 20.152 4.312,20.004 4.576,19.958 5.138 C 19.919 5.617,19.871 5.844,19.742 6.164 C 19.508 6.740,18.905 7.414,18.380 7.686 C 17.926 7.921,17.968 7.928,17.602 7.547 C 17.241 7.171,16.755 6.807,16.302 6.575 L 16.000 6.420 16.000 6.035 C 16.000 5.378,15.821 4.632,15.547 4.141 L 15.450 3.969 16.108 3.314 C 16.910 2.516,16.980 2.410,16.980 2.000 C 16.980 1.746,16.963 1.672,16.872 1.516 C 16.617 1.083,16.135 0.905,15.657 1.067 C 15.492 1.123,15.346 1.246,14.751 1.833 L 14.041 2.532 13.769 2.407 C 12.583 1.860,11.417 1.860,10.231 2.407 L 9.959 2.532 9.249 1.833 C 8.654 1.246,8.508 1.123,8.343 1.067 C 8.109 0.987,7.876 0.985,7.670 1.061 M12.499 4.061 C 13.035 4.201,13.536 4.606,13.772 5.090 C 13.908 5.370,14.000 5.698,14.000 5.902 L 14.000 6.000 12.000 6.000 L 10.000 6.000 10.000 5.902 C 10.000 5.698,10.092 5.370,10.228 5.090 C 10.460 4.615,10.962 4.204,11.484 4.063 C 11.770 3.986,12.208 3.986,12.499 4.061 M11.695 11.057 C 11.466 11.129,11.256 11.299,11.128 11.516 L 11.020 11.700 11.009 16.918 C 10.998 22.788,10.977 22.379,11.298 22.700 C 11.565 22.967,11.984 23.068,12.320 22.946 C 12.397 22.918,14.311 21.737,16.573 20.323 C 20.967 17.575,20.860 17.650,20.964 17.264 C 21.059 16.911,20.918 16.458,20.647 16.248 C 20.318 15.993,12.408 11.085,12.260 11.044 C 12.057 10.989,11.903 10.992,11.695 11.057 M18.070 17.009 C 18.064 17.025,17.034 17.679,15.780 18.462 C 14.526 19.246,13.388 19.957,13.250 20.044 L 13.000 20.201 13.000 17.003 L 13.000 13.805 15.540 15.392 C 16.937 16.266,18.075 16.993,18.070 17.009 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BugPlay = /*@__PURE__*/ forwardRef<ComponentInternals, BugPlayProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    