
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SnailProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-snail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.667 2.065 C 17.406 2.145,17.153 2.401,17.061 2.678 C 16.941 3.039,16.980 3.190,17.435 4.108 L 17.841 4.926 17.661 5.132 C 17.269 5.580,17.047 6.174,17.011 6.870 L 16.988 7.320 16.767 7.070 C 15.345 5.458,13.439 4.424,11.280 4.094 C 10.646 3.997,9.354 3.997,8.720 4.094 C 6.732 4.398,4.996 5.276,3.602 6.680 C 2.898 7.390,2.399 8.092,1.939 9.020 C 0.688 11.542,0.688 14.458,1.939 16.980 C 2.479 18.071,3.170 18.973,4.077 19.773 L 4.334 20.000 3.113 20.000 C 1.784 20.000,1.649 20.017,1.382 20.221 C 1.302 20.282,1.187 20.415,1.128 20.516 C 1.037 20.672,1.020 20.746,1.020 21.000 C 1.020 21.257,1.036 21.327,1.133 21.492 C 1.261 21.710,1.502 21.901,1.725 21.961 C 1.827 21.989,4.034 21.998,8.429 21.988 C 15.643 21.973,15.141 21.990,16.204 21.722 C 19.367 20.926,21.921 18.373,22.722 15.207 C 22.983 14.173,22.980 14.236,22.980 10.160 L 22.980 6.460 22.886 6.160 C 22.763 5.764,22.561 5.386,22.339 5.132 L 22.159 4.926 22.565 4.108 C 23.015 3.200,23.059 3.038,22.944 2.693 C 22.721 2.020,21.876 1.788,21.342 2.252 C 21.231 2.347,21.089 2.588,20.784 3.193 L 20.375 4.007 20.002 4.013 L 19.630 4.020 19.230 3.220 C 18.792 2.343,18.663 2.176,18.336 2.065 C 18.105 1.986,17.923 1.986,17.667 2.065 M11.102 6.098 C 14.099 6.551,16.491 8.985,16.924 12.020 C 16.990 12.483,16.990 13.517,16.924 13.980 C 16.492 17.011,14.157 19.395,11.120 19.905 C 10.669 19.981,9.774 20.015,9.400 19.970 C 9.062 19.929,9.067 19.925,9.620 19.799 C 11.872 19.286,13.779 17.585,14.573 15.380 C 14.871 14.553,14.975 13.952,14.978 13.040 C 14.981 12.100,14.845 11.521,14.433 10.713 C 13.794 9.461,12.610 8.514,11.240 8.161 C 10.307 7.920,9.125 7.983,8.248 8.320 C 7.067 8.774,6.072 9.675,5.526 10.785 C 5.164 11.521,5.020 12.140,5.020 12.960 C 5.021 13.455,5.034 13.584,5.114 13.840 C 5.421 14.826,6.174 15.579,7.160 15.886 C 7.594 16.021,8.406 16.021,8.840 15.886 C 9.827 15.579,10.584 14.821,10.885 13.840 C 10.955 13.611,10.977 13.440,10.978 13.120 C 10.980 12.733,10.971 12.686,10.871 12.514 C 10.568 11.998,9.883 11.854,9.405 12.205 C 9.169 12.379,9.047 12.609,9.002 12.966 C 8.981 13.130,8.945 13.314,8.922 13.375 C 8.851 13.561,8.677 13.758,8.484 13.872 C 8.328 13.963,8.254 13.980,8.000 13.980 C 7.746 13.980,7.672 13.963,7.516 13.872 C 7.135 13.648,6.981 13.318,7.015 12.798 C 7.098 11.553,7.943 10.490,9.139 10.125 C 9.412 10.042,9.542 10.027,10.000 10.027 C 10.458 10.027,10.588 10.042,10.861 10.125 C 12.038 10.484,12.883 11.528,12.984 12.752 C 13.032 13.327,12.893 14.209,12.663 14.793 C 12.033 16.395,10.670 17.541,8.960 17.907 C 8.489 18.008,7.511 18.008,7.040 17.907 C 5.771 17.636,4.677 16.933,3.963 15.932 C 3.137 14.774,2.874 13.591,3.086 11.980 C 3.412 9.500,5.213 7.293,7.620 6.427 C 8.250 6.200,8.715 6.102,9.540 6.023 C 9.813 5.997,10.726 6.041,11.102 6.098 M20.310 6.061 C 20.452 6.103,20.571 6.178,20.697 6.304 C 21.020 6.626,21.007 6.446,20.989 10.329 C 20.972 14.113,20.974 14.072,20.700 14.978 C 20.074 17.044,18.568 18.696,16.587 19.490 C 16.327 19.594,16.097 19.680,16.078 19.680 C 16.059 19.680,16.204 19.517,16.401 19.317 C 17.824 17.872,18.704 16.033,18.941 14.008 C 18.989 13.598,19.000 12.863,19.000 10.198 C 19.000 6.452,18.987 6.619,19.304 6.303 C 19.583 6.024,19.916 5.944,20.310 6.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Snail = /*@__PURE__*/ forwardRef<ComponentInternals, SnailProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    