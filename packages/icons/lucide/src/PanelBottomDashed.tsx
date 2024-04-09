
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PanelBottomDashedProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-panel-bottom-dashed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.992 4.868,20.000 5.488,20.000 9.447 L 20.000 14.000 19.446 14.000 C 18.648 14.000,18.367 14.110,18.128 14.516 C 18.037 14.672,18.020 14.746,18.020 15.000 C 18.020 15.256,18.036 15.328,18.131 15.489 C 18.256 15.702,18.449 15.864,18.670 15.943 C 18.768 15.978,19.023 15.997,19.410 15.998 L 20.000 16.000 20.000 17.554 C 20.000 19.242,19.989 19.342,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 4.006 19.336,4.000 19.283,4.000 17.575 L 4.000 16.000 4.590 15.998 C 4.977 15.997,5.232 15.978,5.330 15.943 C 5.551 15.864,5.744 15.702,5.869 15.489 C 5.964 15.328,5.980 15.256,5.980 15.000 C 5.980 14.746,5.963 14.672,5.872 14.516 C 5.633 14.110,5.352 14.000,4.554 14.000 L 4.000 14.000 4.000 9.447 C 4.000 5.488,4.008 4.868,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M8.695 14.057 C 8.466 14.129,8.256 14.299,8.128 14.516 C 8.037 14.672,8.020 14.746,8.020 15.000 C 8.020 15.256,8.036 15.328,8.131 15.489 C 8.256 15.702,8.449 15.864,8.670 15.943 C 8.878 16.017,10.122 16.017,10.330 15.943 C 10.551 15.864,10.744 15.702,10.869 15.489 C 10.964 15.328,10.980 15.256,10.980 15.000 C 10.980 14.746,10.963 14.672,10.872 14.516 C 10.740 14.293,10.533 14.128,10.290 14.055 C 10.050 13.983,8.928 13.984,8.695 14.057 M13.695 14.057 C 13.466 14.129,13.256 14.299,13.128 14.516 C 13.037 14.672,13.020 14.746,13.020 15.000 C 13.020 15.256,13.036 15.328,13.131 15.489 C 13.256 15.702,13.449 15.864,13.670 15.943 C 13.878 16.017,15.122 16.017,15.330 15.943 C 15.551 15.864,15.744 15.702,15.869 15.489 C 15.964 15.328,15.980 15.256,15.980 15.000 C 15.980 14.746,15.963 14.672,15.872 14.516 C 15.740 14.293,15.533 14.128,15.290 14.055 C 15.050 13.983,13.928 13.984,13.695 14.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const PanelBottomDashed = /*@__PURE__*/ forwardRef<ComponentInternals, PanelBottomDashedProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    