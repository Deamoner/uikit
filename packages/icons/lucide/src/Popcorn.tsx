
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PopcornProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-popcorn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.499 1.040 C 6.541 1.214,5.723 1.828,5.314 2.680 C 5.225 2.867,5.139 3.044,5.125 3.074 C 5.110 3.104,5.015 3.160,4.914 3.199 C 4.296 3.433,3.657 4.003,3.344 4.600 C 3.092 5.079,3.021 5.391,3.021 6.000 C 3.021 6.455,3.036 6.589,3.117 6.851 C 3.169 7.022,3.205 7.166,3.196 7.171 C 2.672 7.503,2.424 7.788,2.278 8.225 C 2.108 8.738,2.069 8.521,3.538 15.300 C 4.753 20.912,4.894 21.528,5.024 21.794 C 5.299 22.356,5.886 22.809,6.510 22.941 C 6.920 23.028,17.061 23.027,17.431 22.940 C 18.199 22.758,18.910 22.111,19.119 21.400 C 19.161 21.257,19.783 18.431,20.500 15.120 C 21.926 8.537,21.891 8.733,21.721 8.223 C 21.576 7.788,21.328 7.503,20.804 7.171 C 20.795 7.166,20.831 7.022,20.883 6.851 C 20.964 6.589,20.979 6.455,20.979 6.000 C 20.979 5.391,20.908 5.079,20.656 4.600 C 20.343 4.003,19.704 3.433,19.086 3.199 C 18.985 3.160,18.890 3.104,18.875 3.074 C 18.861 3.044,18.775 2.867,18.686 2.680 C 18.335 1.949,17.650 1.365,16.861 1.125 C 16.405 0.987,15.643 0.981,15.180 1.113 C 14.825 1.215,14.429 1.416,14.170 1.627 L 14.000 1.765 13.830 1.627 C 13.571 1.416,13.175 1.214,12.820 1.114 C 12.366 0.985,11.634 0.985,11.180 1.114 C 10.825 1.214,10.429 1.416,10.170 1.627 L 10.000 1.765 9.830 1.627 C 9.575 1.419,9.176 1.215,8.840 1.121 C 8.498 1.025,7.812 0.984,7.499 1.040 M8.308 3.060 C 8.541 3.129,8.815 3.370,8.905 3.585 C 8.936 3.661,8.980 3.862,9.001 4.031 C 9.049 4.410,9.184 4.647,9.452 4.828 C 9.786 5.052,10.214 5.052,10.548 4.828 C 10.816 4.647,10.951 4.410,10.999 4.031 C 11.049 3.636,11.114 3.485,11.321 3.283 C 11.490 3.120,11.777 3.000,12.000 3.000 C 12.223 3.000,12.510 3.120,12.679 3.283 C 12.886 3.485,12.951 3.636,13.001 4.031 C 13.049 4.410,13.184 4.647,13.452 4.828 C 13.786 5.052,14.214 5.052,14.548 4.828 C 14.817 4.646,14.954 4.405,14.996 4.038 C 15.039 3.656,15.113 3.486,15.321 3.283 C 15.490 3.120,15.777 3.000,16.000 3.000 C 16.223 3.000,16.510 3.120,16.679 3.283 C 16.886 3.485,16.951 3.636,17.001 4.031 C 17.029 4.249,17.073 4.392,17.151 4.520 C 17.294 4.752,17.585 4.948,17.831 4.979 C 18.227 5.028,18.436 5.087,18.574 5.192 C 19.162 5.634,19.117 6.500,18.486 6.871 L 18.300 6.980 11.997 6.980 L 5.694 6.980 5.502 6.860 C 5.002 6.547,4.858 5.905,5.183 5.436 C 5.378 5.154,5.609 5.047,6.169 4.979 C 6.606 4.925,6.938 4.547,6.996 4.038 C 7.039 3.656,7.113 3.486,7.322 3.283 C 7.588 3.024,7.928 2.947,8.308 3.060 M8.080 9.103 C 8.080 9.160,8.269 11.849,8.500 15.080 C 8.731 18.311,8.920 20.964,8.920 20.977 C 8.920 20.990,8.463 21.000,7.905 21.000 C 7.111 21.000,6.880 20.988,6.846 20.947 C 6.810 20.904,4.240 9.156,4.240 9.036 C 4.240 9.015,5.056 9.000,6.160 9.000 L 8.080 9.000 8.080 9.103 M13.920 9.023 C 13.920 9.036,13.731 11.689,13.500 14.920 C 13.269 18.151,13.080 20.840,13.080 20.897 L 13.080 21.000 12.000 21.000 L 10.920 21.000 10.920 20.897 C 10.920 20.840,10.731 18.151,10.500 14.920 C 10.269 11.689,10.080 9.036,10.080 9.023 C 10.080 9.010,10.944 9.000,12.000 9.000 C 13.056 9.000,13.920 9.010,13.920 9.023 M19.760 9.030 C 19.761 9.046,19.191 11.697,18.494 14.920 C 17.351 20.207,17.218 20.791,17.126 20.890 L 17.025 21.000 16.053 21.000 C 15.518 21.000,15.080 20.990,15.080 20.977 C 15.080 20.964,15.269 18.311,15.500 15.080 C 15.731 11.849,15.920 9.160,15.920 9.103 L 15.920 9.000 17.840 9.000 C 18.896 9.000,19.760 9.014,19.760 9.030 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Popcorn = /*@__PURE__*/ forwardRef<ComponentInternals, PopcornProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    