
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SwordProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-sword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.695 2.056 C 2.465 2.129,2.256 2.299,2.128 2.516 L 2.020 2.700 2.008 4.415 C 1.998 5.922,2.005 6.154,2.063 6.335 C 2.125 6.528,2.458 6.869,7.605 12.021 L 13.080 17.501 12.657 17.921 C 12.100 18.473,12.020 18.609,12.020 19.000 C 12.020 19.257,12.036 19.327,12.133 19.492 C 12.263 19.714,12.502 19.901,12.736 19.965 C 12.939 20.019,13.267 19.989,13.445 19.899 C 13.519 19.862,14.125 19.289,14.790 18.626 L 16.001 17.421 17.288 18.708 L 18.576 19.996 18.373 20.210 C 18.076 20.524,18.022 20.646,18.021 21.000 C 18.020 21.258,18.036 21.327,18.133 21.492 C 18.413 21.968,19.032 22.138,19.492 21.866 C 19.706 21.739,21.806 19.627,21.905 19.440 C 21.957 19.341,21.979 19.213,21.979 19.000 C 21.980 18.745,21.964 18.672,21.872 18.516 C 21.747 18.303,21.550 18.141,21.316 18.058 C 20.944 17.927,20.605 18.019,20.241 18.349 L 19.993 18.573 18.707 17.287 L 17.421 16.001 18.626 14.790 C 19.289 14.125,19.864 13.517,19.905 13.440 C 19.957 13.341,19.979 13.213,19.979 13.000 C 19.980 12.745,19.964 12.672,19.872 12.516 C 19.618 12.084,19.134 11.905,18.659 12.066 C 18.505 12.119,18.364 12.231,17.982 12.604 L 17.500 13.076 12.040 7.624 C 8.309 3.899,6.529 2.148,6.420 2.096 C 6.272 2.025,6.138 2.019,4.560 2.012 C 3.248 2.006,2.822 2.016,2.695 2.056 M10.830 9.250 L 16.080 14.500 15.290 15.290 L 14.500 16.080 9.250 10.830 L 4.000 5.580 4.000 4.790 L 4.000 4.000 4.790 4.000 L 5.580 4.000 10.830 9.250 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const Sword = /*@__PURE__*/ forwardRef<ComponentInternals, SwordProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    