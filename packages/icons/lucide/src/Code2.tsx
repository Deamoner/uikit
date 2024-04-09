
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Code2Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-code-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.240 3.035 C 13.864 3.158,13.642 3.399,13.507 3.827 C 13.453 3.999,12.305 7.668,10.957 11.980 C 9.046 18.093,8.506 19.864,8.508 20.020 C 8.514 20.703,9.248 21.188,9.871 20.920 C 10.178 20.788,10.373 20.554,10.493 20.174 C 10.547 20.001,11.695 16.332,13.043 12.020 C 14.954 5.907,15.494 4.136,15.492 3.980 C 15.489 3.626,15.270 3.278,14.947 3.113 C 14.771 3.024,14.399 2.983,14.240 3.035 M5.640 7.068 C 5.486 7.121,5.151 7.438,3.347 9.235 C 2.166 10.411,1.187 11.419,1.127 11.520 C 1.037 11.672,1.020 11.746,1.020 12.000 C 1.020 12.254,1.036 12.328,1.127 12.480 C 1.261 12.705,5.368 16.805,5.560 16.905 C 5.659 16.957,5.788 16.979,6.000 16.979 C 6.258 16.980,6.327 16.964,6.492 16.867 C 6.714 16.737,6.901 16.498,6.965 16.264 C 7.019 16.061,6.989 15.733,6.899 15.555 C 6.862 15.481,6.064 14.650,5.126 13.710 L 3.421 12.000 5.126 10.290 C 6.064 9.350,6.865 8.517,6.905 8.440 C 6.957 8.341,6.979 8.212,6.979 8.000 C 6.980 7.745,6.964 7.672,6.872 7.516 C 6.617 7.083,6.121 6.903,5.640 7.068 M17.670 7.061 C 17.448 7.142,17.250 7.309,17.128 7.516 C 17.036 7.672,17.020 7.745,17.021 8.000 C 17.021 8.212,17.043 8.341,17.095 8.440 C 17.135 8.517,17.936 9.350,18.874 10.290 L 20.579 12.000 18.874 13.710 C 17.936 14.650,17.138 15.481,17.101 15.555 C 16.872 16.010,17.056 16.601,17.508 16.867 C 17.673 16.964,17.743 16.980,18.000 16.980 C 18.254 16.980,18.328 16.964,18.480 16.873 C 18.705 16.739,22.805 12.632,22.905 12.440 C 22.957 12.341,22.979 12.212,22.979 12.000 C 22.980 11.745,22.964 11.673,22.873 11.520 C 22.813 11.419,21.834 10.412,20.653 9.235 C 18.748 7.338,18.521 7.124,18.343 7.065 C 18.107 6.987,17.874 6.986,17.670 7.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Code2 = /*@__PURE__*/ forwardRef<ComponentInternals, Code2Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    