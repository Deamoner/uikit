
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BookPlusProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-book-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.873 1.063 C 5.147 1.194,4.470 1.562,3.958 2.105 C 3.562 2.524,3.318 2.949,3.130 3.548 L 3.020 3.900 3.020 12.000 L 3.020 20.100 3.130 20.452 C 3.511 21.666,4.334 22.489,5.548 22.870 L 5.900 22.980 13.100 22.980 L 20.300 22.980 20.492 22.867 C 20.709 22.739,20.901 22.498,20.960 22.278 C 20.987 22.180,20.997 18.663,20.990 11.915 L 20.980 1.700 20.872 1.516 C 20.740 1.293,20.533 1.128,20.290 1.055 C 20.018 0.973,6.328 0.980,5.873 1.063 M19.000 9.500 L 19.000 16.000 12.625 16.000 C 5.699 16.000,5.896 15.994,5.296 16.220 C 5.150 16.275,5.023 16.320,5.014 16.320 C 5.006 16.320,5.003 13.580,5.009 10.230 L 5.020 4.140 5.132 3.900 C 5.330 3.475,5.756 3.124,6.174 3.042 C 6.265 3.024,9.189 3.007,12.670 3.004 L 19.000 3.000 19.000 9.500 M11.695 6.057 C 11.466 6.129,11.256 6.299,11.128 6.516 L 11.020 6.700 11.008 7.850 L 10.995 9.000 9.944 9.000 C 8.797 9.000,8.643 9.022,8.382 9.221 C 8.302 9.282,8.187 9.415,8.128 9.516 C 8.037 9.672,8.020 9.746,8.020 10.000 C 8.020 10.256,8.036 10.328,8.131 10.489 C 8.192 10.592,8.304 10.725,8.381 10.783 C 8.642 10.983,8.738 10.996,9.908 10.998 L 10.995 11.000 11.008 12.153 L 11.020 13.307 11.141 13.503 C 11.543 14.156,12.457 14.156,12.859 13.503 L 12.980 13.307 12.992 12.153 L 13.005 11.000 14.092 10.998 C 15.262 10.996,15.358 10.983,15.619 10.783 C 15.696 10.725,15.808 10.592,15.869 10.489 C 15.964 10.328,15.980 10.256,15.980 10.000 C 15.980 9.746,15.963 9.672,15.872 9.516 C 15.813 9.415,15.698 9.282,15.618 9.221 C 15.357 9.022,15.203 9.000,14.056 9.000 L 13.005 9.000 12.992 7.850 L 12.980 6.700 12.872 6.516 C 12.628 6.101,12.150 5.915,11.695 6.057 M19.000 19.500 L 19.000 21.001 12.570 20.990 L 6.140 20.980 5.900 20.868 C 5.583 20.720,5.275 20.413,5.135 20.104 C 5.040 19.896,5.024 19.808,5.024 19.500 C 5.023 19.191,5.039 19.106,5.134 18.900 C 5.328 18.477,5.755 18.124,6.174 18.042 C 6.265 18.024,9.189 18.007,12.670 18.004 L 19.000 18.000 19.000 19.500 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BookPlus = /*@__PURE__*/ forwardRef<ComponentInternals, BookPlusProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    