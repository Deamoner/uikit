
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type HomeProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.660 1.064 C 11.563 1.099,9.666 2.549,6.862 4.731 C 2.586 8.058,2.216 8.356,2.122 8.539 L 2.020 8.738 2.020 14.639 L 2.020 20.540 2.114 20.840 C 2.422 21.827,3.173 22.578,4.160 22.886 L 4.460 22.980 12.000 22.980 L 19.540 22.980 19.840 22.886 C 20.827 22.578,21.578 21.827,21.886 20.840 L 21.980 20.540 21.980 14.639 L 21.980 8.738 21.878 8.539 C 21.784 8.356,21.414 8.058,17.138 4.731 C 13.902 2.213,12.446 1.104,12.323 1.061 C 12.106 0.986,11.872 0.987,11.660 1.064 M16.020 6.395 L 20.000 9.491 20.000 14.799 C 20.000 19.181,19.990 20.139,19.945 20.290 C 19.872 20.533,19.707 20.740,19.484 20.872 L 19.300 20.980 17.651 20.992 L 16.001 21.003 15.991 16.352 L 15.980 11.700 15.872 11.516 C 15.813 11.415,15.698 11.282,15.618 11.221 C 15.324 10.997,15.372 11.000,12.000 11.000 C 8.628 11.000,8.676 10.997,8.382 11.221 C 8.302 11.282,8.187 11.415,8.128 11.516 L 8.020 11.700 8.009 16.352 L 7.999 21.003 6.349 20.992 L 4.700 20.980 4.516 20.872 C 4.415 20.813,4.284 20.700,4.225 20.623 C 3.988 20.312,4.000 20.627,4.000 14.821 L 4.000 9.491 7.990 6.386 C 10.184 4.679,11.993 3.286,12.010 3.291 C 12.026 3.296,13.831 4.693,16.020 6.395 M14.000 17.000 L 14.000 21.000 12.000 21.000 L 10.000 21.000 10.000 17.000 L 10.000 13.000 12.000 13.000 L 14.000 13.000 14.000 17.000 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Home = /*@__PURE__*/ forwardRef<ComponentInternals, HomeProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    