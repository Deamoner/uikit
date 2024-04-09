
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CalculatorProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-calculator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.499 1.043 C 4.380 1.233,3.461 2.048,3.114 3.160 L 3.020 3.460 3.020 12.000 L 3.020 20.540 3.114 20.840 C 3.422 21.827,4.173 22.578,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.827 22.578,20.578 21.827,20.886 20.840 L 20.980 20.540 20.980 12.000 L 20.980 3.460 20.886 3.160 C 20.581 2.182,19.832 1.428,18.861 1.121 L 18.540 1.020 12.120 1.014 C 8.589 1.011,5.609 1.024,5.499 1.043 M18.310 3.061 C 18.589 3.144,18.856 3.411,18.939 3.690 C 18.993 3.870,19.000 4.860,19.000 12.001 C 19.000 18.754,18.991 20.138,18.945 20.290 C 18.872 20.533,18.707 20.740,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.985 20.308,5.000 20.888,5.000 12.022 C 5.000 2.888,4.974 3.632,5.304 3.303 C 5.623 2.983,5.120 3.006,11.983 3.003 C 17.353 3.000,18.131 3.007,18.310 3.061 M7.695 5.057 C 7.466 5.129,7.256 5.299,7.128 5.516 C 7.037 5.672,7.020 5.746,7.020 6.000 C 7.020 6.256,7.036 6.328,7.131 6.489 C 7.256 6.702,7.449 6.864,7.670 6.943 C 7.892 7.022,16.108 7.022,16.330 6.943 C 16.551 6.864,16.744 6.702,16.869 6.489 C 16.964 6.328,16.980 6.256,16.980 6.000 C 16.980 5.746,16.963 5.672,16.872 5.516 C 16.740 5.293,16.533 5.128,16.290 5.055 C 16.029 4.976,7.946 4.979,7.695 5.057 M7.695 9.055 C 7.464 9.130,7.255 9.300,7.128 9.516 C 7.037 9.672,7.020 9.746,7.020 10.000 C 7.020 10.257,7.036 10.327,7.133 10.492 C 7.651 11.374,8.998 11.018,8.998 10.000 C 8.998 9.623,8.792 9.281,8.463 9.112 C 8.265 9.010,7.911 8.984,7.695 9.055 M11.695 9.055 C 11.464 9.130,11.255 9.300,11.128 9.516 C 11.037 9.672,11.020 9.746,11.020 10.000 C 11.020 10.257,11.036 10.327,11.133 10.492 C 11.651 11.374,12.998 11.018,12.998 10.000 C 12.998 9.623,12.792 9.281,12.463 9.112 C 12.265 9.010,11.911 8.984,11.695 9.055 M15.695 9.055 C 15.464 9.130,15.255 9.300,15.128 9.516 C 15.037 9.672,15.020 9.746,15.020 10.000 C 15.020 10.257,15.036 10.327,15.133 10.492 C 15.651 11.374,16.998 11.018,16.998 10.000 C 16.998 9.623,16.792 9.281,16.463 9.112 C 16.265 9.010,15.911 8.984,15.695 9.055 M7.695 13.055 C 7.464 13.130,7.255 13.300,7.128 13.516 C 7.037 13.672,7.020 13.746,7.020 14.000 C 7.020 14.257,7.036 14.327,7.133 14.492 C 7.651 15.374,8.998 15.018,8.998 14.000 C 8.998 13.623,8.792 13.281,8.463 13.112 C 8.265 13.010,7.911 12.984,7.695 13.055 M11.695 13.055 C 11.464 13.130,11.255 13.300,11.128 13.516 C 11.037 13.672,11.020 13.746,11.020 14.000 C 11.020 14.257,11.036 14.327,11.133 14.492 C 11.651 15.374,12.998 15.018,12.998 14.000 C 12.998 13.623,12.792 13.281,12.463 13.112 C 12.265 13.010,11.911 12.984,11.695 13.055 M15.695 13.057 C 15.466 13.129,15.256 13.299,15.128 13.516 L 15.020 13.700 15.020 16.003 L 15.020 18.306 15.141 18.503 C 15.209 18.613,15.346 18.756,15.452 18.828 C 15.923 19.144,16.554 18.999,16.859 18.503 L 16.980 18.306 16.980 16.003 L 16.980 13.700 16.872 13.516 C 16.628 13.101,16.150 12.915,15.695 13.057 M7.695 17.055 C 7.464 17.130,7.255 17.300,7.128 17.516 C 7.037 17.672,7.020 17.746,7.020 18.000 C 7.020 18.257,7.036 18.327,7.133 18.492 C 7.651 19.374,8.998 19.018,8.998 18.000 C 8.998 17.623,8.792 17.281,8.463 17.112 C 8.265 17.010,7.911 16.984,7.695 17.055 M11.695 17.055 C 11.464 17.130,11.255 17.300,11.128 17.516 C 11.037 17.672,11.020 17.746,11.020 18.000 C 11.020 18.257,11.036 18.327,11.133 18.492 C 11.651 19.374,12.998 19.018,12.998 18.000 C 12.998 17.623,12.792 17.281,12.463 17.112 C 12.265 17.010,11.911 16.984,11.695 17.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Calculator = /*@__PURE__*/ forwardRef<ComponentInternals, CalculatorProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    