
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ReceiptTextProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.664 1.060 C 3.433 1.148,3.256 1.299,3.131 1.511 L 3.020 1.700 3.010 11.915 C 3.003 18.663,3.013 22.180,3.040 22.278 C 3.099 22.498,3.291 22.739,3.508 22.867 C 3.670 22.962,3.744 22.980,3.985 22.980 C 4.268 22.980,4.280 22.975,5.135 22.551 L 6.000 22.122 6.864 22.551 C 7.707 22.969,7.736 22.980,8.000 22.980 C 8.264 22.980,8.293 22.969,9.136 22.551 L 10.000 22.122 10.864 22.551 C 11.707 22.969,11.736 22.980,12.000 22.980 C 12.264 22.980,12.293 22.969,13.136 22.551 L 14.000 22.122 14.864 22.551 C 15.707 22.969,15.736 22.980,16.000 22.980 C 16.264 22.980,16.293 22.969,17.136 22.551 L 18.000 22.122 18.855 22.546 C 19.812 23.021,19.958 23.060,20.322 22.939 C 20.595 22.849,20.847 22.601,20.935 22.335 C 20.995 22.154,21.000 21.303,20.990 11.919 L 20.980 1.700 20.871 1.514 C 20.665 1.163,20.248 0.960,19.856 1.018 C 19.749 1.035,19.334 1.215,18.838 1.462 L 18.000 1.878 17.136 1.449 C 16.293 1.031,16.264 1.020,16.000 1.020 C 15.736 1.020,15.707 1.031,14.864 1.449 L 14.000 1.878 13.136 1.449 C 12.293 1.031,12.264 1.020,12.000 1.020 C 11.736 1.020,11.707 1.031,10.864 1.449 L 10.000 1.878 9.136 1.449 C 8.293 1.031,8.264 1.020,8.000 1.020 C 7.736 1.020,7.707 1.031,6.864 1.449 L 6.000 1.878 5.150 1.456 C 4.415 1.091,4.267 1.032,4.060 1.017 C 3.906 1.007,3.764 1.022,3.664 1.060 M8.863 3.550 C 9.707 3.969,9.736 3.980,10.000 3.980 C 10.264 3.980,10.293 3.969,11.136 3.551 L 12.000 3.122 12.864 3.551 C 13.707 3.969,13.736 3.980,14.000 3.980 C 14.264 3.980,14.293 3.969,15.136 3.551 L 16.000 3.122 16.864 3.551 C 17.702 3.967,17.737 3.980,17.994 3.980 C 18.225 3.980,18.307 3.957,18.614 3.810 C 18.808 3.716,18.975 3.640,18.984 3.640 C 18.993 3.640,19.000 7.402,19.000 12.000 C 19.000 16.598,18.993 20.360,18.984 20.360 C 18.975 20.360,18.808 20.284,18.614 20.190 C 18.307 20.043,18.225 20.020,17.994 20.020 C 17.737 20.020,17.702 20.033,16.864 20.449 L 16.000 20.878 15.136 20.449 C 14.293 20.031,14.264 20.020,14.000 20.020 C 13.736 20.020,13.707 20.031,12.864 20.449 L 12.000 20.878 11.136 20.449 C 10.293 20.031,10.264 20.020,10.000 20.020 C 9.736 20.020,9.707 20.031,8.864 20.449 L 8.000 20.878 7.136 20.449 C 6.298 20.033,6.263 20.020,6.006 20.020 C 5.775 20.020,5.693 20.043,5.386 20.190 C 5.192 20.284,5.025 20.360,5.016 20.360 C 5.007 20.360,5.000 16.598,5.000 12.000 C 5.000 7.402,5.007 3.640,5.016 3.640 C 5.025 3.640,5.192 3.716,5.386 3.810 C 5.693 3.957,5.775 3.980,6.006 3.980 C 6.263 3.980,6.297 3.967,7.126 3.553 C 7.596 3.318,7.984 3.124,7.988 3.123 C 7.993 3.121,8.386 3.314,8.863 3.550 M7.695 7.057 C 7.466 7.129,7.256 7.299,7.128 7.516 C 7.037 7.672,7.020 7.746,7.020 8.000 C 7.020 8.256,7.036 8.328,7.131 8.489 C 7.256 8.702,7.449 8.864,7.670 8.943 C 7.891 9.022,14.109 9.022,14.330 8.943 C 14.551 8.864,14.744 8.702,14.869 8.489 C 14.964 8.328,14.980 8.256,14.980 8.000 C 14.980 7.746,14.963 7.672,14.872 7.516 C 14.740 7.293,14.533 7.128,14.290 7.055 C 14.030 6.977,7.945 6.979,7.695 7.057 M7.695 11.057 C 7.466 11.129,7.256 11.299,7.128 11.516 C 7.037 11.672,7.020 11.746,7.020 12.000 C 7.020 12.256,7.036 12.328,7.131 12.489 C 7.256 12.702,7.449 12.864,7.670 12.943 C 7.892 13.022,16.108 13.022,16.330 12.943 C 16.551 12.864,16.744 12.702,16.869 12.489 C 16.964 12.328,16.980 12.256,16.980 12.000 C 16.980 11.746,16.963 11.672,16.872 11.516 C 16.740 11.293,16.533 11.128,16.290 11.055 C 16.029 10.976,7.946 10.979,7.695 11.057 M7.695 15.057 C 7.466 15.129,7.256 15.299,7.128 15.516 C 7.037 15.672,7.020 15.746,7.020 16.000 C 7.020 16.256,7.036 16.328,7.131 16.489 C 7.256 16.702,7.449 16.864,7.670 16.943 C 7.890 17.021,13.110 17.021,13.330 16.943 C 13.551 16.864,13.744 16.702,13.869 16.489 C 13.964 16.328,13.980 16.256,13.980 16.000 C 13.980 15.746,13.963 15.672,13.872 15.516 C 13.740 15.293,13.533 15.128,13.290 15.055 C 13.031 14.977,7.944 14.979,7.695 15.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ReceiptText = /*@__PURE__*/ forwardRef<ComponentInternals, ReceiptTextProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    