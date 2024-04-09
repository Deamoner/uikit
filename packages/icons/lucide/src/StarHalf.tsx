
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type StarHalfProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-star-half" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.643 1.066 C 11.263 1.206,11.256 1.218,9.745 4.401 C 8.978 6.017,8.339 7.352,8.325 7.367 C 8.311 7.382,6.833 7.604,5.040 7.859 C 3.247 8.114,1.724 8.341,1.656 8.363 C 1.315 8.471,1.001 8.921,1.001 9.300 C 1.001 9.728,0.983 9.708,3.555 12.179 C 4.856 13.428,5.920 14.453,5.920 14.455 C 5.920 14.458,5.668 15.909,5.360 17.680 C 5.052 19.451,4.800 20.955,4.800 21.023 C 4.800 21.663,5.502 22.158,6.107 21.944 C 6.361 21.855,12.486 18.683,12.640 18.562 C 12.717 18.501,12.823 18.367,12.876 18.265 C 13.274 17.492,12.577 16.613,11.748 16.843 C 11.665 16.866,10.605 17.397,9.392 18.023 C 8.180 18.649,7.179 19.152,7.167 19.140 C 7.155 19.128,7.339 18.000,7.577 16.633 C 8.034 14.002,8.040 13.953,7.881 13.642 C 7.829 13.541,7.151 12.861,5.997 11.752 C 4.257 10.081,4.198 10.019,4.307 9.990 C 4.369 9.974,5.491 9.808,6.800 9.621 C 8.109 9.435,9.244 9.264,9.323 9.241 C 9.567 9.171,9.788 8.943,9.977 8.565 C 10.321 7.879,12.891 2.458,12.945 2.306 C 13.102 1.860,12.890 1.339,12.463 1.126 C 12.221 1.005,11.878 0.980,11.643 1.066 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const StarHalf = /*@__PURE__*/ forwardRef<ComponentInternals, StarHalfProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    