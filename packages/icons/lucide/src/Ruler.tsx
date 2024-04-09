
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type RulerProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-ruler" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.466 1.039 C 5.969 1.130,5.514 1.311,5.080 1.593 C 4.837 1.751,2.067 4.478,1.761 4.860 C 0.812 6.047,0.747 7.605,1.592 8.920 C 1.757 9.177,14.412 21.874,14.875 22.247 C 16.125 23.253,17.873 23.253,19.125 22.247 C 19.498 21.946,22.178 19.248,22.368 18.980 C 23.253 17.735,23.204 16.064,22.247 14.875 C 21.874 14.413,9.178 1.757,8.920 1.592 C 8.324 1.209,7.797 1.041,7.120 1.019 C 6.867 1.011,6.573 1.020,6.466 1.039 M7.591 3.140 C 7.769 3.221,7.956 3.381,8.450 3.871 L 9.081 4.498 8.406 5.179 C 8.035 5.554,7.695 5.914,7.651 5.980 C 7.371 6.396,7.516 7.041,7.954 7.331 C 8.269 7.540,8.750 7.535,9.057 7.320 C 9.147 7.257,9.508 6.917,9.860 6.563 L 10.499 5.920 11.290 6.710 L 12.080 7.499 11.406 8.180 C 10.649 8.944,10.586 9.023,10.530 9.288 C 10.382 9.991,10.980 10.596,11.697 10.469 C 11.972 10.420,12.128 10.298,12.860 9.563 L 13.499 8.920 14.290 9.710 L 15.080 10.499 14.406 11.180 C 13.649 11.944,13.586 12.023,13.530 12.288 C 13.416 12.830,13.777 13.379,14.307 13.470 C 14.547 13.512,14.859 13.459,15.019 13.351 C 15.085 13.306,15.446 12.965,15.820 12.594 L 16.501 11.920 17.290 12.710 L 18.080 13.501 17.437 14.140 C 17.083 14.492,16.744 14.852,16.682 14.940 C 16.279 15.517,16.620 16.352,17.307 16.470 C 17.547 16.512,17.859 16.459,18.019 16.351 C 18.085 16.306,18.446 15.965,18.821 15.594 L 19.502 14.919 20.129 15.550 C 20.893 16.320,20.980 16.468,20.980 17.000 C 20.980 17.594,20.976 17.599,19.348 19.233 C 18.574 20.010,17.864 20.700,17.770 20.765 C 17.324 21.077,16.676 21.077,16.230 20.765 C 16.136 20.699,13.169 17.751,9.636 14.213 C 2.424 6.991,3.025 7.646,3.023 7.000 C 3.021 6.404,3.021 6.403,4.672 4.747 C 5.457 3.959,6.180 3.267,6.277 3.209 C 6.674 2.974,7.171 2.947,7.591 3.140 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Ruler = /*@__PURE__*/ forwardRef<ComponentInternals, RulerProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    