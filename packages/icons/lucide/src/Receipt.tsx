
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ReceiptProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-receipt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.664 1.060 C 3.433 1.148,3.256 1.299,3.131 1.511 L 3.020 1.700 3.010 11.915 C 3.003 18.663,3.013 22.180,3.040 22.278 C 3.099 22.498,3.291 22.739,3.508 22.867 C 3.670 22.962,3.744 22.980,3.985 22.980 C 4.268 22.980,4.280 22.975,5.135 22.551 L 6.000 22.122 6.864 22.551 C 7.707 22.969,7.736 22.980,8.000 22.980 C 8.264 22.980,8.293 22.969,9.136 22.551 L 10.000 22.122 10.864 22.551 C 11.707 22.969,11.736 22.980,12.000 22.980 C 12.264 22.980,12.293 22.969,13.136 22.551 L 14.000 22.122 14.864 22.551 C 15.707 22.969,15.736 22.980,16.000 22.980 C 16.264 22.980,16.293 22.969,17.136 22.551 L 18.000 22.122 18.855 22.546 C 19.812 23.021,19.958 23.060,20.322 22.939 C 20.595 22.849,20.847 22.601,20.935 22.335 C 20.995 22.154,21.000 21.303,20.990 11.919 L 20.980 1.700 20.871 1.514 C 20.665 1.163,20.248 0.960,19.856 1.018 C 19.749 1.035,19.334 1.215,18.838 1.462 L 18.000 1.878 17.136 1.449 C 16.293 1.031,16.264 1.020,16.000 1.020 C 15.736 1.020,15.707 1.031,14.864 1.449 L 14.000 1.878 13.136 1.449 C 12.293 1.031,12.264 1.020,12.000 1.020 C 11.736 1.020,11.707 1.031,10.864 1.449 L 10.000 1.878 9.136 1.449 C 8.293 1.031,8.264 1.020,8.000 1.020 C 7.736 1.020,7.707 1.031,6.864 1.449 L 6.000 1.878 5.150 1.456 C 4.415 1.091,4.267 1.032,4.060 1.017 C 3.906 1.007,3.764 1.022,3.664 1.060 M8.863 3.550 C 9.707 3.969,9.736 3.980,10.000 3.980 C 10.264 3.980,10.293 3.969,11.136 3.551 L 12.000 3.122 12.864 3.551 C 13.707 3.969,13.736 3.980,14.000 3.980 C 14.264 3.980,14.293 3.969,15.136 3.551 L 16.000 3.122 16.864 3.551 C 17.702 3.967,17.737 3.980,17.994 3.980 C 18.225 3.980,18.307 3.957,18.614 3.810 C 18.808 3.716,18.975 3.640,18.984 3.640 C 18.993 3.640,19.000 7.402,19.000 12.000 C 19.000 16.598,18.993 20.360,18.984 20.360 C 18.975 20.360,18.808 20.284,18.614 20.190 C 18.307 20.043,18.225 20.020,17.994 20.020 C 17.737 20.020,17.702 20.033,16.864 20.449 L 16.000 20.878 15.136 20.449 C 14.293 20.031,14.264 20.020,14.000 20.020 C 13.736 20.020,13.707 20.031,12.864 20.449 L 12.000 20.878 11.136 20.449 C 10.293 20.031,10.264 20.020,10.000 20.020 C 9.736 20.020,9.707 20.031,8.864 20.449 L 8.000 20.878 7.136 20.449 C 6.298 20.033,6.263 20.020,6.006 20.020 C 5.775 20.020,5.693 20.043,5.386 20.190 C 5.192 20.284,5.025 20.360,5.016 20.360 C 5.007 20.360,5.000 16.598,5.000 12.000 C 5.000 7.402,5.007 3.640,5.016 3.640 C 5.025 3.640,5.192 3.716,5.386 3.810 C 5.693 3.957,5.775 3.980,6.006 3.980 C 6.263 3.980,6.297 3.967,7.126 3.553 C 7.596 3.318,7.984 3.124,7.988 3.123 C 7.993 3.121,8.386 3.314,8.863 3.550 M11.600 5.584 C 11.399 5.671,11.205 5.869,11.095 6.100 C 11.019 6.262,11.001 6.366,11.000 6.645 L 11.000 6.991 10.230 7.010 C 9.567 7.027,9.416 7.043,9.139 7.126 C 8.181 7.415,7.419 8.180,7.114 9.160 C 6.979 9.594,6.979 10.406,7.114 10.840 C 7.418 11.817,8.165 12.570,9.140 12.882 C 9.379 12.958,9.536 12.974,10.210 12.990 L 11.000 13.009 11.000 14.005 L 11.000 15.000 9.446 15.000 C 7.758 15.000,7.658 15.011,7.382 15.221 C 7.302 15.282,7.187 15.415,7.128 15.516 C 7.037 15.672,7.020 15.746,7.020 16.000 C 7.020 16.256,7.036 16.328,7.131 16.489 C 7.192 16.592,7.304 16.725,7.381 16.783 C 7.654 16.991,7.700 16.996,9.410 16.998 L 11.000 17.000 11.000 17.350 C 11.001 17.635,11.018 17.737,11.095 17.900 C 11.276 18.281,11.595 18.488,12.000 18.488 C 12.405 18.488,12.724 18.281,12.905 17.900 C 12.981 17.738,12.999 17.634,13.000 17.355 L 13.000 17.009 13.790 16.990 C 14.464 16.974,14.621 16.958,14.860 16.882 C 15.835 16.570,16.582 15.817,16.886 14.840 C 17.021 14.406,17.021 13.594,16.886 13.160 C 16.581 12.180,15.819 11.415,14.861 11.126 C 14.584 11.043,14.433 11.027,13.770 11.010 L 13.000 10.991 13.000 9.995 L 13.000 9.000 14.590 8.998 C 16.300 8.996,16.346 8.991,16.619 8.783 C 16.696 8.725,16.808 8.592,16.869 8.489 C 16.964 8.328,16.980 8.256,16.980 8.000 C 16.980 7.746,16.963 7.672,16.872 7.516 C 16.813 7.415,16.698 7.282,16.618 7.221 C 16.342 7.011,16.242 7.000,14.554 7.000 L 13.000 7.000 13.000 6.650 C 12.999 6.365,12.982 6.263,12.905 6.100 C 12.793 5.865,12.599 5.669,12.391 5.582 C 12.203 5.503,11.783 5.504,11.600 5.584 M11.000 10.003 L 11.000 11.007 10.350 10.993 C 9.728 10.981,9.692 10.975,9.516 10.872 C 8.935 10.530,8.833 9.774,9.304 9.303 C 9.554 9.052,9.727 9.006,10.430 9.003 L 11.000 9.000 11.000 10.003 M14.310 13.061 C 14.688 13.173,15.000 13.598,15.000 14.001 C 15.000 14.331,14.784 14.696,14.484 14.872 C 14.308 14.975,14.272 14.981,13.650 14.993 L 13.000 15.007 13.000 14.003 L 13.000 13.000 13.553 13.000 C 13.931 13.000,14.170 13.019,14.310 13.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Receipt = /*@__PURE__*/ forwardRef<ComponentInternals, ReceiptProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    