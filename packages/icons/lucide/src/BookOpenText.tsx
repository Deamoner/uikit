
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BookOpenTextProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-book-open-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.695 2.057 C 1.466 2.129,1.256 2.299,1.128 2.516 L 1.020 2.700 1.010 10.414 C 1.003 15.501,1.013 18.179,1.039 18.278 C 1.099 18.498,1.291 18.739,1.508 18.867 L 1.700 18.980 5.560 19.001 C 9.872 19.024,9.586 19.004,10.063 19.312 C 10.650 19.692,10.996 20.323,11.000 21.020 C 11.003 21.555,11.456 21.998,12.000 21.998 C 12.551 21.998,12.999 21.554,13.000 21.008 C 13.001 20.324,13.344 19.703,13.937 19.314 C 14.411 19.004,14.125 19.024,18.440 19.001 L 22.300 18.980 22.492 18.867 C 22.709 18.739,22.901 18.498,22.961 18.278 C 22.987 18.179,22.997 15.501,22.990 10.414 L 22.980 2.700 22.872 2.516 C 22.813 2.415,22.698 2.282,22.618 2.221 C 22.324 1.997,22.374 2.000,18.972 2.000 C 15.753 2.000,15.329 2.016,14.760 2.162 C 13.858 2.392,13.021 2.891,12.356 3.593 L 12.000 3.969 11.645 3.595 C 10.802 2.704,9.744 2.173,8.552 2.043 C 7.954 1.977,1.909 1.990,1.695 2.057 M8.861 4.122 C 9.821 4.423,10.574 5.176,10.879 6.139 L 10.980 6.460 10.991 11.990 C 10.997 15.032,10.992 17.520,10.980 17.520 C 10.968 17.520,10.855 17.469,10.729 17.406 C 10.379 17.231,10.028 17.122,9.605 17.058 C 9.294 17.012,8.622 17.000,6.110 17.000 L 3.000 17.000 3.000 10.498 L 3.000 3.996 5.770 4.009 L 8.540 4.022 8.861 4.122 M21.000 10.500 L 21.000 17.000 17.890 17.000 C 15.378 17.000,14.706 17.012,14.395 17.058 C 13.972 17.122,13.621 17.231,13.271 17.406 C 13.145 17.469,13.032 17.520,13.020 17.520 C 13.008 17.520,13.003 15.032,13.009 11.990 L 13.020 6.460 13.121 6.139 C 13.468 5.043,14.391 4.229,15.499 4.043 C 15.609 4.025,16.893 4.007,18.350 4.005 L 21.000 4.000 21.000 10.500 M5.695 7.057 C 5.466 7.129,5.256 7.299,5.128 7.516 C 5.037 7.672,5.020 7.746,5.020 8.000 C 5.020 8.256,5.036 8.328,5.131 8.489 C 5.256 8.702,5.449 8.864,5.670 8.943 C 5.885 9.020,8.115 9.020,8.330 8.943 C 8.551 8.864,8.744 8.702,8.869 8.489 C 8.964 8.328,8.980 8.256,8.980 8.000 C 8.980 7.746,8.963 7.672,8.872 7.516 C 8.740 7.293,8.533 7.128,8.290 7.055 C 8.039 6.979,5.937 6.981,5.695 7.057 M15.695 7.057 C 15.466 7.129,15.256 7.299,15.128 7.516 C 15.037 7.672,15.020 7.746,15.020 8.000 C 15.020 8.256,15.036 8.328,15.131 8.489 C 15.256 8.702,15.449 8.864,15.670 8.943 C 15.885 9.020,18.115 9.020,18.330 8.943 C 18.551 8.864,18.744 8.702,18.869 8.489 C 18.964 8.328,18.980 8.256,18.980 8.000 C 18.980 7.746,18.963 7.672,18.872 7.516 C 18.740 7.293,18.533 7.128,18.290 7.055 C 18.039 6.979,15.937 6.981,15.695 7.057 M5.695 11.057 C 5.466 11.129,5.256 11.299,5.128 11.516 C 5.037 11.672,5.020 11.746,5.020 12.000 C 5.020 12.256,5.036 12.328,5.131 12.489 C 5.256 12.702,5.449 12.864,5.670 12.943 C 5.885 13.020,8.115 13.020,8.330 12.943 C 8.551 12.864,8.744 12.702,8.869 12.489 C 8.964 12.328,8.980 12.256,8.980 12.000 C 8.980 11.746,8.963 11.672,8.872 11.516 C 8.740 11.293,8.533 11.128,8.290 11.055 C 8.039 10.979,5.937 10.981,5.695 11.057 M15.695 11.057 C 15.466 11.129,15.256 11.299,15.128 11.516 C 15.037 11.672,15.020 11.746,15.020 12.000 C 15.020 12.256,15.036 12.328,15.131 12.489 C 15.256 12.702,15.449 12.864,15.670 12.943 C 15.885 13.020,18.115 13.020,18.330 12.943 C 18.551 12.864,18.744 12.702,18.869 12.489 C 18.964 12.328,18.980 12.256,18.980 12.000 C 18.980 11.746,18.963 11.672,18.872 11.516 C 18.740 11.293,18.533 11.128,18.290 11.055 C 18.039 10.979,15.937 10.981,15.695 11.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BookOpenText = /*@__PURE__*/ forwardRef<ComponentInternals, BookOpenTextProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    