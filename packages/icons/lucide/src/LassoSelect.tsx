
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LassoSelectProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-lasso-select" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.200 1.024 C 9.153 1.200,7.785 1.563,6.231 2.343 C 2.167 4.382,0.190 8.329,1.314 12.160 C 1.507 12.821,1.888 13.642,2.243 14.164 C 2.329 14.292,2.400 14.415,2.400 14.439 C 2.400 14.463,2.357 14.568,2.304 14.672 C 2.090 15.094,2.021 15.420,2.021 16.000 C 2.021 16.453,2.036 16.588,2.114 16.840 C 2.369 17.660,2.937 18.325,3.701 18.702 L 4.063 18.879 4.116 19.170 C 4.250 19.902,4.657 20.836,5.133 21.505 C 5.588 22.146,6.382 22.869,6.733 22.964 C 7.405 23.145,8.060 22.589,7.988 21.897 C 7.956 21.588,7.830 21.396,7.438 21.063 C 6.784 20.507,6.358 19.816,6.103 18.900 C 6.085 18.833,6.130 18.795,6.371 18.670 C 6.530 18.588,6.773 18.423,6.912 18.305 L 7.164 18.090 7.610 18.247 C 8.398 18.525,9.680 18.840,10.020 18.840 C 10.617 18.840,11.117 18.181,10.960 17.601 C 10.845 17.174,10.538 16.934,9.960 16.821 C 9.500 16.731,8.947 16.584,8.436 16.417 L 8.012 16.277 7.989 15.849 C 7.974 15.583,7.932 15.313,7.879 15.140 C 7.583 14.183,6.813 13.414,5.861 13.125 C 5.443 12.998,4.646 12.983,4.242 13.095 L 3.985 13.166 3.919 13.079 C 3.763 12.871,3.436 12.187,3.308 11.800 C 3.091 11.143,3.025 10.715,3.025 9.980 C 3.025 9.308,3.059 9.048,3.224 8.466 C 3.764 6.555,5.450 4.815,7.681 3.868 C 10.089 2.845,12.959 2.726,15.459 3.545 C 17.837 4.324,19.649 5.829,20.509 7.740 C 20.842 8.480,20.971 9.087,20.974 9.920 C 20.976 10.557,20.925 10.939,20.758 11.543 C 20.621 12.038,20.684 12.410,20.952 12.694 C 21.202 12.957,21.672 13.071,21.980 12.943 C 22.412 12.763,22.565 12.551,22.734 11.900 C 23.257 9.879,22.975 7.896,21.909 6.091 C 20.298 3.363,17.176 1.512,13.460 1.080 C 13.083 1.036,11.511 0.997,11.200 1.024 M13.780 10.472 C 13.504 10.606,13.233 10.880,13.106 11.153 L 13.020 11.340 13.020 16.680 L 13.020 22.020 13.132 22.248 C 13.426 22.847,14.156 23.151,14.768 22.928 C 15.195 22.773,15.233 22.726,16.517 20.804 L 17.719 19.003 19.890 18.991 L 22.060 18.980 22.261 18.874 C 23.083 18.440,23.247 17.369,22.588 16.732 C 22.267 16.422,15.145 10.618,14.932 10.493 C 14.772 10.399,14.690 10.381,14.382 10.369 C 14.049 10.356,14.001 10.365,13.780 10.472 M17.414 15.060 L 19.763 16.980 18.351 17.002 C 16.842 17.025,16.819 17.028,16.547 17.242 C 16.484 17.291,16.127 17.792,15.752 18.355 C 15.377 18.919,15.054 19.397,15.035 19.418 C 15.015 19.440,15.000 18.103,15.000 16.285 C 15.000 14.540,15.015 13.119,15.033 13.127 C 15.050 13.134,16.122 14.004,17.414 15.060 M5.334 15.064 C 5.698 15.188,6.000 15.613,6.000 16.001 C 6.000 16.331,5.784 16.696,5.484 16.872 C 5.328 16.963,5.254 16.980,5.000 16.980 C 4.746 16.980,4.672 16.963,4.516 16.872 C 3.937 16.531,3.833 15.774,4.301 15.306 C 4.587 15.019,4.952 14.934,5.334 15.064 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const LassoSelect = /*@__PURE__*/ forwardRef<ComponentInternals, LassoSelectProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    