
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ClipboardPasteProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-clipboard-paste" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.477 1.073 C 7.806 1.249,7.238 1.823,7.060 2.508 C 7.027 2.634,7.000 2.794,7.000 2.864 L 7.000 2.991 6.230 3.010 C 5.567 3.027,5.416 3.043,5.139 3.126 C 4.181 3.415,3.420 4.179,3.114 5.160 L 3.020 5.460 3.020 13.000 L 3.020 20.540 3.114 20.840 C 3.422 21.827,4.173 22.578,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.828 22.578,20.584 21.821,20.885 20.840 C 20.955 20.611,20.977 20.440,20.978 20.120 C 20.980 19.733,20.971 19.686,20.871 19.514 C 20.568 18.998,19.883 18.854,19.405 19.205 C 19.169 19.379,19.047 19.609,19.002 19.966 C 18.981 20.130,18.945 20.314,18.922 20.375 C 18.851 20.561,18.677 20.758,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.986 20.309,5.000 20.795,5.000 13.022 C 5.000 5.006,4.975 5.631,5.303 5.303 C 5.554 5.052,5.751 5.000,6.447 5.000 L 7.000 5.000 7.001 5.130 C 7.002 5.337,7.110 5.743,7.225 5.970 C 7.360 6.237,7.763 6.640,8.030 6.775 C 8.473 7.000,8.460 6.999,11.992 6.999 C 15.611 7.000,15.581 7.002,16.026 6.735 C 16.327 6.555,16.548 6.337,16.721 6.053 C 16.867 5.812,16.994 5.398,16.998 5.150 L 17.000 5.000 17.553 5.000 C 18.231 5.000,18.441 5.053,18.679 5.283 C 18.975 5.571,18.977 5.581,19.000 7.023 L 19.020 8.307 19.141 8.503 C 19.543 9.156,20.457 9.156,20.859 8.503 L 20.980 8.306 20.980 6.883 C 20.980 5.503,20.977 5.451,20.886 5.160 C 20.580 4.179,19.819 3.415,18.861 3.126 C 18.584 3.043,18.433 3.027,17.770 3.010 L 17.000 2.991 16.998 2.845 C 16.988 2.229,16.552 1.545,15.969 1.228 C 15.555 1.004,15.513 1.001,11.980 1.003 C 9.049 1.004,8.715 1.011,8.477 1.073 M15.000 4.000 L 15.000 5.000 12.000 5.000 L 9.000 5.000 9.000 4.000 L 9.000 3.000 12.000 3.000 L 15.000 3.000 15.000 4.000 M16.670 9.061 C 16.448 9.142,16.250 9.309,16.128 9.516 C 16.036 9.672,16.020 9.745,16.021 10.000 C 16.021 10.213,16.043 10.341,16.095 10.440 C 16.136 10.517,16.711 11.125,17.374 11.790 L 18.578 13.000 14.735 13.000 C 10.565 13.000,10.680 12.994,10.382 13.221 C 10.302 13.282,10.187 13.415,10.128 13.516 C 10.037 13.672,10.020 13.746,10.020 14.000 C 10.020 14.256,10.036 14.328,10.131 14.489 C 10.256 14.702,10.449 14.864,10.670 14.943 C 10.791 14.986,11.563 14.997,14.699 14.998 L 18.578 15.000 17.374 16.210 C 16.711 16.875,16.138 17.481,16.101 17.555 C 15.872 18.009,16.056 18.601,16.508 18.867 C 16.673 18.964,16.742 18.980,17.000 18.979 C 17.212 18.979,17.341 18.957,17.440 18.905 C 17.517 18.865,18.531 17.884,19.694 16.726 C 21.996 14.433,21.999 14.429,21.999 14.000 C 21.999 13.569,21.999 13.569,19.674 11.255 C 17.750 9.340,17.521 9.124,17.343 9.065 C 17.107 8.987,16.874 8.986,16.670 9.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ClipboardPaste = /*@__PURE__*/ forwardRef<ComponentInternals, ClipboardPasteProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    