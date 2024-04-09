
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FolderOpenDotProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folder-open-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.042 C 2.853 2.154,2.394 2.398,1.896 2.896 C 1.496 3.296,1.296 3.613,1.125 4.113 L 1.020 4.420 1.020 11.480 L 1.020 18.540 1.114 18.840 C 1.422 19.827,2.173 20.578,3.160 20.886 L 3.460 20.980 11.220 20.980 L 18.980 20.980 19.280 20.886 C 20.250 20.584,20.987 19.878,21.292 18.960 C 21.362 18.750,22.819 13.132,22.926 12.660 C 23.240 11.272,22.505 9.824,21.194 9.250 L 21.009 9.168 20.991 8.294 C 20.974 7.529,20.961 7.385,20.882 7.140 C 20.571 6.172,19.820 5.423,18.861 5.122 L 18.540 5.022 15.180 5.001 L 11.820 4.980 11.631 4.887 C 11.411 4.778,11.357 4.714,10.778 3.860 C 10.194 3.000,9.800 2.602,9.278 2.346 C 8.598 2.012,8.723 2.025,6.060 2.016 C 4.762 2.011,3.609 2.023,3.499 2.042 M8.235 4.062 C 8.518 4.146,8.645 4.285,9.229 5.142 C 9.927 6.168,10.273 6.496,10.943 6.764 C 11.536 7.001,11.491 6.999,14.943 6.999 C 18.531 7.000,18.382 6.988,18.697 7.303 C 18.948 7.554,19.000 7.751,19.000 8.447 L 19.000 9.000 14.063 9.000 C 10.724 9.000,9.025 9.014,8.813 9.044 C 8.046 9.150,7.338 9.563,6.853 10.186 C 6.741 10.330,6.355 11.052,5.851 12.062 C 4.946 13.870,4.928 13.923,5.061 14.322 C 5.189 14.707,5.594 15.000,6.000 15.000 C 6.227 15.000,6.512 14.884,6.679 14.725 C 6.795 14.614,7.015 14.210,7.620 13.000 C 8.475 11.289,8.542 11.188,8.904 11.065 C 9.076 11.006,9.624 11.000,14.600 11.000 C 20.643 11.000,20.343 10.988,20.647 11.240 C 20.729 11.307,20.843 11.461,20.903 11.582 C 20.994 11.769,21.008 11.838,20.990 12.031 C 20.965 12.307,19.429 18.266,19.336 18.450 C 19.244 18.633,19.087 18.793,18.900 18.894 L 18.740 18.980 11.220 18.980 L 3.700 18.980 3.516 18.872 C 3.415 18.813,3.284 18.700,3.225 18.623 C 2.986 18.310,3.000 18.748,3.000 11.525 C 3.000 6.885,3.013 4.853,3.044 4.744 C 3.135 4.416,3.407 4.138,3.726 4.046 C 3.804 4.023,4.734 4.006,5.943 4.004 C 7.718 4.001,8.056 4.009,8.235 4.062 M13.477 13.073 C 12.806 13.249,12.238 13.823,12.060 14.508 C 11.941 14.962,12.003 15.492,12.225 15.930 C 12.361 16.199,12.801 16.639,13.070 16.775 C 13.659 17.073,14.341 17.073,14.930 16.775 C 15.196 16.640,15.638 16.200,15.771 15.937 C 15.994 15.498,16.052 15.007,15.940 14.529 C 15.858 14.182,15.720 13.927,15.465 13.653 C 15.074 13.232,14.560 13.005,14.000 13.005 C 13.857 13.005,13.622 13.036,13.477 13.073 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FolderOpenDot = /*@__PURE__*/ forwardRef<ComponentInternals, FolderOpenDotProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    