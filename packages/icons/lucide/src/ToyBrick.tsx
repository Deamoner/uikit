
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ToyBrickProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-toy-brick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.477 3.073 C 4.806 3.249,4.238 3.823,4.060 4.508 C 4.014 4.684,4.000 4.993,4.000 5.859 L 4.000 6.982 3.690 7.031 C 3.508 7.060,3.272 7.132,3.120 7.207 C 2.802 7.362,2.375 7.774,2.225 8.070 C 1.990 8.534,2.000 8.267,2.000 14.000 C 2.000 19.733,1.990 19.466,2.225 19.930 C 2.361 20.199,2.801 20.639,3.070 20.775 C 3.542 21.014,2.983 21.000,12.000 21.000 C 21.017 21.000,20.458 21.014,20.930 20.775 C 21.196 20.640,21.638 20.200,21.771 19.937 C 22.010 19.466,22.000 19.732,21.999 14.014 C 21.999 8.317,22.007 8.527,21.775 8.069 C 21.625 7.774,21.198 7.362,20.880 7.207 C 20.728 7.132,20.492 7.060,20.310 7.031 L 20.000 6.982 19.998 5.841 C 19.996 4.897,19.984 4.655,19.927 4.437 C 19.797 3.940,19.432 3.480,18.969 3.228 C 18.583 3.019,18.385 3.001,16.480 3.003 C 14.533 3.005,14.421 3.017,13.983 3.281 C 13.703 3.449,13.354 3.816,13.219 4.083 C 13.022 4.471,13.000 4.650,13.000 5.868 L 13.000 7.000 12.000 7.000 L 11.000 7.000 10.998 5.850 C 10.996 4.897,10.984 4.655,10.927 4.437 C 10.797 3.940,10.432 3.480,9.969 3.228 C 9.583 3.019,9.385 3.001,7.480 3.003 C 5.968 3.004,5.706 3.014,5.477 3.073 M9.000 6.000 L 9.000 7.000 7.500 7.000 L 6.000 7.000 6.000 6.000 L 6.000 5.000 7.500 5.000 L 9.000 5.000 9.000 6.000 M18.000 6.000 L 18.000 7.000 16.500 7.000 L 15.000 7.000 15.000 6.000 L 15.000 5.000 16.500 5.000 L 18.000 5.000 18.000 6.000 M20.000 14.000 L 20.000 19.000 12.000 19.000 L 4.000 19.000 4.000 14.000 L 4.000 9.000 12.000 9.000 L 20.000 9.000 20.000 14.000 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ToyBrick = /*@__PURE__*/ forwardRef<ComponentInternals, ToyBrickProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    