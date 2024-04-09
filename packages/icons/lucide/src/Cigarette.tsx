
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CigaretteProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-cigarette" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.695 2.057 C 15.468 2.128,15.256 2.299,15.132 2.510 C 14.884 2.932,15.008 4.025,15.399 4.865 C 15.573 5.238,15.747 5.505,16.266 6.188 C 16.830 6.931,16.933 7.172,16.996 7.897 C 17.028 8.263,17.051 8.356,17.148 8.514 C 17.541 9.153,18.461 9.150,18.855 8.510 C 19.196 7.956,18.908 6.488,18.277 5.555 C 18.182 5.415,17.938 5.080,17.734 4.812 C 17.171 4.070,17.067 3.827,17.004 3.107 C 16.974 2.765,16.947 2.645,16.866 2.506 C 16.628 2.101,16.145 1.916,15.695 2.057 M19.695 2.057 C 19.468 2.128,19.256 2.299,19.132 2.510 C 18.884 2.932,19.008 4.025,19.399 4.865 C 19.573 5.238,19.747 5.505,20.266 6.188 C 20.830 6.931,20.933 7.172,20.996 7.897 C 21.028 8.263,21.051 8.356,21.148 8.514 C 21.541 9.153,22.461 9.150,22.855 8.510 C 23.196 7.956,22.908 6.488,22.277 5.555 C 22.182 5.415,21.938 5.080,21.734 4.812 C 21.171 4.070,21.067 3.827,21.004 3.107 C 20.974 2.765,20.947 2.645,20.866 2.506 C 20.628 2.101,20.145 1.916,19.695 2.057 M1.695 11.057 C 1.466 11.129,1.256 11.299,1.128 11.516 L 1.020 11.700 1.020 14.000 L 1.020 16.300 1.131 16.489 C 1.256 16.702,1.449 16.864,1.670 16.943 C 1.893 17.022,18.107 17.022,18.330 16.943 C 18.551 16.864,18.744 16.702,18.869 16.489 C 18.964 16.328,18.980 16.256,18.980 16.000 C 18.980 15.746,18.963 15.672,18.872 15.516 C 18.740 15.293,18.533 15.128,18.290 15.055 C 18.139 15.010,17.220 15.000,13.054 15.000 L 8.000 15.000 8.000 14.000 L 8.000 13.000 13.090 12.998 C 17.238 12.997,18.208 12.987,18.330 12.943 C 18.551 12.864,18.744 12.702,18.869 12.489 C 18.964 12.328,18.980 12.256,18.980 12.000 C 18.980 11.746,18.963 11.672,18.872 11.516 C 18.740 11.293,18.533 11.128,18.290 11.055 C 18.027 10.976,1.947 10.978,1.695 11.057 M21.695 11.057 C 21.466 11.129,21.256 11.299,21.128 11.516 L 21.020 11.700 21.020 14.003 L 21.020 16.306 21.141 16.503 C 21.209 16.613,21.346 16.756,21.452 16.828 C 21.923 17.144,22.554 16.999,22.859 16.503 L 22.980 16.306 22.980 14.003 L 22.980 11.700 22.872 11.516 C 22.628 11.101,22.150 10.915,21.695 11.057 M6.000 14.000 L 6.000 15.000 4.500 15.000 L 3.000 15.000 3.000 14.000 L 3.000 13.000 4.500 13.000 L 6.000 13.000 6.000 14.000 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Cigarette = /*@__PURE__*/ forwardRef<ComponentInternals, CigaretteProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    