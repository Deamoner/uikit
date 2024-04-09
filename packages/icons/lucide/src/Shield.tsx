
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ShieldProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.664 2.560 C 5.190 3.488,3.455 4.160,3.375 4.221 C 3.302 4.277,3.192 4.408,3.131 4.511 L 3.020 4.700 3.008 8.540 C 3.000 11.200,3.010 12.503,3.041 12.780 C 3.208 14.261,3.731 15.627,4.663 17.020 C 5.935 18.922,8.135 20.893,10.680 22.410 C 11.476 22.885,11.696 22.980,12.000 22.980 C 12.304 22.980,12.524 22.885,13.320 22.410 C 14.680 21.599,16.003 20.616,17.060 19.628 C 19.418 17.426,20.664 15.245,20.959 12.801 C 20.984 12.592,21.000 11.004,21.000 8.658 C 21.000 4.381,21.016 4.614,20.703 4.301 C 20.546 4.144,20.355 4.068,16.355 2.568 C 13.150 1.367,12.130 1.000,11.996 1.001 C 11.863 1.001,10.797 1.385,7.664 2.560 M15.512 4.388 L 19.004 5.696 18.989 9.218 C 18.974 12.616,18.971 12.754,18.890 13.126 C 18.424 15.268,16.930 17.309,14.393 19.269 C 13.652 19.842,12.132 20.840,12.000 20.840 C 11.868 20.840,10.348 19.842,9.607 19.269 C 7.070 17.309,5.576 15.268,5.110 13.126 C 5.029 12.754,5.026 12.616,5.011 9.218 L 4.996 5.696 8.468 4.391 C 10.378 3.673,11.958 3.084,11.980 3.082 C 12.002 3.080,13.591 3.668,15.512 4.388 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Shield = /*@__PURE__*/ forwardRef<ComponentInternals, ShieldProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    