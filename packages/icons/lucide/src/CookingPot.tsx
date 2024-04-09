
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CookingPotProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-cooking-pot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.720 1.060 C 11.577 1.089,10.983 1.232,10.400 1.379 C 9.628 1.572,9.253 1.687,9.020 1.799 C 8.436 2.082,7.996 2.518,7.680 3.126 C 7.311 3.835,7.262 4.456,7.498 5.457 C 7.576 5.785,7.635 6.057,7.630 6.061 C 7.624 6.064,6.712 6.294,5.602 6.571 C 3.384 7.126,3.367 7.132,3.149 7.486 C 2.861 7.950,3.023 8.582,3.499 8.862 C 3.877 9.083,3.294 9.209,12.256 6.967 C 21.220 4.724,20.615 4.897,20.851 4.514 C 21.244 3.879,20.758 3.000,20.015 3.000 C 19.918 3.000,15.869 3.983,15.476 4.102 C 15.424 4.118,15.386 4.016,15.267 3.551 C 15.064 2.753,14.852 2.333,14.447 1.928 C 14.143 1.623,13.699 1.329,13.325 1.184 C 12.861 1.005,12.233 0.956,11.720 1.060 M12.709 3.094 C 13.070 3.281,13.185 3.467,13.353 4.134 L 13.471 4.599 13.326 4.638 C 12.116 4.957,9.621 5.556,9.599 5.532 C 9.543 5.469,9.360 4.638,9.361 4.451 C 9.362 4.122,9.578 3.759,9.860 3.609 C 9.926 3.574,10.466 3.423,11.060 3.272 C 12.211 2.981,12.441 2.956,12.709 3.094 M1.695 11.057 C 1.466 11.129,1.256 11.299,1.128 11.516 C 1.037 11.672,1.020 11.746,1.020 12.000 C 1.020 12.256,1.036 12.328,1.131 12.489 C 1.256 12.702,1.449 12.864,1.670 12.943 C 1.768 12.978,2.022 12.997,2.409 12.998 L 2.997 13.000 3.009 16.790 L 3.020 20.580 3.114 20.860 C 3.446 21.851,4.184 22.582,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.816 22.582,20.554 21.851,20.886 20.860 L 20.980 20.580 20.991 16.790 L 21.003 13.000 21.591 12.998 C 21.978 12.997,22.232 12.978,22.330 12.943 C 22.551 12.864,22.744 12.702,22.869 12.489 C 22.964 12.328,22.980 12.256,22.980 12.000 C 22.980 11.746,22.963 11.672,22.872 11.516 C 22.740 11.293,22.533 11.128,22.290 11.055 C 22.027 10.976,1.948 10.978,1.695 11.057 M19.000 16.554 C 19.000 20.410,19.005 20.322,18.779 20.618 C 18.718 20.698,18.585 20.813,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.992 20.317,5.000 20.464,5.000 16.575 L 5.000 13.000 12.000 13.000 L 19.000 13.000 19.000 16.554 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CookingPot = /*@__PURE__*/ forwardRef<ComponentInternals, CookingPotProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    