
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ArrowUpAZProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-arrow-up-a-z" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.580 3.096 C 6.422 3.172,5.940 3.634,4.274 5.306 C 3.116 6.469,2.138 7.481,2.101 7.555 C 1.872 8.010,2.056 8.601,2.508 8.867 C 2.673 8.964,2.742 8.980,3.000 8.979 C 3.213 8.979,3.341 8.957,3.440 8.905 C 3.517 8.864,4.124 8.289,4.790 7.627 L 5.999 6.423 6.010 13.364 L 6.020 20.306 6.141 20.503 C 6.543 21.156,7.457 21.156,7.859 20.503 L 7.980 20.306 7.990 13.364 L 8.001 6.423 9.210 7.627 C 9.876 8.289,10.483 8.864,10.560 8.905 C 10.659 8.957,10.787 8.979,11.000 8.979 C 11.258 8.980,11.327 8.964,11.492 8.867 C 11.714 8.737,11.901 8.498,11.965 8.264 C 12.019 8.061,11.989 7.733,11.899 7.555 C 11.862 7.481,10.884 6.469,9.726 5.306 C 7.433 3.004,7.429 3.001,7.000 3.001 C 6.851 3.001,6.716 3.031,6.580 3.096 M16.873 3.060 C 16.136 3.200,15.468 3.565,14.958 4.105 C 14.561 4.525,14.318 4.950,14.131 5.548 L 14.021 5.900 14.021 8.103 L 14.020 10.306 14.141 10.503 C 14.543 11.156,15.457 11.156,15.859 10.503 C 15.979 10.308,15.980 10.300,15.993 9.653 L 16.007 9.000 17.500 9.000 L 18.993 9.000 19.007 9.653 C 19.020 10.300,19.021 10.308,19.141 10.503 C 19.543 11.156,20.457 11.156,20.859 10.503 L 20.980 10.306 20.991 8.283 C 20.999 7.023,20.987 6.159,20.961 5.992 C 20.747 4.608,19.722 3.468,18.378 3.118 C 17.959 3.009,17.280 2.983,16.873 3.060 M18.119 5.143 C 18.417 5.279,18.728 5.592,18.862 5.892 C 18.951 6.090,18.974 6.210,18.991 6.566 L 19.011 7.000 17.500 7.000 L 15.989 7.000 16.009 6.565 C 16.026 6.206,16.049 6.088,16.137 5.895 C 16.326 5.479,16.751 5.129,17.174 5.039 C 17.441 4.982,17.870 5.030,18.119 5.143 M14.695 13.057 C 14.051 13.258,13.799 14.040,14.198 14.591 C 14.263 14.681,14.403 14.805,14.508 14.867 L 14.700 14.980 16.275 15.000 L 17.850 15.020 16.003 17.237 C 14.986 18.456,14.127 19.507,14.094 19.572 C 13.919 19.911,14.009 20.411,14.298 20.700 C 14.607 21.009,14.511 21.000,17.517 20.998 C 19.637 20.997,20.211 20.986,20.330 20.943 C 20.551 20.864,20.744 20.702,20.869 20.489 C 20.964 20.328,20.980 20.256,20.980 20.000 C 20.980 19.746,20.963 19.672,20.872 19.516 C 20.761 19.327,20.571 19.158,20.373 19.070 C 20.292 19.034,19.821 19.015,18.705 19.000 L 17.150 18.980 19.014 16.743 C 21.048 14.303,21.032 14.325,20.988 13.893 C 20.947 13.498,20.674 13.171,20.290 13.055 C 20.031 12.977,14.944 12.979,14.695 13.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ArrowUpAZ = /*@__PURE__*/ forwardRef<ComponentInternals, ArrowUpAZProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    