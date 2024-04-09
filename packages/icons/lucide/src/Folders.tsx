
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FoldersProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folders" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.499 3.043 C 6.383 3.230,5.461 4.048,5.114 5.160 L 5.020 5.460 5.020 10.500 L 5.020 15.540 5.114 15.840 C 5.422 16.827,6.173 17.578,7.160 17.886 L 7.460 17.980 14.000 17.980 L 20.540 17.980 20.840 17.886 C 21.827 17.578,22.578 16.827,22.886 15.840 L 22.980 15.540 22.980 12.000 L 22.980 8.460 22.886 8.160 C 22.581 7.181,21.827 6.424,20.861 6.123 L 20.540 6.023 18.180 6.001 C 15.715 5.979,15.733 5.980,15.481 5.801 C 15.421 5.758,15.122 5.358,14.817 4.912 C 14.511 4.465,14.171 4.009,14.061 3.898 C 13.802 3.637,13.429 3.386,13.083 3.239 C 12.560 3.016,12.336 3.000,9.905 3.005 C 8.692 3.007,7.609 3.025,7.499 3.043 M12.177 5.038 C 12.479 5.108,12.634 5.266,13.145 6.022 C 13.934 7.188,14.350 7.566,15.160 7.848 L 15.540 7.980 17.900 8.000 C 20.545 8.022,20.412 8.007,20.717 8.321 C 21.009 8.622,21.000 8.508,21.000 12.001 C 21.000 15.372,21.003 15.324,20.779 15.618 C 20.718 15.698,20.585 15.813,20.484 15.872 L 20.300 15.980 14.000 15.980 L 7.700 15.980 7.516 15.872 C 7.415 15.813,7.284 15.700,7.225 15.623 C 6.989 15.314,7.000 15.564,7.000 10.502 C 7.000 5.267,6.979 5.628,7.307 5.299 C 7.603 5.003,7.577 5.006,9.940 5.004 C 11.084 5.003,12.091 5.018,12.177 5.038 M1.695 7.057 C 1.466 7.129,1.256 7.299,1.128 7.516 L 1.020 7.700 1.020 13.620 L 1.020 19.540 1.114 19.840 C 1.418 20.816,2.149 21.554,3.140 21.886 L 3.420 21.980 10.773 21.991 C 15.657 21.998,18.177 21.988,18.277 21.961 C 18.498 21.901,18.739 21.710,18.867 21.492 C 18.964 21.327,18.980 21.257,18.980 21.000 C 18.980 20.746,18.963 20.672,18.872 20.516 C 18.761 20.328,18.572 20.158,18.373 20.070 C 18.284 20.031,16.686 20.016,10.980 20.000 L 3.700 19.980 3.516 19.872 C 3.328 19.761,3.158 19.572,3.070 19.373 C 3.031 19.285,3.016 17.985,3.000 13.480 L 2.980 7.700 2.872 7.516 C 2.628 7.101,2.150 6.915,1.695 7.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Folders = /*@__PURE__*/ forwardRef<ComponentInternals, FoldersProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    