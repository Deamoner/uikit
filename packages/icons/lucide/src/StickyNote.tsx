
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type StickyNoteProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-sticky-note" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.381 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.816 21.582,21.554 20.851,21.886 19.860 L 21.980 19.580 21.991 13.723 C 22.001 8.387,21.996 7.848,21.936 7.663 C 21.876 7.475,21.675 7.264,19.225 4.816 C 17.452 3.043,16.527 2.147,16.420 2.096 C 16.265 2.023,16.067 2.020,10.480 2.014 C 7.301 2.011,4.609 2.024,4.499 2.043 M14.009 5.790 C 14.023 7.533,14.026 7.587,14.116 7.860 C 14.437 8.835,15.165 9.563,16.140 9.884 C 16.413 9.974,16.467 9.977,18.210 9.991 L 20.000 10.005 20.000 14.556 C 20.000 19.497,20.008 19.318,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 4.005,3.975 4.631,4.304 4.303 C 4.619 3.987,4.296 4.006,9.427 4.003 L 13.995 4.000 14.009 5.790 M19.250 7.992 C 19.080 7.999,18.436 7.999,17.820 7.992 L 16.700 7.980 16.516 7.872 C 16.415 7.813,16.284 7.700,16.225 7.623 C 16.009 7.340,16.000 7.265,16.000 5.785 L 16.000 4.420 17.780 6.200 L 19.561 7.980 19.250 7.992 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const StickyNote = /*@__PURE__*/ forwardRef<ComponentInternals, StickyNoteProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    