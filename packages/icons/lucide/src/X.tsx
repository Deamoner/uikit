
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type XProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.670 5.061 C 5.448 5.142,5.250 5.309,5.128 5.516 C 5.036 5.672,5.020 5.745,5.021 6.000 C 5.021 6.212,5.043 6.341,5.095 6.440 C 5.135 6.517,6.386 7.800,7.874 9.290 L 10.579 12.000 7.874 14.710 C 6.386 16.200,5.135 17.483,5.095 17.560 C 5.043 17.659,5.021 17.788,5.021 18.000 C 5.020 18.258,5.036 18.327,5.133 18.492 C 5.263 18.714,5.502 18.901,5.736 18.965 C 5.938 19.019,6.266 18.989,6.445 18.899 C 6.519 18.862,7.800 17.614,9.290 16.126 L 12.000 13.421 14.710 16.126 C 16.200 17.614,17.483 18.865,17.560 18.905 C 17.659 18.957,17.788 18.979,18.000 18.979 C 18.258 18.980,18.327 18.964,18.492 18.867 C 18.714 18.737,18.901 18.498,18.965 18.264 C 19.019 18.062,18.989 17.734,18.899 17.555 C 18.862 17.481,17.614 16.200,16.126 14.710 L 13.421 12.000 16.126 9.290 C 17.614 7.800,18.865 6.517,18.905 6.440 C 18.957 6.341,18.979 6.212,18.979 6.000 C 18.980 5.745,18.964 5.672,18.872 5.516 C 18.618 5.084,18.138 4.906,17.657 5.065 C 17.478 5.125,17.210 5.380,14.730 7.854 L 12.000 10.578 9.270 7.854 C 6.790 5.380,6.522 5.125,6.343 5.065 C 6.107 4.987,5.874 4.986,5.670 5.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const X = /*@__PURE__*/ forwardRef<ComponentInternals, XProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    