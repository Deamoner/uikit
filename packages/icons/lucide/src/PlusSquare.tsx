
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PlusSquareProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-plus-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.755,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 5.758,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M11.695 7.057 C 11.466 7.129,11.256 7.299,11.128 7.516 L 11.020 7.700 11.008 9.350 L 10.997 11.000 9.445 11.000 C 7.758 11.000,7.658 11.011,7.382 11.221 C 7.302 11.282,7.187 11.415,7.128 11.516 C 7.037 11.672,7.020 11.746,7.020 12.000 C 7.020 12.256,7.036 12.328,7.131 12.489 C 7.192 12.592,7.304 12.725,7.381 12.783 C 7.654 12.991,7.700 12.996,9.408 12.998 L 10.997 13.000 11.008 14.653 L 11.020 16.306 11.141 16.503 C 11.209 16.613,11.346 16.756,11.452 16.828 C 11.923 17.144,12.554 16.999,12.859 16.503 L 12.980 16.306 12.992 14.653 L 13.003 13.000 14.592 12.998 C 16.300 12.996,16.346 12.991,16.619 12.783 C 16.696 12.725,16.808 12.592,16.869 12.489 C 16.964 12.328,16.980 12.256,16.980 12.000 C 16.980 11.746,16.963 11.672,16.872 11.516 C 16.813 11.415,16.698 11.282,16.618 11.221 C 16.342 11.011,16.242 11.000,14.555 11.000 L 13.003 11.000 12.992 9.350 L 12.980 7.700 12.872 7.516 C 12.628 7.101,12.150 6.915,11.695 7.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const PlusSquare = /*@__PURE__*/ forwardRef<ComponentInternals, PlusSquareProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    