
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CalendarPlus2Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-calendar-plus-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.695 1.057 C 7.466 1.129,7.256 1.299,7.128 1.516 C 7.025 1.692,7.019 1.728,7.007 2.347 L 6.993 2.993 5.727 3.009 C 4.518 3.025,4.445 3.030,4.139 3.124 C 3.176 3.420,2.420 4.180,2.114 5.160 L 2.020 5.460 2.020 13.000 L 2.020 20.540 2.114 20.840 C 2.422 21.827,3.173 22.578,4.160 22.886 L 4.460 22.980 12.000 22.980 L 19.540 22.980 19.840 22.886 C 20.827 22.578,21.578 21.827,21.886 20.840 L 21.980 20.540 21.980 13.000 L 21.980 5.460 21.886 5.160 C 21.580 4.180,20.824 3.420,19.861 3.124 C 19.555 3.030,19.482 3.025,18.273 3.009 L 17.007 2.993 16.993 2.347 C 16.981 1.726,16.976 1.693,16.871 1.514 C 16.479 0.848,15.521 0.848,15.129 1.514 C 15.024 1.693,15.019 1.726,15.007 2.350 L 14.993 3.000 12.000 3.000 L 9.007 3.000 8.993 2.350 C 8.981 1.728,8.975 1.692,8.872 1.516 C 8.628 1.101,8.150 0.915,7.695 1.057 M7.007 5.653 C 7.020 6.300,7.021 6.308,7.141 6.503 C 7.543 7.156,8.457 7.156,8.859 6.503 C 8.979 6.308,8.980 6.300,8.993 5.653 L 9.007 5.000 12.000 5.000 L 14.993 5.000 15.007 5.653 C 15.020 6.300,15.021 6.308,15.141 6.503 C 15.543 7.156,16.457 7.156,16.859 6.503 C 16.979 6.308,16.980 6.300,16.993 5.653 L 17.007 5.000 18.056 5.000 C 19.297 5.000,19.416 5.022,19.697 5.303 C 19.993 5.599,20.000 5.650,20.000 7.447 L 20.000 9.000 12.000 9.000 L 4.000 9.000 4.000 7.447 C 4.000 5.649,4.007 5.599,4.304 5.303 C 4.582 5.024,4.681 5.006,5.927 5.003 L 6.993 5.000 7.007 5.653 M20.000 15.554 C 20.000 20.497,20.008 20.318,19.779 20.618 C 19.718 20.698,19.585 20.813,19.484 20.872 L 19.300 20.980 12.000 20.980 L 4.700 20.980 4.516 20.872 C 4.415 20.813,4.284 20.700,4.225 20.623 C 3.989 20.314,4.000 20.557,4.000 15.575 L 4.000 11.000 12.000 11.000 L 20.000 11.000 20.000 15.554 M11.695 13.057 C 11.466 13.129,11.256 13.299,11.128 13.516 C 11.025 13.692,11.019 13.728,11.007 14.350 L 10.993 15.000 10.443 15.000 C 9.648 15.000,9.366 15.111,9.128 15.516 C 9.037 15.672,9.020 15.746,9.020 16.000 C 9.020 16.256,9.036 16.328,9.131 16.489 C 9.256 16.702,9.449 16.864,9.670 16.943 C 9.768 16.978,10.022 16.997,10.407 16.998 L 10.993 17.000 11.007 17.653 C 11.020 18.300,11.021 18.308,11.141 18.503 C 11.209 18.613,11.346 18.756,11.452 18.828 C 11.923 19.144,12.554 18.999,12.859 18.503 C 12.979 18.308,12.980 18.300,12.993 17.653 L 13.007 17.000 13.593 16.998 C 13.978 16.997,14.232 16.978,14.330 16.943 C 14.551 16.864,14.744 16.702,14.869 16.489 C 14.964 16.328,14.980 16.256,14.980 16.000 C 14.980 15.746,14.963 15.672,14.872 15.516 C 14.634 15.111,14.352 15.000,13.557 15.000 L 13.007 15.000 12.993 14.350 C 12.981 13.728,12.975 13.692,12.872 13.516 C 12.628 13.101,12.150 12.915,11.695 13.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CalendarPlus2 = /*@__PURE__*/ forwardRef<ComponentInternals, CalendarPlus2Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    