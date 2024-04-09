
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CircleUserProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.280 1.023 C 11.203 1.032,10.951 1.059,10.720 1.083 C 8.832 1.283,6.991 2.023,5.360 3.235 C 4.751 3.688,3.684 4.755,3.226 5.367 C 0.728 8.714,0.301 13.032,2.097 16.780 C 2.643 17.918,3.276 18.801,4.238 19.762 C 5.199 20.724,6.000 21.302,7.140 21.860 C 9.904 23.212,12.967 23.366,15.867 22.299 C 16.380 22.110,17.365 21.625,17.820 21.337 C 18.867 20.673,20.077 19.566,20.770 18.637 C 23.744 14.652,23.744 9.348,20.770 5.363 C 20.316 4.755,19.247 3.686,18.640 3.235 C 17.045 2.049,15.365 1.360,13.423 1.096 C 13.000 1.038,11.574 0.990,11.280 1.023 M13.320 3.101 C 15.883 3.488,18.124 4.931,19.560 7.120 C 19.863 7.583,20.303 8.479,20.492 9.020 C 20.838 10.013,20.977 10.865,20.977 12.000 C 20.977 12.888,20.919 13.397,20.733 14.160 C 20.434 15.388,19.826 16.616,19.017 17.626 C 18.652 18.082,18.051 18.692,17.999 18.659 C 17.978 18.646,17.960 18.584,17.960 18.522 C 17.960 18.459,17.922 18.285,17.876 18.134 C 17.582 17.175,16.782 16.387,15.822 16.112 L 15.500 16.020 12.000 16.020 L 8.500 16.020 8.178 16.112 C 7.218 16.387,6.418 17.175,6.124 18.134 C 6.078 18.285,6.040 18.459,6.040 18.522 C 6.040 18.584,6.022 18.646,6.001 18.659 C 5.949 18.692,5.348 18.082,4.983 17.626 C 4.174 16.616,3.566 15.388,3.267 14.160 C 3.081 13.397,3.023 12.888,3.023 12.000 C 3.023 10.507,3.280 9.379,3.920 8.060 C 4.971 5.891,6.877 4.221,9.160 3.466 C 9.865 3.233,10.432 3.118,11.340 3.024 C 11.662 2.991,12.911 3.039,13.320 3.101 M11.358 6.061 C 10.230 6.237,9.143 6.974,8.569 7.953 C 7.320 10.083,8.233 12.785,10.512 13.704 C 12.558 14.528,14.877 13.538,15.704 11.488 C 16.090 10.530,16.090 9.469,15.705 8.516 C 15.172 7.197,14.001 6.269,12.605 6.058 C 12.144 5.989,11.816 5.990,11.358 6.061 M12.523 8.073 C 13.262 8.266,13.850 8.924,13.967 9.690 C 14.067 10.343,13.873 10.933,13.403 11.404 C 13.002 11.807,12.547 12.000,12.000 12.000 C 11.485 12.000,11.038 11.822,10.653 11.465 C 9.323 10.229,10.189 8.005,12.000 8.005 C 12.143 8.005,12.378 8.036,12.523 8.073 M15.310 18.061 C 15.452 18.103,15.571 18.178,15.697 18.303 C 15.951 18.557,16.000 18.748,16.000 19.483 L 16.000 20.071 15.589 20.252 C 13.888 20.996,11.923 21.191,10.092 20.797 C 9.595 20.690,8.758 20.416,8.330 20.220 L 8.000 20.069 8.000 19.482 C 8.000 18.747,8.049 18.557,8.304 18.303 C 8.613 17.993,8.459 18.006,11.983 18.003 C 14.668 18.000,15.134 18.009,15.310 18.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CircleUser = /*@__PURE__*/ forwardRef<ComponentInternals, CircleUserProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    