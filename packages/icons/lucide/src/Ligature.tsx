
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LigatureProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-ligature" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.400 3.041 C 9.525 3.269,7.899 4.586,7.278 6.380 C 7.033 7.087,7.028 7.140,7.011 9.150 L 6.995 11.000 6.444 11.000 C 5.648 11.000,5.367 11.111,5.128 11.516 C 5.037 11.672,5.020 11.746,5.020 12.000 C 5.020 12.256,5.036 12.328,5.131 12.489 C 5.256 12.702,5.449 12.864,5.670 12.943 C 5.768 12.978,6.023 12.997,6.410 12.998 L 7.000 13.000 7.000 16.000 L 7.000 19.000 6.446 19.000 C 5.648 19.000,5.367 19.110,5.128 19.516 C 5.037 19.672,5.020 19.746,5.020 20.000 C 5.020 20.256,5.036 20.328,5.131 20.489 C 5.256 20.702,5.449 20.864,5.670 20.943 C 5.889 21.021,10.111 21.021,10.330 20.943 C 10.551 20.864,10.744 20.702,10.869 20.489 C 10.964 20.328,10.980 20.256,10.980 20.000 C 10.980 19.746,10.963 19.672,10.872 19.516 C 10.633 19.110,10.352 19.000,9.554 19.000 L 9.000 19.000 9.000 16.000 L 9.000 13.000 9.590 12.998 C 9.977 12.997,10.232 12.978,10.330 12.943 C 10.551 12.864,10.744 12.702,10.869 12.489 C 10.964 12.328,10.980 12.256,10.980 12.000 C 10.980 11.746,10.963 11.672,10.872 11.516 C 10.633 11.110,10.352 11.000,9.554 11.000 L 9.000 11.000 9.000 9.390 C 9.001 7.422,9.042 7.117,9.389 6.520 C 9.584 6.184,10.184 5.584,10.520 5.389 C 11.175 5.009,12.004 4.911,12.819 5.120 C 13.481 5.289,14.127 5.750,14.519 6.334 C 14.857 6.838,15.070 6.978,15.500 6.978 C 15.811 6.978,15.971 6.915,16.193 6.706 C 16.355 6.553,16.425 6.426,16.479 6.185 C 16.542 5.901,16.469 5.653,16.203 5.249 C 15.481 4.152,14.278 3.348,12.993 3.100 C 12.583 3.021,11.802 2.992,11.400 3.041 M13.695 11.057 C 13.466 11.129,13.256 11.299,13.128 11.516 C 13.037 11.672,13.020 11.746,13.020 12.000 C 13.020 12.256,13.036 12.328,13.131 12.489 C 13.256 12.702,13.449 12.864,13.670 12.943 C 13.768 12.978,14.023 12.997,14.410 12.998 L 15.000 13.000 15.000 16.000 L 15.000 19.000 14.446 19.000 C 13.648 19.000,13.367 19.110,13.128 19.516 C 13.037 19.672,13.020 19.746,13.020 20.000 C 13.020 20.256,13.036 20.328,13.131 20.489 C 13.256 20.702,13.449 20.864,13.670 20.943 C 13.889 21.021,18.111 21.021,18.330 20.943 C 18.551 20.864,18.744 20.702,18.869 20.489 C 18.964 20.328,18.980 20.256,18.980 20.000 C 18.980 19.746,18.963 19.672,18.872 19.516 C 18.633 19.110,18.352 19.000,17.554 19.000 L 17.002 19.000 16.991 15.350 L 16.980 11.700 16.872 11.516 C 16.740 11.293,16.533 11.128,16.290 11.055 C 16.039 10.979,13.937 10.981,13.695 11.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Ligature = /*@__PURE__*/ forwardRef<ComponentInternals, LigatureProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    