
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ArrowUpDownProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.580 3.096 C 6.422 3.172,5.940 3.634,4.274 5.306 C 3.116 6.469,2.138 7.481,2.101 7.555 C 1.872 8.010,2.056 8.601,2.508 8.867 C 2.673 8.964,2.742 8.980,3.000 8.979 C 3.213 8.979,3.341 8.957,3.440 8.905 C 3.517 8.864,4.124 8.289,4.790 7.627 L 5.999 6.423 6.010 13.364 L 6.020 20.306 6.141 20.503 C 6.543 21.156,7.457 21.156,7.859 20.503 L 7.980 20.306 7.990 13.364 L 8.001 6.423 9.210 7.627 C 9.876 8.289,10.483 8.864,10.560 8.905 C 10.659 8.957,10.787 8.979,11.000 8.979 C 11.258 8.980,11.327 8.964,11.492 8.867 C 11.714 8.737,11.901 8.498,11.965 8.264 C 12.019 8.061,11.989 7.733,11.899 7.555 C 11.862 7.481,10.884 6.469,9.726 5.306 C 7.433 3.004,7.429 3.001,7.000 3.001 C 6.851 3.001,6.716 3.031,6.580 3.096 M16.695 3.057 C 16.466 3.129,16.256 3.299,16.128 3.516 L 16.020 3.700 16.010 10.638 L 15.999 17.575 14.770 16.354 C 13.688 15.279,13.516 15.124,13.343 15.066 C 12.863 14.905,12.382 15.084,12.128 15.516 C 12.036 15.672,12.020 15.745,12.021 16.000 C 12.021 16.212,12.043 16.341,12.095 16.440 C 12.135 16.517,13.116 17.531,14.274 18.694 C 16.567 20.996,16.571 20.999,17.000 20.999 C 17.429 20.999,17.433 20.996,19.726 18.694 C 20.884 17.531,21.865 16.517,21.905 16.440 C 21.957 16.341,21.979 16.212,21.979 16.000 C 21.980 15.745,21.964 15.672,21.872 15.516 C 21.618 15.084,21.137 14.905,20.657 15.066 C 20.484 15.124,20.312 15.279,19.230 16.354 L 18.001 17.575 17.990 10.638 L 17.980 3.700 17.872 3.516 C 17.628 3.101,17.150 2.915,16.695 3.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ArrowUpDown = /*@__PURE__*/ forwardRef<ComponentInternals, ArrowUpDownProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    