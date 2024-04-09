
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DraftingCompassProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-drafting-compass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.499 2.040 C 10.363 2.246,9.460 3.049,9.114 4.160 C 8.979 4.594,8.979 5.407,9.114 5.839 C 9.231 6.213,9.364 6.479,9.568 6.753 C 9.655 6.870,9.718 6.988,9.707 7.016 C 9.689 7.064,6.803 12.206,6.780 12.232 C 6.762 12.252,6.286 11.846,5.887 11.471 C 5.465 11.074,5.235 10.970,4.875 11.013 C 4.181 11.095,3.783 11.895,4.137 12.499 C 4.252 12.695,4.885 13.299,5.400 13.702 C 5.587 13.849,5.746 13.984,5.753 14.003 C 5.760 14.022,4.927 15.530,3.901 17.355 C 1.831 21.035,1.909 20.866,2.060 21.321 C 2.299 22.040,3.297 22.227,3.762 21.640 C 3.823 21.563,4.686 20.051,5.681 18.280 C 6.676 16.509,7.496 15.048,7.504 15.034 C 7.513 15.020,7.677 15.077,7.870 15.159 C 8.633 15.487,9.615 15.760,10.560 15.907 C 11.208 16.007,12.792 16.007,13.440 15.907 C 15.795 15.542,17.850 14.531,19.460 12.945 C 19.875 12.537,19.957 12.405,19.988 12.101 C 20.046 11.539,19.572 11.000,19.020 11.000 C 18.696 11.000,18.507 11.104,18.035 11.544 C 16.986 12.520,15.985 13.128,14.735 13.545 C 12.780 14.199,10.793 14.148,8.830 13.393 C 8.660 13.328,8.520 13.262,8.521 13.247 C 8.521 13.232,9.184 12.043,9.995 10.604 L 11.468 7.987 12.004 7.987 L 12.540 7.987 13.312 9.363 C 13.737 10.121,14.142 10.801,14.212 10.875 C 14.571 11.255,15.173 11.272,15.581 10.914 C 15.850 10.678,15.976 10.275,15.885 9.940 C 15.862 9.852,15.491 9.152,15.061 8.385 C 14.631 7.618,14.280 6.983,14.280 6.973 C 14.280 6.964,14.350 6.863,14.436 6.748 C 14.637 6.479,14.769 6.211,14.886 5.839 C 15.021 5.407,15.021 4.594,14.886 4.160 C 14.581 3.179,13.810 2.407,12.861 2.129 C 12.500 2.023,11.832 1.980,11.499 2.040 M12.310 4.061 C 12.688 4.173,13.000 4.598,13.000 5.001 C 13.000 5.331,12.789 5.687,12.487 5.868 C 12.327 5.964,12.257 5.980,12.000 5.980 C 11.743 5.980,11.673 5.964,11.513 5.868 C 10.933 5.521,10.833 4.774,11.304 4.303 C 11.583 4.024,11.916 3.944,12.310 4.061 M18.500 16.231 C 18.081 16.371,17.805 16.812,17.852 17.269 C 17.872 17.463,18.004 17.718,19.001 19.494 C 19.620 20.597,20.177 21.563,20.238 21.640 C 20.703 22.227,21.701 22.040,21.940 21.321 C 22.085 20.883,22.092 20.899,20.833 18.649 C 20.073 17.292,19.646 16.571,19.537 16.459 C 19.264 16.179,18.899 16.099,18.500 16.231 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const DraftingCompass = /*@__PURE__*/ forwardRef<ComponentInternals, DraftingCompassProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    