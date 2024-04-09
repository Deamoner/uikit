
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type AlbumProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-album" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M10.002 7.590 C 10.003 10.484,10.014 11.209,10.057 11.330 C 10.241 11.846,10.796 12.113,11.325 11.939 C 11.523 11.874,11.639 11.771,12.771 10.646 L 14.001 9.423 15.211 10.627 C 15.876 11.289,16.483 11.864,16.560 11.905 C 16.659 11.957,16.787 11.979,17.000 11.979 C 17.255 11.980,17.328 11.964,17.484 11.872 C 17.585 11.813,17.716 11.700,17.775 11.623 C 18.008 11.317,18.000 11.464,18.000 7.575 L 18.000 4.000 18.553 4.000 C 19.249 4.000,19.446 4.052,19.697 4.303 C 20.024 4.631,20.000 4.009,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 4.005,3.975 4.631,4.304 4.303 C 4.609 3.997,4.520 4.006,7.430 4.003 L 10.000 4.000 10.002 7.590 M16.000 6.287 L 16.000 8.574 15.270 7.854 C 14.496 7.090,14.362 7.000,14.000 7.000 C 13.638 7.000,13.504 7.090,12.730 7.854 L 12.000 8.574 12.000 6.287 L 12.000 4.000 14.000 4.000 L 16.000 4.000 16.000 6.287 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const Album = /*@__PURE__*/ forwardRef<ComponentInternals, AlbumProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    