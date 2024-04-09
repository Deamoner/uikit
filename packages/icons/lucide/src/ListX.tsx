
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ListXProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-list-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.695 5.057 C 2.466 5.129,2.256 5.299,2.128 5.516 C 2.037 5.672,2.020 5.746,2.020 6.000 C 2.020 6.256,2.036 6.328,2.131 6.489 C 2.256 6.702,2.449 6.864,2.670 6.943 C 2.893 7.022,16.107 7.022,16.330 6.943 C 16.551 6.864,16.744 6.702,16.869 6.489 C 16.964 6.328,16.980 6.256,16.980 6.000 C 16.980 5.746,16.963 5.672,16.872 5.516 C 16.740 5.293,16.533 5.128,16.290 5.055 C 16.028 4.976,2.947 4.978,2.695 5.057 M14.670 9.061 C 14.448 9.142,14.250 9.309,14.128 9.516 C 14.036 9.672,14.020 9.745,14.021 10.000 C 14.021 10.213,14.043 10.340,14.096 10.440 C 14.136 10.517,14.486 10.900,14.873 11.290 L 15.577 12.000 14.873 12.710 C 14.486 13.101,14.139 13.481,14.101 13.555 C 13.872 14.008,14.056 14.601,14.508 14.867 C 14.673 14.964,14.742 14.980,15.000 14.979 C 15.213 14.979,15.340 14.957,15.440 14.904 C 15.517 14.864,15.900 14.514,16.290 14.127 L 17.000 13.423 17.710 14.127 C 18.101 14.514,18.483 14.864,18.560 14.904 C 18.660 14.957,18.787 14.979,19.000 14.979 C 19.258 14.980,19.327 14.964,19.492 14.867 C 19.714 14.737,19.901 14.498,19.965 14.264 C 20.019 14.061,19.989 13.733,19.899 13.555 C 19.861 13.481,19.514 13.101,19.127 12.710 L 18.423 12.000 19.127 11.290 C 19.514 10.900,19.864 10.517,19.904 10.440 C 19.957 10.340,19.979 10.213,19.979 10.000 C 19.980 9.745,19.964 9.672,19.872 9.516 C 19.617 9.083,19.135 8.905,18.657 9.067 C 18.491 9.123,18.345 9.247,17.730 9.854 L 17.000 10.574 16.270 9.854 C 15.655 9.247,15.509 9.123,15.343 9.067 C 15.108 8.987,14.876 8.985,14.670 9.061 M2.695 11.057 C 2.466 11.129,2.256 11.299,2.128 11.516 C 2.037 11.672,2.020 11.746,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.256 12.702,2.449 12.864,2.670 12.943 C 2.892 13.022,11.108 13.022,11.330 12.943 C 11.551 12.864,11.744 12.702,11.869 12.489 C 11.964 12.328,11.980 12.256,11.980 12.000 C 11.980 11.746,11.963 11.672,11.872 11.516 C 11.740 11.293,11.533 11.128,11.290 11.055 C 11.029 10.976,2.946 10.979,2.695 11.057 M2.695 17.057 C 2.466 17.129,2.256 17.299,2.128 17.516 C 2.037 17.672,2.020 17.746,2.020 18.000 C 2.020 18.256,2.036 18.328,2.131 18.489 C 2.256 18.702,2.449 18.864,2.670 18.943 C 2.793 18.987,4.021 18.996,9.500 18.996 C 14.979 18.996,16.207 18.987,16.330 18.943 C 16.551 18.864,16.744 18.702,16.869 18.489 C 16.964 18.328,16.980 18.256,16.980 18.000 C 16.980 17.746,16.963 17.672,16.872 17.516 C 16.740 17.293,16.533 17.128,16.290 17.055 C 16.028 16.976,2.947 16.978,2.695 17.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ListX = /*@__PURE__*/ forwardRef<ComponentInternals, ListXProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    