
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CropProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-crop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.695 1.057 C 5.466 1.129,5.256 1.299,5.128 1.516 L 5.020 1.700 5.008 3.350 L 4.997 5.000 3.445 5.000 C 1.758 5.000,1.658 5.011,1.382 5.221 C 1.302 5.282,1.187 5.415,1.128 5.516 C 1.037 5.672,1.020 5.746,1.020 6.000 C 1.020 6.256,1.036 6.328,1.131 6.489 C 1.192 6.592,1.304 6.725,1.381 6.783 C 1.654 6.991,1.700 6.996,3.409 6.998 L 4.998 7.000 5.009 11.790 L 5.020 16.580 5.114 16.860 C 5.443 17.840,6.160 18.557,7.140 18.886 L 7.420 18.980 12.208 18.991 L 16.997 19.002 17.008 20.654 L 17.020 22.306 17.141 22.503 C 17.209 22.613,17.346 22.756,17.452 22.828 C 17.923 23.144,18.554 22.999,18.859 22.503 L 18.980 22.306 18.992 20.653 L 19.003 19.000 20.592 18.998 C 22.300 18.996,22.346 18.991,22.619 18.783 C 22.696 18.725,22.808 18.592,22.869 18.489 C 22.964 18.328,22.980 18.256,22.980 18.000 C 22.980 17.746,22.963 17.672,22.872 17.516 C 22.813 17.415,22.698 17.282,22.618 17.221 C 22.342 17.011,22.242 17.000,20.555 17.000 L 19.002 17.000 18.991 12.210 L 18.980 7.420 18.886 7.140 C 18.556 6.158,17.821 5.425,16.861 5.121 L 16.540 5.020 11.772 5.009 L 7.003 4.998 6.992 3.349 L 6.980 1.700 6.872 1.516 C 6.628 1.101,6.150 0.915,5.695 1.057 M16.310 7.061 C 16.589 7.144,16.856 7.411,16.939 7.690 C 16.992 7.868,17.000 8.488,17.000 12.448 L 17.000 17.001 12.350 16.991 L 7.700 16.980 7.516 16.872 C 7.415 16.813,7.284 16.700,7.225 16.623 C 6.989 16.314,7.000 16.557,7.000 11.575 L 7.000 7.000 11.553 7.000 C 15.512 7.000,16.132 7.008,16.310 7.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Crop = /*@__PURE__*/ forwardRef<ComponentInternals, CropProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    