
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TextCursorInputProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-text-cursor-input" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.695 3.057 C 4.466 3.129,4.256 3.299,4.128 3.516 C 4.037 3.672,4.020 3.746,4.020 4.000 C 4.020 4.256,4.036 4.328,4.131 4.489 C 4.256 4.702,4.449 4.864,4.670 4.943 C 4.772 4.979,5.049 4.998,5.540 5.001 C 6.081 5.004,6.325 5.022,6.523 5.073 C 7.212 5.253,7.795 5.860,7.941 6.549 C 8.027 6.953,8.027 17.047,7.941 17.451 C 7.863 17.821,7.710 18.091,7.400 18.404 C 6.923 18.888,6.580 19.000,5.578 19.000 C 4.823 19.000,4.624 19.037,4.382 19.221 C 4.302 19.282,4.187 19.415,4.128 19.516 C 4.037 19.672,4.020 19.746,4.020 20.000 C 4.020 20.256,4.036 20.328,4.131 20.489 C 4.256 20.702,4.449 20.864,4.670 20.943 C 4.923 21.033,6.276 21.019,6.757 20.921 C 7.557 20.758,8.174 20.434,8.810 19.845 L 9.000 19.669 9.190 19.845 C 9.826 20.434,10.443 20.758,11.243 20.921 C 11.724 21.019,13.077 21.033,13.330 20.943 C 13.551 20.864,13.744 20.702,13.869 20.489 C 13.964 20.328,13.980 20.256,13.980 20.000 C 13.980 19.746,13.963 19.672,13.872 19.516 C 13.813 19.415,13.698 19.282,13.618 19.221 C 13.376 19.037,13.177 19.000,12.422 19.000 C 11.682 19.000,11.434 18.960,11.083 18.781 C 10.816 18.646,10.449 18.297,10.281 18.017 C 9.990 17.533,10.005 17.862,10.002 12.028 C 10.000 6.217,9.988 6.475,10.265 6.014 C 10.546 5.543,10.988 5.201,11.477 5.073 C 11.675 5.022,11.919 5.004,12.460 5.001 C 12.951 4.998,13.228 4.979,13.330 4.943 C 13.551 4.864,13.744 4.702,13.869 4.489 C 13.964 4.328,13.980 4.256,13.980 4.000 C 13.980 3.746,13.963 3.672,13.872 3.516 C 13.740 3.293,13.533 3.128,13.290 3.055 C 13.042 2.980,11.899 2.983,11.395 3.058 C 10.581 3.181,9.832 3.552,9.192 4.151 L 9.000 4.331 8.808 4.151 C 8.168 3.552,7.419 3.181,6.605 3.058 C 6.118 2.985,4.928 2.984,4.695 3.057 M3.499 7.043 C 2.383 7.230,1.461 8.048,1.114 9.160 L 1.020 9.460 1.020 12.000 L 1.020 14.540 1.114 14.840 C 1.419 15.818,2.164 16.569,3.140 16.882 C 3.383 16.960,3.531 16.974,4.260 16.990 C 4.805 17.002,5.158 16.993,5.264 16.964 C 5.497 16.901,5.737 16.714,5.867 16.492 C 5.964 16.327,5.980 16.257,5.980 16.000 C 5.980 15.746,5.963 15.672,5.872 15.516 C 5.760 15.325,5.567 15.154,5.373 15.073 C 5.307 15.045,4.934 15.016,4.480 15.003 C 3.724 14.981,3.694 14.977,3.516 14.872 C 3.415 14.813,3.282 14.698,3.221 14.618 C 3.004 14.333,3.000 14.287,3.000 12.001 C 3.000 9.589,2.998 9.609,3.303 9.303 C 3.561 9.045,3.743 9.000,4.537 8.998 C 5.230 8.996,5.378 8.967,5.619 8.783 C 5.696 8.725,5.808 8.592,5.869 8.489 C 5.964 8.328,5.980 8.256,5.980 8.000 C 5.980 7.746,5.963 7.672,5.872 7.516 C 5.740 7.293,5.533 7.128,5.290 7.055 C 5.084 6.993,3.845 6.985,3.499 7.043 M12.695 7.056 C 12.465 7.129,12.256 7.299,12.128 7.516 C 12.037 7.672,12.020 7.746,12.020 8.000 C 12.020 8.256,12.036 8.328,12.131 8.489 C 12.256 8.702,12.449 8.864,12.670 8.943 C 12.791 8.986,13.524 8.997,16.463 8.998 C 20.586 9.000,20.379 8.985,20.697 9.303 C 21.002 9.609,21.000 9.589,21.000 12.001 C 21.000 14.287,20.996 14.333,20.779 14.618 C 20.718 14.698,20.585 14.813,20.484 14.872 L 20.300 14.980 16.520 15.000 C 13.617 15.015,12.714 15.032,12.627 15.070 C 12.428 15.158,12.239 15.328,12.128 15.516 C 12.037 15.672,12.020 15.746,12.020 16.000 C 12.020 16.257,12.036 16.327,12.133 16.492 C 12.261 16.711,12.502 16.901,12.725 16.961 C 12.827 16.989,14.176 16.999,16.729 16.991 L 20.580 16.980 20.860 16.886 C 21.851 16.554,22.582 15.816,22.886 14.840 L 22.980 14.540 22.980 12.000 L 22.980 9.460 22.886 9.160 C 22.581 8.182,21.831 7.427,20.861 7.122 L 20.540 7.021 16.700 7.012 C 13.626 7.006,12.827 7.014,12.695 7.056 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const TextCursorInput = /*@__PURE__*/ forwardRef<ComponentInternals, TextCursorInputProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    