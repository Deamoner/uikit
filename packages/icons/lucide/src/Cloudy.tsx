
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CloudyProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-cloudy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.824 2.044 C 8.277 2.312,6.137 4.045,5.323 6.497 L 5.164 6.975 4.872 7.153 C 3.560 7.953,2.491 9.123,1.826 10.489 C 0.729 12.744,0.734 15.291,1.841 17.543 C 2.973 19.848,5.119 21.431,7.760 21.910 C 8.050 21.963,8.805 21.974,12.940 21.989 C 16.462 22.001,17.878 21.993,18.140 21.960 C 19.387 21.799,20.456 21.285,21.340 20.420 C 22.959 18.835,23.435 16.495,22.570 14.376 C 22.033 13.062,20.895 11.946,19.539 11.403 C 18.801 11.108,18.139 11.001,17.052 10.999 L 16.420 10.998 16.220 10.570 C 15.297 8.594,13.498 7.030,11.400 6.381 C 10.671 6.155,10.128 6.060,9.320 6.017 C 8.867 5.992,7.953 6.044,7.744 6.106 C 7.624 6.142,7.962 5.690,8.315 5.340 C 8.728 4.934,9.025 4.718,9.500 4.480 C 10.391 4.035,11.469 3.896,12.442 4.100 C 13.507 4.325,14.536 5.002,15.165 5.894 C 15.424 6.260,15.576 6.559,15.761 7.070 C 15.934 7.545,15.988 7.636,16.179 7.782 C 16.448 7.987,16.520 7.996,17.940 8.001 C 19.423 8.005,19.598 8.029,20.017 8.281 C 20.319 8.463,20.643 8.816,20.797 9.129 C 20.911 9.362,20.945 9.522,21.021 10.165 C 21.051 10.412,21.236 10.694,21.465 10.839 C 21.938 11.139,22.558 10.992,22.856 10.508 C 22.956 10.345,22.977 10.264,22.991 9.988 C 23.021 9.393,22.784 8.540,22.421 7.932 C 22.066 7.337,21.440 6.761,20.804 6.443 C 20.093 6.088,19.611 6.001,18.357 6.000 L 17.495 6.000 17.408 5.790 C 17.163 5.200,16.584 4.390,16.019 3.846 C 14.615 2.495,12.733 1.843,10.824 2.044 M9.648 8.044 C 11.547 8.247,13.280 9.385,14.208 11.037 C 14.398 11.377,14.526 11.664,14.740 12.235 C 14.866 12.570,15.020 12.766,15.256 12.892 C 15.412 12.975,15.485 12.980,16.760 13.004 C 17.942 13.026,18.136 13.038,18.405 13.111 C 19.390 13.379,20.233 14.096,20.678 15.046 C 20.906 15.532,20.978 15.881,20.978 16.500 C 20.978 17.119,20.906 17.468,20.678 17.954 C 20.232 18.907,19.459 19.569,18.420 19.892 C 18.140 19.978,18.134 19.979,13.420 19.992 C 10.077 20.001,8.589 19.992,8.320 19.959 C 7.384 19.848,6.449 19.501,5.640 18.965 C 5.141 18.635,4.357 17.842,4.023 17.331 C 2.996 15.761,2.739 13.891,3.307 12.140 C 3.605 11.224,4.073 10.475,4.795 9.760 C 5.359 9.202,5.731 8.934,6.380 8.620 C 7.446 8.105,8.493 7.920,9.648 8.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Cloudy = /*@__PURE__*/ forwardRef<ComponentInternals, CloudyProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    