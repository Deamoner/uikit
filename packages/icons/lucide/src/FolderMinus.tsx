
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FolderMinusProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folder-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.043 C 2.383 2.230,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 11.500 L 1.020 18.540 1.114 18.840 C 1.422 19.827,2.173 20.578,3.160 20.886 L 3.460 20.980 12.000 20.980 L 20.540 20.980 20.840 20.886 C 21.827 20.578,22.578 19.827,22.886 18.840 L 22.980 18.540 22.980 13.000 L 22.980 7.460 22.886 7.160 C 22.581 6.182,21.831 5.427,20.861 5.122 L 20.540 5.021 16.180 5.000 C 11.591 4.979,11.740 4.985,11.481 4.801 C 11.421 4.758,11.122 4.358,10.817 3.912 C 10.511 3.465,10.171 3.009,10.061 2.898 C 9.802 2.637,9.429 2.386,9.083 2.239 C 8.560 2.016,8.336 2.000,5.905 2.005 C 4.692 2.007,3.609 2.025,3.499 2.043 M8.177 4.038 C 8.479 4.108,8.634 4.266,9.145 5.022 C 9.934 6.188,10.350 6.566,11.160 6.848 L 11.540 6.980 15.900 7.000 C 20.786 7.022,20.402 6.997,20.717 7.321 C 21.017 7.631,21.000 7.286,21.000 13.001 C 21.000 17.212,20.990 18.139,20.945 18.290 C 20.872 18.533,20.707 18.740,20.484 18.872 L 20.300 18.980 12.000 18.980 L 3.700 18.980 3.516 18.872 C 3.415 18.813,3.284 18.700,3.225 18.623 C 2.986 18.310,3.000 18.748,3.000 11.522 C 3.000 4.064,2.976 4.630,3.304 4.303 C 3.604 4.002,3.573 4.006,5.940 4.004 C 7.084 4.003,8.091 4.018,8.177 4.038 M8.695 12.057 C 8.466 12.129,8.256 12.299,8.128 12.516 C 8.037 12.672,8.020 12.746,8.020 13.000 C 8.020 13.256,8.036 13.328,8.131 13.489 C 8.256 13.702,8.449 13.864,8.670 13.943 C 8.891 14.022,15.109 14.022,15.330 13.943 C 15.551 13.864,15.744 13.702,15.869 13.489 C 15.964 13.328,15.980 13.256,15.980 13.000 C 15.980 12.746,15.963 12.672,15.872 12.516 C 15.740 12.293,15.533 12.128,15.290 12.055 C 15.030 11.977,8.945 11.979,8.695 12.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FolderMinus = /*@__PURE__*/ forwardRef<ComponentInternals, FolderMinusProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    