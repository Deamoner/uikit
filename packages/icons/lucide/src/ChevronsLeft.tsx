
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ChevronsLeftProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-chevrons-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.660 6.066 C 10.474 6.122,10.279 6.307,7.847 8.733 C 6.371 10.206,5.188 11.418,5.127 11.520 C 5.036 11.673,5.020 11.745,5.021 12.000 C 5.021 12.212,5.043 12.341,5.095 12.440 C 5.192 12.625,10.292 17.737,10.508 17.865 C 10.967 18.139,11.587 17.968,11.867 17.492 C 11.964 17.327,11.980 17.258,11.979 17.000 C 11.979 16.788,11.957 16.659,11.905 16.560 C 11.865 16.483,10.839 15.425,9.626 14.210 L 7.421 12.000 9.626 9.790 C 10.839 8.574,11.865 7.517,11.905 7.440 C 11.957 7.341,11.979 7.212,11.979 7.000 C 11.980 6.745,11.964 6.672,11.872 6.516 C 11.740 6.293,11.533 6.128,11.290 6.055 C 11.062 5.986,10.915 5.989,10.660 6.066 M17.660 6.066 C 17.474 6.122,17.279 6.307,14.847 8.733 C 13.371 10.206,12.188 11.418,12.127 11.520 C 12.036 11.673,12.020 11.745,12.021 12.000 C 12.021 12.212,12.043 12.341,12.095 12.440 C 12.192 12.625,17.292 17.737,17.508 17.865 C 17.967 18.139,18.587 17.968,18.867 17.492 C 18.964 17.327,18.980 17.258,18.979 17.000 C 18.979 16.788,18.957 16.659,18.905 16.560 C 18.865 16.483,17.839 15.425,16.626 14.210 L 14.421 12.000 16.626 9.790 C 17.839 8.574,18.865 7.517,18.905 7.440 C 18.957 7.341,18.979 7.212,18.979 7.000 C 18.980 6.745,18.964 6.672,18.872 6.516 C 18.740 6.293,18.533 6.128,18.290 6.055 C 18.062 5.986,17.915 5.989,17.660 6.066 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ChevronsLeft = /*@__PURE__*/ forwardRef<ComponentInternals, ChevronsLeftProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    