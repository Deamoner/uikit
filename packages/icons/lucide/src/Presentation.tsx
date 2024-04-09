
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PresentationProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.695 2.057 C 1.466 2.129,1.256 2.299,1.128 2.516 C 1.036 2.672,1.020 2.746,1.020 3.003 C 1.020 3.271,1.034 3.329,1.141 3.503 C 1.288 3.741,1.577 3.946,1.820 3.982 L 1.998 4.009 2.009 9.294 L 2.020 14.580 2.114 14.860 C 2.443 15.840,3.163 16.560,4.140 16.885 C 4.420 16.978,4.422 16.978,6.997 16.991 L 9.575 17.004 7.872 18.712 C 6.935 19.651,6.135 20.483,6.095 20.560 C 6.043 20.659,6.021 20.788,6.021 21.000 C 6.020 21.258,6.036 21.327,6.133 21.492 C 6.263 21.714,6.502 21.901,6.736 21.965 C 6.939 22.019,7.267 21.989,7.445 21.899 C 7.519 21.862,8.575 20.839,9.790 19.626 L 12.000 17.421 14.210 19.626 C 15.426 20.839,16.483 21.865,16.560 21.905 C 16.659 21.957,16.788 21.979,17.000 21.979 C 17.258 21.980,17.327 21.964,17.492 21.867 C 17.714 21.737,17.901 21.498,17.965 21.264 C 18.019 21.061,17.989 20.733,17.899 20.555 C 17.862 20.481,17.065 19.651,16.128 18.712 L 14.425 17.004 17.003 16.991 C 19.578 16.978,19.580 16.978,19.860 16.885 C 20.837 16.560,21.557 15.840,21.886 14.860 L 21.980 14.580 21.991 9.294 L 22.002 4.009 22.180 3.982 C 22.423 3.946,22.712 3.741,22.859 3.503 C 22.966 3.329,22.980 3.271,22.980 3.003 C 22.980 2.746,22.964 2.672,22.872 2.516 C 22.740 2.293,22.533 2.128,22.290 2.055 C 22.027 1.976,1.948 1.978,1.695 2.057 M20.000 9.054 C 20.000 13.220,19.990 14.139,19.945 14.290 C 19.872 14.533,19.707 14.740,19.484 14.872 L 19.300 14.980 12.000 14.980 L 4.700 14.980 4.516 14.872 C 4.293 14.740,4.128 14.533,4.055 14.290 C 4.010 14.139,4.000 13.220,4.000 9.054 L 4.000 4.000 12.000 4.000 L 20.000 4.000 20.000 9.054 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Presentation = /*@__PURE__*/ forwardRef<ComponentInternals, PresentationProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    