
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FolderSearchProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folder-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.042 C 2.376 2.236,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 11.500 L 1.020 18.540 1.114 18.840 C 1.418 19.816,2.150 20.554,3.140 20.886 L 3.420 20.980 7.140 20.991 C 11.293 21.004,11.044 21.020,11.373 20.724 C 11.581 20.536,11.688 20.292,11.688 20.003 C 11.688 19.615,11.494 19.298,11.140 19.106 C 10.980 19.020,10.977 19.020,7.340 19.000 L 3.700 18.980 3.516 18.872 C 3.303 18.747,3.141 18.550,3.058 18.316 C 2.968 18.060,2.971 4.993,3.061 4.690 C 3.144 4.411,3.411 4.144,3.690 4.061 C 3.979 3.975,7.928 3.970,8.211 4.055 C 8.507 4.144,8.610 4.247,9.046 4.890 C 9.684 5.829,9.891 6.093,10.166 6.316 C 10.497 6.583,10.975 6.817,11.400 6.918 C 11.730 6.997,11.861 6.999,15.923 7.000 C 20.649 7.000,20.376 6.983,20.697 7.303 C 21.003 7.610,21.000 7.578,21.000 10.097 L 21.001 12.300 21.095 12.500 C 21.276 12.882,21.595 13.088,22.003 13.088 C 22.292 13.088,22.536 12.981,22.724 12.773 C 23.014 12.451,23.006 12.542,22.991 9.839 C 22.978 7.431,22.978 7.419,22.885 7.140 C 22.560 6.161,21.820 5.424,20.861 5.122 L 20.540 5.021 16.160 5.000 L 11.780 4.980 11.613 4.891 C 11.409 4.781,11.285 4.629,10.759 3.840 C 10.204 3.007,9.805 2.605,9.278 2.346 C 8.596 2.011,8.723 2.024,6.060 2.015 C 4.762 2.011,3.609 2.023,3.499 2.042 M16.358 13.061 C 15.230 13.237,14.143 13.974,13.569 14.953 C 12.320 17.083,13.233 19.785,15.512 20.704 C 16.473 21.091,17.529 21.090,18.494 20.701 C 18.684 20.625,18.881 20.535,18.932 20.502 C 19.020 20.444,19.041 20.460,19.681 21.104 C 20.044 21.468,20.416 21.810,20.508 21.865 C 20.967 22.139,21.587 21.968,21.867 21.492 C 21.964 21.327,21.980 21.257,21.980 21.000 C 21.980 20.589,21.910 20.484,21.104 19.681 C 20.460 19.041,20.444 19.020,20.502 18.932 C 20.627 18.740,20.844 18.132,20.921 17.757 C 21.070 17.024,20.994 16.230,20.705 15.516 C 20.172 14.197,19.001 13.269,17.605 13.058 C 17.144 12.989,16.816 12.990,16.358 13.061 M17.523 15.073 C 18.262 15.266,18.850 15.924,18.967 16.690 C 19.067 17.343,18.873 17.933,18.403 18.404 C 18.002 18.807,17.547 19.000,17.000 19.000 C 16.485 19.000,16.038 18.822,15.653 18.465 C 14.323 17.229,15.189 15.005,17.000 15.005 C 17.143 15.005,17.378 15.036,17.523 15.073 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FolderSearch = /*@__PURE__*/ forwardRef<ComponentInternals, FolderSearchProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    