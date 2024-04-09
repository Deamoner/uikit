
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ZoomInProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-zoom-in" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.340 2.024 C 9.026 2.160,8.091 2.415,7.060 2.918 C 5.244 3.804,3.840 5.202,2.939 7.020 C 1.688 9.542,1.688 12.458,2.939 14.980 C 3.404 15.918,3.897 16.609,4.621 17.337 C 7.349 20.077,11.484 20.777,14.940 19.083 C 15.468 18.824,16.037 18.479,16.438 18.173 L 16.616 18.037 18.518 19.934 C 19.564 20.978,20.481 21.862,20.555 21.899 C 21.010 22.128,21.601 21.944,21.867 21.492 C 21.964 21.327,21.980 21.258,21.979 21.000 C 21.979 20.788,21.957 20.659,21.905 20.560 C 21.865 20.483,20.978 19.564,19.934 18.518 L 18.037 16.616 18.173 16.438 C 18.479 16.037,18.824 15.468,19.083 14.940 C 20.302 12.453,20.302 9.548,19.084 7.060 C 17.773 4.384,15.266 2.546,12.320 2.101 C 11.911 2.039,10.662 1.991,10.340 2.024 M12.102 4.098 C 15.099 4.551,17.491 6.985,17.924 10.020 C 17.990 10.483,17.990 11.517,17.924 11.980 C 17.487 15.047,15.126 17.424,12.020 17.926 C 11.607 17.992,10.393 17.992,9.980 17.926 C 6.873 17.424,4.513 15.047,4.076 11.980 C 3.967 11.217,4.022 10.093,4.205 9.340 C 4.815 6.828,6.824 4.818,9.340 4.205 C 9.624 4.135,10.064 4.069,10.540 4.023 C 10.813 3.997,11.726 4.041,12.102 4.098 M10.695 7.057 C 10.466 7.129,10.256 7.299,10.128 7.516 L 10.020 7.700 10.008 8.850 L 9.995 10.000 8.944 10.000 C 7.797 10.000,7.643 10.022,7.382 10.221 C 7.302 10.282,7.187 10.415,7.128 10.516 C 7.037 10.672,7.020 10.746,7.020 11.000 C 7.020 11.256,7.036 11.328,7.131 11.489 C 7.192 11.592,7.304 11.725,7.381 11.783 C 7.642 11.983,7.738 11.996,8.908 11.998 L 9.995 12.000 10.008 13.153 L 10.020 14.307 10.141 14.503 C 10.543 15.156,11.457 15.156,11.859 14.503 L 11.980 14.307 11.992 13.153 L 12.005 12.000 13.092 11.998 C 14.262 11.996,14.358 11.983,14.619 11.783 C 14.696 11.725,14.808 11.592,14.869 11.489 C 14.964 11.328,14.980 11.256,14.980 11.000 C 14.980 10.746,14.963 10.672,14.872 10.516 C 14.813 10.415,14.698 10.282,14.618 10.221 C 14.357 10.022,14.203 10.000,13.056 10.000 L 12.005 10.000 11.992 8.850 L 11.980 7.700 11.872 7.516 C 11.628 7.101,11.150 6.915,10.695 7.057 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const ZoomIn = /*@__PURE__*/ forwardRef<ComponentInternals, ZoomInProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    