
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type MailWarningProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-mail-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 3.043 C 2.380 3.232,1.461 4.048,1.114 5.160 L 1.020 5.460 1.020 12.020 L 1.020 18.580 1.125 18.887 C 1.296 19.387,1.496 19.704,1.896 20.104 C 2.296 20.504,2.613 20.704,3.113 20.875 L 3.420 20.980 10.040 20.991 C 17.429 21.004,16.838 21.026,17.173 20.724 C 17.381 20.536,17.488 20.292,17.488 20.003 C 17.488 19.615,17.294 19.298,16.940 19.106 L 16.780 19.020 10.260 19.000 C 4.332 18.982,3.727 18.974,3.596 18.914 C 3.411 18.831,3.197 18.616,3.097 18.416 C 3.022 18.265,3.020 18.117,3.009 13.546 L 2.999 8.831 3.129 8.909 C 3.201 8.951,4.898 10.028,6.900 11.301 C 9.032 12.656,10.669 13.672,10.852 13.752 C 11.586 14.071,12.414 14.071,13.148 13.752 C 13.331 13.672,15.008 12.632,17.215 11.228 C 19.280 9.915,20.977 8.840,20.985 8.840 C 20.993 8.840,21.000 9.258,21.000 9.770 C 21.001 10.665,21.004 10.708,21.095 10.900 C 21.276 11.282,21.595 11.488,22.003 11.488 C 22.292 11.488,22.536 11.381,22.724 11.173 C 23.015 10.850,23.005 10.966,22.991 8.039 L 22.979 5.420 22.885 5.140 C 22.559 4.160,21.821 3.425,20.861 3.121 L 20.540 3.020 12.120 3.014 C 7.489 3.011,3.609 3.024,3.499 3.043 M20.310 5.061 C 20.589 5.144,20.856 5.411,20.939 5.690 C 20.973 5.802,20.999 6.022,20.999 6.177 L 20.998 6.460 16.776 9.140 C 14.454 10.614,12.488 11.855,12.407 11.899 C 12.205 12.006,11.795 12.006,11.593 11.899 C 11.512 11.855,9.546 10.614,7.224 9.140 L 3.002 6.460 3.001 6.177 C 3.001 6.022,3.027 5.802,3.061 5.690 C 3.140 5.421,3.412 5.143,3.673 5.063 C 3.833 5.014,5.030 5.005,11.983 5.003 C 19.144 5.000,20.130 5.007,20.310 5.061 M19.695 13.057 C 19.466 13.129,19.256 13.299,19.128 13.516 L 19.020 13.700 19.020 16.003 L 19.020 18.306 19.141 18.503 C 19.209 18.613,19.346 18.756,19.452 18.828 C 19.923 19.144,20.554 18.999,20.859 18.503 L 20.980 18.306 20.980 16.003 L 20.980 13.700 20.872 13.516 C 20.628 13.101,20.150 12.915,19.695 13.057 M19.695 21.057 C 19.466 21.129,19.256 21.299,19.128 21.516 C 19.036 21.672,19.020 21.745,19.021 22.000 C 19.022 22.332,19.101 22.533,19.306 22.728 C 19.785 23.181,20.580 23.046,20.893 22.460 C 21.025 22.211,21.015 21.760,20.872 21.516 C 20.628 21.101,20.150 20.915,19.695 21.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const MailWarning = /*@__PURE__*/ forwardRef<ComponentInternals, MailWarningProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    