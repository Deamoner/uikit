
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FileMinus2Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-file-minus-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.499 1.043 C 4.380 1.232,3.461 2.048,3.114 3.160 L 3.020 3.460 3.020 5.883 L 3.020 8.306 3.141 8.503 C 3.543 9.156,4.457 9.156,4.859 8.503 L 4.980 8.306 5.000 6.023 C 5.022 3.464,5.008 3.587,5.321 3.283 C 5.625 2.989,5.459 3.000,9.445 3.000 L 12.995 3.000 13.009 4.790 C 13.023 6.533,13.026 6.587,13.116 6.860 C 13.437 7.835,14.165 8.563,15.140 8.884 C 15.413 8.974,15.467 8.977,17.210 8.991 L 19.000 9.005 19.000 14.556 C 19.000 19.144,18.990 20.139,18.945 20.290 C 18.872 20.533,18.707 20.740,18.484 20.872 L 18.300 20.980 11.020 21.000 C 5.314 21.016,3.716 21.031,3.627 21.070 C 3.428 21.158,3.239 21.328,3.128 21.516 C 3.037 21.672,3.020 21.746,3.020 22.000 C 3.020 22.257,3.036 22.327,3.133 22.492 C 3.261 22.710,3.502 22.901,3.723 22.961 C 3.823 22.988,6.343 22.998,11.227 22.991 L 18.580 22.980 18.860 22.886 C 19.840 22.557,20.557 21.840,20.886 20.860 L 20.980 20.580 20.991 13.723 C 21.001 7.466,20.996 6.848,20.936 6.663 C 20.876 6.475,20.673 6.262,18.225 3.816 C 16.452 2.043,15.527 1.147,15.420 1.096 C 15.266 1.023,15.085 1.020,10.480 1.014 C 7.851 1.011,5.609 1.024,5.499 1.043 M18.250 6.992 C 18.080 6.999,17.436 6.999,16.820 6.992 L 15.700 6.980 15.516 6.872 C 15.415 6.813,15.284 6.700,15.225 6.623 C 15.009 6.340,15.000 6.265,15.000 4.785 L 15.000 3.420 16.780 5.200 L 18.561 6.980 18.250 6.992 M2.695 14.057 C 2.466 14.129,2.256 14.299,2.128 14.516 C 2.037 14.672,2.020 14.746,2.020 15.000 C 2.020 15.256,2.036 15.328,2.131 15.489 C 2.256 15.702,2.449 15.864,2.670 15.943 C 2.891 16.022,9.109 16.022,9.330 15.943 C 9.551 15.864,9.744 15.702,9.869 15.489 C 9.964 15.328,9.980 15.256,9.980 15.000 C 9.980 14.746,9.963 14.672,9.872 14.516 C 9.740 14.293,9.533 14.128,9.290 14.055 C 9.030 13.977,2.945 13.979,2.695 14.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FileMinus2 = /*@__PURE__*/ forwardRef<ComponentInternals, FileMinus2Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    