
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Flower2Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-flower-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.358 1.061 C 6.150 1.405,4.636 3.582,5.082 5.772 C 5.243 6.562,5.566 7.174,6.155 7.810 L 6.331 8.000 6.155 8.190 C 5.736 8.642,5.513 8.983,5.301 9.495 C 4.460 11.526,5.458 13.876,7.512 14.704 C 8.231 14.994,9.023 15.070,9.757 14.921 C 10.120 14.847,10.811 14.602,10.898 14.517 C 10.919 14.497,10.950 14.480,10.968 14.480 C 10.986 14.480,11.000 15.199,11.000 16.078 L 11.000 17.675 10.610 17.415 C 9.370 16.586,7.869 16.154,5.811 16.034 C 4.886 15.980,4.677 16.005,4.405 16.205 C 4.037 16.476,3.943 16.855,4.037 17.684 C 4.190 19.026,4.690 20.059,5.625 20.959 C 7.021 22.304,9.192 22.998,12.000 22.998 C 14.785 22.998,16.961 22.309,18.348 20.987 C 18.851 20.508,19.158 20.091,19.448 19.495 C 19.714 18.947,19.885 18.344,19.962 17.683 C 20.058 16.858,19.963 16.476,19.595 16.205 C 19.322 16.005,19.114 15.980,18.189 16.034 C 16.122 16.156,14.633 16.584,13.390 17.415 L 13.000 17.675 13.000 16.078 C 13.000 15.199,13.014 14.480,13.032 14.480 C 13.050 14.480,13.081 14.497,13.102 14.517 C 13.123 14.538,13.300 14.619,13.496 14.698 C 15.563 15.529,17.871 14.548,18.705 12.484 C 19.090 11.531,19.090 10.470,18.704 9.512 C 18.495 8.995,18.271 8.649,17.845 8.190 L 17.669 8.000 17.845 7.810 C 18.271 7.351,18.495 7.005,18.704 6.488 C 19.090 5.530,19.090 4.469,18.705 3.516 C 18.172 2.197,17.001 1.269,15.605 1.058 C 15.121 0.986,14.879 0.986,14.395 1.058 C 13.581 1.181,12.832 1.552,12.192 2.151 L 12.000 2.331 11.808 2.151 C 11.168 1.552,10.419 1.181,9.605 1.058 C 9.144 0.989,8.816 0.990,8.358 1.061 M9.523 3.073 C 10.022 3.203,10.516 3.599,10.772 4.071 C 10.892 4.293,10.998 4.719,10.999 4.983 L 11.000 5.145 10.670 5.313 C 10.091 5.607,9.597 6.102,9.312 6.670 L 9.147 7.000 8.942 7.000 C 8.112 7.000,7.289 6.350,7.073 5.523 C 6.683 4.028,8.028 2.683,9.523 3.073 M15.523 3.073 C 16.262 3.266,16.850 3.924,16.967 4.690 C 17.067 5.343,16.873 5.933,16.403 6.404 C 16.018 6.790,15.545 7.000,15.058 7.000 L 14.853 7.000 14.688 6.670 C 14.403 6.102,13.909 5.607,13.330 5.313 L 13.000 5.145 13.000 4.971 C 13.000 4.681,13.116 4.262,13.265 4.014 C 13.745 3.212,14.635 2.841,15.523 3.073 M12.310 7.061 C 12.688 7.173,13.000 7.598,13.000 8.001 C 13.000 8.331,12.784 8.696,12.484 8.872 C 12.328 8.963,12.254 8.980,12.000 8.980 C 11.746 8.980,11.672 8.963,11.516 8.872 C 10.935 8.530,10.833 7.774,11.304 7.303 C 11.583 7.024,11.916 6.944,12.310 7.061 M9.312 9.330 C 9.597 9.900,10.100 10.403,10.670 10.688 L 11.000 10.853 10.999 11.017 C 10.998 11.280,10.892 11.706,10.772 11.931 C 10.625 12.208,10.191 12.643,9.930 12.775 C 9.159 13.166,8.279 13.046,7.653 12.465 C 6.665 11.547,6.829 9.981,7.987 9.279 C 8.247 9.122,8.648 9.006,8.943 9.002 L 9.147 9.000 9.312 9.330 M15.523 9.073 C 16.262 9.266,16.850 9.924,16.967 10.690 C 17.067 11.343,16.873 11.933,16.403 12.404 C 16.002 12.807,15.547 13.000,15.000 13.000 C 14.485 13.000,14.038 12.822,13.653 12.465 C 13.250 12.091,13.008 11.567,13.002 11.057 L 13.000 10.853 13.330 10.688 C 13.900 10.403,14.403 9.900,14.688 9.330 L 14.853 9.000 15.057 9.002 C 15.168 9.004,15.378 9.036,15.523 9.073 M6.580 18.100 C 7.272 18.167,8.353 18.456,8.860 18.709 C 9.448 19.003,9.982 19.408,10.272 19.780 C 10.553 20.138,10.905 20.868,10.833 20.940 C 10.822 20.951,10.616 20.934,10.374 20.902 C 8.284 20.626,6.920 19.835,6.319 18.550 C 6.255 18.413,6.190 18.239,6.175 18.165 C 6.151 18.046,6.157 18.033,6.224 18.052 C 6.266 18.064,6.426 18.086,6.580 18.100 M17.825 18.170 C 17.786 18.374,17.501 18.923,17.299 19.184 C 16.603 20.081,15.329 20.677,13.626 20.902 C 13.384 20.934,13.178 20.951,13.167 20.940 C 13.093 20.866,13.451 20.132,13.739 19.765 C 14.403 18.921,15.731 18.313,17.376 18.101 C 17.598 18.072,17.796 18.047,17.815 18.044 C 17.834 18.042,17.839 18.098,17.825 18.170 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Flower2 = /*@__PURE__*/ forwardRef<ComponentInternals, Flower2Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    