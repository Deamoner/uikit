
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type RefrigeratorProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-refrigerator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.400 1.044 C 6.761 1.229,5.261 2.290,4.526 3.785 C 4.333 4.177,4.187 4.599,4.093 5.040 C 4.024 5.362,4.020 5.781,4.020 12.960 L 4.020 20.540 4.114 20.840 C 4.422 21.827,5.173 22.578,6.160 22.886 L 6.460 22.980 12.000 22.980 L 17.540 22.980 17.840 22.886 C 18.827 22.578,19.578 21.827,19.886 20.840 L 19.980 20.540 19.980 12.960 C 19.980 5.781,19.976 5.362,19.907 5.040 C 19.625 3.721,18.863 2.576,17.800 1.874 C 17.046 1.375,16.396 1.135,15.552 1.043 C 15.087 0.992,8.853 0.993,8.400 1.044 M15.861 3.122 C 16.823 3.424,17.580 4.182,17.877 5.139 C 17.976 5.457,17.977 5.477,17.991 7.230 L 18.005 9.000 17.005 9.000 L 16.005 9.000 15.992 7.850 L 15.980 6.700 15.871 6.514 C 15.479 5.848,14.521 5.848,14.129 6.514 L 14.020 6.700 14.008 7.850 L 13.995 9.000 9.995 9.000 L 5.995 9.000 6.009 7.230 C 6.023 5.477,6.024 5.457,6.123 5.139 C 6.462 4.048,7.385 3.233,8.499 3.042 C 8.609 3.023,10.239 3.011,12.120 3.014 L 15.540 3.021 15.861 3.122 M14.008 12.153 L 14.020 13.307 14.141 13.503 C 14.543 14.156,15.457 14.156,15.859 13.503 L 15.980 13.307 15.992 12.153 L 16.005 11.000 17.002 11.000 L 18.000 11.000 18.000 15.554 C 18.000 20.497,18.008 20.318,17.779 20.618 C 17.718 20.698,17.585 20.813,17.484 20.872 L 17.300 20.980 12.000 20.980 L 6.700 20.980 6.516 20.872 C 6.415 20.813,6.284 20.700,6.225 20.623 C 5.989 20.314,6.000 20.557,6.000 15.575 L 6.000 11.000 9.998 11.000 L 13.995 11.000 14.008 12.153 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Refrigerator = /*@__PURE__*/ forwardRef<ComponentInternals, RefrigeratorProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    