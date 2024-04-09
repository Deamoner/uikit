
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FileQuestionProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-file-question" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.499 1.043 C 4.380 1.232,3.461 2.048,3.114 3.160 L 3.020 3.460 3.020 12.000 L 3.020 20.540 3.114 20.840 C 3.422 21.827,4.173 22.578,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.816 22.582,20.554 21.851,20.886 20.860 L 20.980 20.580 20.991 13.723 C 21.001 7.466,20.996 6.848,20.936 6.663 C 20.876 6.475,20.673 6.262,18.225 3.816 C 16.452 2.043,15.527 1.147,15.420 1.096 C 15.266 1.023,15.085 1.020,10.480 1.014 C 7.851 1.011,5.609 1.024,5.499 1.043 M16.790 5.210 L 19.000 7.420 19.000 13.764 C 19.000 19.023,18.991 20.138,18.945 20.290 C 18.872 20.533,18.707 20.740,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.985 20.308,5.000 20.888,5.000 12.022 C 5.000 2.888,4.974 3.632,5.304 3.303 C 5.619 2.988,5.320 3.006,10.220 3.003 L 14.580 3.000 16.790 5.210 M11.175 8.119 C 10.825 8.211,10.338 8.452,10.020 8.691 C 9.707 8.927,9.395 9.317,9.171 9.751 C 9.003 10.077,8.992 10.116,9.010 10.341 C 9.054 10.893,9.461 11.283,10.000 11.289 C 10.411 11.293,10.686 11.106,10.964 10.631 C 11.214 10.205,11.490 10.040,11.949 10.040 C 12.428 10.041,12.720 10.238,12.923 10.698 C 13.027 10.932,13.008 11.109,12.861 11.303 C 12.722 11.484,12.123 11.874,11.757 12.021 C 11.384 12.170,11.158 12.384,11.060 12.679 C 10.884 13.210,11.151 13.753,11.678 13.939 C 12.014 14.058,12.268 14.008,12.889 13.700 C 13.909 13.195,14.635 12.472,14.883 11.715 C 15.019 11.302,15.020 10.671,14.886 10.240 C 14.780 9.899,14.544 9.430,14.340 9.151 C 14.012 8.706,13.256 8.236,12.652 8.103 C 12.252 8.015,11.542 8.023,11.175 8.119 M11.695 16.055 C 11.464 16.130,11.255 16.300,11.128 16.516 C 11.037 16.672,11.020 16.746,11.020 17.000 C 11.020 17.257,11.036 17.327,11.133 17.492 C 11.651 18.374,12.998 18.018,12.998 17.000 C 12.998 16.623,12.792 16.281,12.463 16.112 C 12.265 16.010,11.911 15.984,11.695 16.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FileQuestion = /*@__PURE__*/ forwardRef<ComponentInternals, FileQuestionProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    