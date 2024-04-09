
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LayoutPanelTopProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-layout-panel-top" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.477 2.073 C 2.806 2.249,2.238 2.823,2.060 3.508 C 2.010 3.700,2.000 4.180,2.000 6.500 C 2.000 9.501,1.999 9.484,2.225 9.930 C 2.361 10.199,2.801 10.639,3.070 10.775 C 3.542 11.014,2.983 11.000,12.000 11.000 C 21.017 11.000,20.458 11.014,20.930 10.775 C 21.196 10.640,21.638 10.200,21.771 9.937 C 22.000 9.485,22.000 9.489,21.999 6.514 C 21.999 3.558,21.995 3.505,21.781 3.083 C 21.646 2.816,21.297 2.449,21.017 2.281 C 20.523 1.983,21.217 2.005,12.000 2.005 C 4.321 2.005,3.721 2.009,3.477 2.073 M20.000 6.500 L 20.000 9.000 12.000 9.000 L 4.000 9.000 4.000 6.500 L 4.000 4.000 12.000 4.000 L 20.000 4.000 20.000 6.500 M3.477 13.073 C 2.806 13.249,2.238 13.823,2.060 14.508 C 2.010 14.700,2.000 15.180,2.000 17.500 C 2.000 20.501,1.999 20.484,2.225 20.930 C 2.361 21.199,2.801 21.639,3.070 21.775 C 3.516 22.001,3.499 22.000,6.500 22.000 C 9.501 22.000,9.484 22.001,9.930 21.775 C 10.196 21.640,10.638 21.200,10.771 20.937 C 11.000 20.485,11.000 20.489,10.999 17.514 C 10.999 14.558,10.995 14.505,10.781 14.083 C 10.646 13.816,10.297 13.449,10.017 13.281 C 9.555 13.003,9.580 13.005,6.500 13.005 C 4.020 13.005,3.713 13.012,3.477 13.073 M14.477 13.073 C 13.806 13.249,13.238 13.823,13.060 14.508 C 13.010 14.700,13.000 15.180,13.000 17.500 C 13.000 20.501,12.999 20.484,13.225 20.930 C 13.361 21.199,13.801 21.639,14.070 21.775 C 14.516 22.001,14.499 22.000,17.500 22.000 C 20.501 22.000,20.484 22.001,20.930 21.775 C 21.196 21.640,21.638 21.200,21.771 20.937 C 22.000 20.485,22.000 20.489,21.999 17.514 C 21.999 14.558,21.995 14.505,21.781 14.083 C 21.646 13.816,21.297 13.449,21.017 13.281 C 20.555 13.003,20.580 13.005,17.500 13.005 C 15.020 13.005,14.713 13.012,14.477 13.073 M9.000 17.500 L 9.000 20.000 6.500 20.000 L 4.000 20.000 4.000 17.500 L 4.000 15.000 6.500 15.000 L 9.000 15.000 9.000 17.500 M20.000 17.500 L 20.000 20.000 17.500 20.000 L 15.000 20.000 15.000 17.500 L 15.000 15.000 17.500 15.000 L 20.000 15.000 20.000 17.500 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const LayoutPanelTop = /*@__PURE__*/ forwardRef<ComponentInternals, LayoutPanelTopProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    