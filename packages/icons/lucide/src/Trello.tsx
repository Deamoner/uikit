
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TrelloProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-trello" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.755,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 5.758,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M6.695 6.057 C 6.466 6.129,6.256 6.299,6.128 6.516 L 6.020 6.700 6.009 11.413 C 6.002 14.504,6.013 16.178,6.039 16.277 C 6.099 16.498,6.290 16.739,6.508 16.867 L 6.700 16.980 8.500 16.980 L 10.300 16.980 10.492 16.867 C 10.710 16.739,10.901 16.498,10.961 16.277 C 10.987 16.178,10.998 14.504,10.991 11.413 L 10.980 6.700 10.872 6.516 C 10.740 6.293,10.533 6.128,10.290 6.055 C 10.035 5.978,6.941 5.980,6.695 6.057 M13.695 6.057 C 13.466 6.129,13.256 6.299,13.128 6.516 L 13.020 6.700 13.009 9.412 C 13.002 11.172,13.012 12.177,13.039 12.276 C 13.099 12.498,13.290 12.739,13.508 12.867 L 13.700 12.980 15.500 12.980 L 17.300 12.980 17.492 12.867 C 17.710 12.739,17.901 12.498,17.961 12.276 C 17.988 12.177,17.998 11.172,17.991 9.412 L 17.980 6.700 17.872 6.516 C 17.740 6.293,17.533 6.128,17.290 6.055 C 17.035 5.978,13.941 5.980,13.695 6.057 M9.000 11.500 L 9.000 15.000 8.500 15.000 L 8.000 15.000 8.000 11.500 L 8.000 8.000 8.500 8.000 L 9.000 8.000 9.000 11.500 M16.000 9.500 L 16.000 11.000 15.500 11.000 L 15.000 11.000 15.000 9.500 L 15.000 8.000 15.500 8.000 L 16.000 8.000 16.000 9.500 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const Trello = /*@__PURE__*/ forwardRef<ComponentInternals, TrelloProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    