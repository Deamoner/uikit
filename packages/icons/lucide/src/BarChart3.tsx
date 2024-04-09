
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BarChart3Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-bar-chart-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.695 2.057 C 2.466 2.129,2.256 2.299,2.128 2.516 L 2.020 2.700 2.020 12.000 L 2.020 21.300 2.131 21.489 C 2.256 21.702,2.449 21.864,2.670 21.943 C 2.893 22.023,21.107 22.023,21.330 21.943 C 21.551 21.864,21.744 21.702,21.869 21.489 C 21.964 21.328,21.980 21.256,21.980 21.000 C 21.980 20.746,21.963 20.672,21.872 20.516 C 21.740 20.293,21.533 20.128,21.290 20.055 C 21.138 20.009,19.686 20.000,12.554 20.000 L 4.001 20.000 3.990 11.350 L 3.980 2.700 3.872 2.516 C 3.628 2.101,3.150 1.915,2.695 2.057 M12.695 4.057 C 12.466 4.129,12.256 4.299,12.128 4.516 L 12.020 4.700 12.020 11.003 L 12.020 17.306 12.141 17.503 C 12.543 18.156,13.457 18.156,13.859 17.503 L 13.980 17.306 13.980 11.003 L 13.980 4.700 13.872 4.516 C 13.628 4.101,13.150 3.915,12.695 4.057 M17.695 8.057 C 17.466 8.129,17.256 8.299,17.128 8.516 L 17.020 8.700 17.020 13.003 L 17.020 17.306 17.141 17.503 C 17.209 17.613,17.346 17.756,17.452 17.828 C 17.923 18.144,18.554 17.999,18.859 17.503 L 18.980 17.306 18.980 13.003 L 18.980 8.700 18.872 8.516 C 18.628 8.101,18.150 7.915,17.695 8.057 M7.695 13.057 C 7.466 13.129,7.256 13.299,7.128 13.516 L 7.020 13.700 7.020 15.503 L 7.020 17.306 7.141 17.503 C 7.543 18.156,8.457 18.156,8.859 17.503 L 8.980 17.306 8.980 15.503 L 8.980 13.700 8.872 13.516 C 8.628 13.101,8.150 12.915,7.695 13.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BarChart3 = /*@__PURE__*/ forwardRef<ComponentInternals, BarChart3Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    