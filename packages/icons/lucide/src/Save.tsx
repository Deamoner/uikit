
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SaveProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.381 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.816 21.582,21.554 20.851,21.886 19.860 L 21.980 19.580 21.991 13.723 C 22.001 8.387,21.996 7.848,21.936 7.663 C 21.876 7.475,21.675 7.264,19.225 4.816 C 17.452 3.043,16.527 2.147,16.420 2.096 C 16.265 2.023,16.067 2.020,10.480 2.014 C 7.301 2.011,4.609 2.024,4.499 2.043 M6.009 6.150 L 6.020 8.300 6.131 8.489 C 6.256 8.702,6.449 8.864,6.670 8.943 C 6.892 9.022,15.108 9.022,15.330 8.943 C 15.551 8.864,15.744 8.702,15.869 8.489 C 15.964 8.328,15.980 8.256,15.980 8.000 C 15.980 7.746,15.963 7.672,15.872 7.516 C 15.813 7.415,15.698 7.282,15.618 7.221 C 15.322 6.995,15.410 7.000,11.554 7.000 L 8.000 7.000 8.000 5.500 L 8.000 4.000 11.790 4.000 L 15.580 4.000 17.790 6.210 L 20.000 8.420 20.000 13.764 C 20.000 18.176,19.990 19.139,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 C 19.308 19.975,19.272 19.981,18.651 19.993 L 18.002 20.007 17.991 16.353 L 17.980 12.700 17.872 12.516 C 17.740 12.293,17.533 12.128,17.290 12.055 C 17.019 11.973,6.981 11.973,6.710 12.055 C 6.467 12.128,6.260 12.293,6.128 12.516 L 6.020 12.700 6.009 16.353 L 5.998 20.007 5.349 19.993 C 4.728 19.981,4.692 19.975,4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 4.005,3.975 4.631,4.304 4.303 C 4.554 4.053,4.728 4.006,5.429 4.003 L 5.997 4.000 6.009 6.150 M16.000 17.000 L 16.000 20.000 12.000 20.000 L 8.000 20.000 8.000 17.000 L 8.000 14.000 12.000 14.000 L 16.000 14.000 16.000 17.000 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Save = /*@__PURE__*/ forwardRef<ComponentInternals, SaveProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    