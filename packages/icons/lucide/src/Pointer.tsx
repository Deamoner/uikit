
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PointerProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.499 1.040 C 6.374 1.244,5.488 2.024,5.114 3.140 L 5.020 3.420 5.009 7.674 C 4.999 11.444,4.991 11.925,4.937 11.904 C 4.598 11.774,4.388 11.742,3.900 11.744 C 3.308 11.746,3.028 11.806,2.588 12.023 C 1.802 12.412,1.216 13.120,0.994 13.949 C 0.885 14.357,0.875 15.066,0.974 15.440 C 1.068 15.797,1.282 16.237,1.495 16.511 C 1.742 16.829,5.710 20.770,6.089 21.075 C 7.511 22.218,9.015 22.793,11.020 22.961 C 11.857 23.031,14.851 22.993,15.380 22.905 C 17.315 22.585,18.995 21.726,20.361 20.361 C 21.737 18.984,22.600 17.285,22.910 15.340 C 22.971 14.959,22.980 14.601,22.980 12.680 C 22.980 10.464,22.980 10.459,22.886 10.160 C 22.580 9.180,21.821 8.417,20.861 8.125 C 20.407 7.988,19.642 7.981,19.187 8.112 C 19.015 8.161,18.804 8.237,18.719 8.281 C 18.633 8.324,18.556 8.360,18.548 8.360 C 18.539 8.360,18.441 8.252,18.330 8.120 C 17.908 7.621,17.432 7.299,16.861 7.125 C 16.407 6.988,15.642 6.981,15.187 7.112 C 15.015 7.161,14.804 7.237,14.719 7.281 C 14.633 7.324,14.556 7.360,14.548 7.360 C 14.539 7.360,14.441 7.252,14.330 7.120 C 13.908 6.621,13.432 6.299,12.861 6.125 C 12.594 6.044,12.452 6.027,12.020 6.025 C 11.713 6.024,11.426 6.044,11.320 6.074 C 11.221 6.102,11.110 6.133,11.073 6.144 C 11.012 6.162,11.005 6.050,10.991 4.792 C 10.976 3.493,10.970 3.405,10.884 3.140 C 10.564 2.162,9.801 1.404,8.861 1.129 C 8.500 1.023,7.832 0.980,7.499 1.040 M8.308 3.060 C 8.438 3.099,8.571 3.179,8.679 3.283 C 8.999 3.594,8.978 3.344,9.000 7.023 L 9.020 10.306 9.141 10.503 C 9.543 11.156,10.457 11.156,10.859 10.503 L 10.980 10.306 11.002 9.523 C 11.027 8.636,11.050 8.547,11.321 8.283 C 11.490 8.120,11.777 8.000,12.000 8.000 C 12.237 8.000,12.514 8.120,12.697 8.303 C 12.957 8.563,13.000 8.741,13.001 9.557 C 13.002 10.137,13.012 10.242,13.083 10.400 C 13.193 10.642,13.340 10.791,13.580 10.905 C 14.220 11.207,14.996 10.733,14.999 10.037 C 15.002 9.479,15.464 9.000,16.000 9.000 C 16.237 9.000,16.514 9.120,16.697 9.303 C 16.957 9.563,17.000 9.741,17.001 10.557 C 17.002 11.283,17.041 11.448,17.272 11.695 C 17.643 12.091,18.357 12.091,18.728 11.695 C 18.877 11.535,18.998 11.251,18.999 11.057 C 19.002 10.595,19.290 10.180,19.690 10.061 C 19.947 9.985,20.053 9.985,20.310 10.061 C 20.452 10.103,20.571 10.178,20.697 10.304 C 21.010 10.616,21.011 10.628,20.989 12.834 C 20.974 14.302,20.955 14.818,20.908 15.080 C 20.628 16.636,19.991 17.881,18.936 18.936 C 18.024 19.848,16.927 20.469,15.687 20.776 C 14.916 20.967,14.728 20.980,12.820 20.980 C 11.296 20.980,10.952 20.969,10.577 20.910 C 9.406 20.724,8.582 20.398,7.670 19.762 C 7.173 19.415,3.113 15.393,2.993 15.130 C 2.897 14.917,2.890 14.549,2.979 14.336 C 3.060 14.141,3.251 13.939,3.460 13.828 C 3.671 13.715,4.116 13.709,4.320 13.815 C 4.397 13.855,4.901 14.325,5.440 14.860 C 5.979 15.394,6.481 15.862,6.555 15.899 C 7.009 16.128,7.601 15.944,7.867 15.492 C 7.964 15.327,7.980 15.257,7.980 15.000 C 7.980 14.614,7.898 14.471,7.383 13.961 L 7.000 13.582 7.000 8.718 C 7.000 3.242,6.978 3.628,7.307 3.299 C 7.582 3.024,7.918 2.944,8.308 3.060 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Pointer = /*@__PURE__*/ forwardRef<ComponentInternals, PointerProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    