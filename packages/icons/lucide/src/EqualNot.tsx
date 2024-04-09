
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type EqualNotProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-equal-not" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.640 4.068 C 18.487 4.121,18.171 4.418,16.519 6.065 L 14.577 8.000 9.735 8.000 C 5.748 8.000,4.861 8.010,4.710 8.055 C 4.467 8.128,4.260 8.293,4.128 8.516 C 4.037 8.672,4.020 8.746,4.020 9.000 C 4.020 9.256,4.036 9.328,4.131 9.489 C 4.256 9.702,4.449 9.864,4.670 9.943 C 4.791 9.986,5.563 9.997,8.700 9.998 L 12.580 10.000 10.580 12.000 L 8.580 14.000 6.737 14.000 C 4.735 14.000,4.663 14.007,4.382 14.221 C 4.302 14.282,4.187 14.415,4.128 14.516 C 4.037 14.672,4.020 14.746,4.020 15.000 C 4.020 15.256,4.036 15.328,4.131 15.489 C 4.192 15.592,4.304 15.725,4.381 15.783 C 4.635 15.977,4.753 15.996,5.699 15.998 L 6.578 16.000 5.374 17.210 C 4.711 17.875,4.136 18.483,4.095 18.560 C 4.043 18.659,4.021 18.787,4.021 19.000 C 4.020 19.258,4.036 19.327,4.133 19.492 C 4.413 19.968,5.033 20.139,5.492 19.865 C 5.584 19.810,6.506 18.918,7.540 17.883 L 9.420 16.000 14.300 15.998 C 18.272 15.997,19.208 15.987,19.330 15.943 C 19.551 15.864,19.744 15.702,19.869 15.489 C 19.964 15.328,19.980 15.256,19.980 15.000 C 19.980 14.746,19.963 14.672,19.872 14.516 C 19.813 14.415,19.698 14.282,19.618 14.221 C 19.320 13.994,19.435 14.000,15.264 14.000 L 11.420 14.000 13.420 12.000 L 15.420 10.000 17.300 9.998 C 18.766 9.997,19.213 9.985,19.330 9.943 C 19.551 9.864,19.744 9.702,19.869 9.489 C 19.964 9.328,19.980 9.256,19.980 9.000 C 19.980 8.746,19.963 8.672,19.872 8.516 C 19.813 8.415,19.698 8.282,19.618 8.221 C 19.366 8.029,19.188 8.000,18.265 8.000 L 17.422 8.000 18.626 6.790 C 19.289 6.125,19.864 5.517,19.905 5.440 C 19.957 5.341,19.979 5.213,19.979 5.000 C 19.980 4.745,19.964 4.672,19.872 4.516 C 19.617 4.083,19.121 3.903,18.640 4.068 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const EqualNot = /*@__PURE__*/ forwardRef<ComponentInternals, EqualNotProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    