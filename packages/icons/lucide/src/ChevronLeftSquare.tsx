
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ChevronLeftSquareProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-chevron-left-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.755,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 5.758,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M13.640 7.068 C 13.486 7.121,13.151 7.438,11.347 9.235 C 10.166 10.411,9.187 11.419,9.127 11.520 C 9.037 11.672,9.020 11.746,9.020 12.000 C 9.020 12.254,9.036 12.328,9.127 12.480 C 9.261 12.705,13.368 16.805,13.560 16.905 C 13.659 16.957,13.788 16.979,14.000 16.979 C 14.258 16.980,14.327 16.964,14.492 16.867 C 14.714 16.737,14.901 16.498,14.965 16.264 C 15.019 16.061,14.989 15.733,14.899 15.555 C 14.862 15.481,14.064 14.650,13.126 13.710 L 11.421 12.000 13.126 10.290 C 14.064 9.350,14.865 8.517,14.905 8.440 C 14.957 8.341,14.979 8.212,14.979 8.000 C 14.980 7.745,14.964 7.672,14.872 7.516 C 14.617 7.083,14.121 6.903,13.640 7.068 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ChevronLeftSquare = /*@__PURE__*/ forwardRef<ComponentInternals, ChevronLeftSquareProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    