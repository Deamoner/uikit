
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TablePropertiesProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-table-properties" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M14.000 6.000 L 14.000 8.000 9.000 8.000 L 4.000 8.000 4.000 6.447 C 4.000 4.649,4.007 4.599,4.304 4.303 C 4.619 3.987,4.296 4.006,9.430 4.003 L 14.000 4.000 14.000 6.000 M19.310 4.061 C 19.452 4.103,19.571 4.178,19.697 4.303 C 19.993 4.599,20.000 4.650,20.000 6.447 L 20.000 8.000 18.000 8.000 L 16.000 8.000 16.000 6.000 L 16.000 4.000 17.553 4.000 C 18.826 4.000,19.142 4.011,19.310 4.061 M14.000 12.000 L 14.000 14.000 9.000 14.000 L 4.000 14.000 4.000 12.000 L 4.000 10.000 9.000 10.000 L 14.000 10.000 14.000 12.000 M20.000 12.000 L 20.000 14.000 18.000 14.000 L 16.000 14.000 16.000 12.000 L 16.000 10.000 18.000 10.000 L 20.000 10.000 20.000 12.000 M14.000 18.001 L 14.000 20.001 9.350 19.991 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 4.006 19.336,4.000 19.283,4.000 17.575 L 4.000 16.000 9.000 16.000 L 14.000 16.000 14.000 18.001 M20.000 17.554 C 20.000 19.242,19.989 19.342,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 17.650 19.992 L 16.000 20.003 16.000 18.002 L 16.000 16.000 18.000 16.000 L 20.000 16.000 20.000 17.554 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const TableProperties = /*@__PURE__*/ forwardRef<ComponentInternals, TablePropertiesProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    