
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SearchSlashProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-search-slash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.340 2.024 C 9.026 2.160,8.091 2.415,7.060 2.918 C 5.244 3.804,3.840 5.202,2.939 7.020 C 1.688 9.542,1.688 12.458,2.939 14.980 C 3.404 15.918,3.897 16.609,4.621 17.337 C 7.349 20.077,11.484 20.777,14.940 19.083 C 15.468 18.824,16.037 18.479,16.438 18.173 L 16.616 18.037 18.518 19.934 C 19.564 20.978,20.481 21.862,20.555 21.899 C 21.010 22.128,21.601 21.944,21.867 21.492 C 21.964 21.327,21.980 21.258,21.979 21.000 C 21.979 20.788,21.957 20.659,21.905 20.560 C 21.865 20.483,20.978 19.564,19.934 18.518 L 18.037 16.616 18.173 16.438 C 18.479 16.037,18.824 15.468,19.083 14.940 C 20.302 12.453,20.302 9.548,19.084 7.060 C 17.773 4.384,15.266 2.546,12.320 2.101 C 11.911 2.039,10.662 1.991,10.340 2.024 M12.102 4.098 C 15.099 4.551,17.491 6.985,17.924 10.020 C 17.990 10.483,17.990 11.517,17.924 11.980 C 17.487 15.047,15.126 17.424,12.020 17.926 C 11.607 17.992,10.393 17.992,9.980 17.926 C 6.873 17.424,4.513 15.047,4.076 11.980 C 3.967 11.217,4.022 10.093,4.205 9.340 C 4.815 6.828,6.824 4.818,9.340 4.205 C 9.624 4.135,10.064 4.069,10.540 4.023 C 10.813 3.997,11.726 4.041,12.102 4.098 M13.080 7.603 C 12.942 7.665,12.302 8.281,10.347 10.232 C 8.943 11.633,7.744 12.852,7.682 12.940 C 7.279 13.517,7.617 14.347,8.305 14.469 C 8.570 14.516,8.858 14.459,9.055 14.321 C 9.146 14.258,10.367 13.057,11.768 11.653 C 13.791 9.626,14.334 9.062,14.398 8.914 C 14.695 8.240,14.230 7.518,13.502 7.521 C 13.347 7.521,13.196 7.551,13.080 7.603 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const SearchSlash = /*@__PURE__*/ forwardRef<ComponentInternals, SearchSlashProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    