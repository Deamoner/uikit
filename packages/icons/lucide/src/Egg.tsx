
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type EggProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-egg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.600 1.025 C 10.157 1.208,8.891 1.898,7.579 3.216 C 5.624 5.182,4.099 8.191,3.617 11.033 C 3.404 12.289,3.399 13.851,3.603 15.238 C 3.938 17.519,4.816 19.419,6.150 20.744 C 7.340 21.927,8.774 22.618,10.640 22.907 C 11.282 23.006,12.718 23.006,13.360 22.907 C 16.207 22.466,18.222 20.994,19.445 18.460 C 20.256 16.781,20.645 14.625,20.527 12.457 C 20.440 10.846,20.123 9.493,19.456 7.893 C 17.950 4.275,15.324 1.566,12.873 1.101 C 12.527 1.035,11.842 0.995,11.600 1.025 M12.743 3.124 C 13.466 3.347,14.183 3.824,14.962 4.600 C 16.192 5.824,17.171 7.416,17.864 9.318 C 18.397 10.779,18.584 12.042,18.516 13.726 C 18.453 15.298,18.153 16.572,17.574 17.731 C 16.699 19.481,15.292 20.529,13.337 20.886 C 12.942 20.958,12.712 20.974,12.000 20.974 C 10.992 20.974,10.489 20.900,9.710 20.640 C 7.462 19.888,6.046 17.956,5.596 15.027 C 5.445 14.040,5.429 12.503,5.561 11.580 C 5.854 9.522,6.892 7.174,8.282 5.420 C 9.284 4.156,10.580 3.223,11.591 3.039 C 11.876 2.987,12.431 3.027,12.743 3.124 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Egg = /*@__PURE__*/ forwardRef<ComponentInternals, EggProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    