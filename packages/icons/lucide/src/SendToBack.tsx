
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SendToBackProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-send-to-back" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 1.042 C 2.376 1.236,1.461 2.048,1.114 3.160 L 1.020 3.460 1.020 6.000 L 1.020 8.540 1.114 8.840 C 1.422 9.827,2.173 10.578,3.160 10.886 L 3.460 10.980 6.000 10.980 L 8.540 10.980 8.840 10.886 C 9.827 10.578,10.578 9.827,10.886 8.840 L 10.980 8.540 10.980 6.000 L 10.980 3.460 10.886 3.160 C 10.581 2.181,9.829 1.425,8.861 1.122 L 8.540 1.022 6.120 1.015 C 4.789 1.011,3.609 1.023,3.499 1.042 M8.310 3.061 C 8.589 3.144,8.856 3.411,8.939 3.690 C 9.025 3.978,9.030 8.007,8.945 8.290 C 8.872 8.533,8.707 8.740,8.484 8.872 L 8.300 8.980 6.000 8.980 L 3.700 8.980 3.516 8.872 C 3.303 8.747,3.141 8.550,3.058 8.316 C 2.970 8.065,2.972 3.988,3.061 3.690 C 3.140 3.421,3.412 3.143,3.673 3.063 C 3.958 2.975,8.015 2.973,8.310 3.061 M13.695 6.055 C 13.464 6.130,13.255 6.300,13.128 6.516 C 13.037 6.672,13.020 6.746,13.020 7.000 C 13.020 7.256,13.036 7.328,13.131 7.489 C 13.192 7.592,13.304 7.725,13.381 7.783 C 13.622 7.967,13.770 7.996,14.463 7.998 C 15.238 8.000,15.435 8.047,15.679 8.283 C 15.950 8.547,15.973 8.636,15.998 9.523 L 16.020 10.306 16.141 10.503 C 16.543 11.156,17.457 11.156,17.859 10.503 L 17.980 10.306 17.980 9.383 C 17.980 8.527,17.973 8.438,17.886 8.160 C 17.580 7.180,16.820 6.416,15.861 6.125 C 15.574 6.039,15.451 6.027,14.700 6.015 C 14.072 6.004,13.818 6.015,13.695 6.055 M6.695 13.057 C 6.466 13.129,6.256 13.299,6.128 13.516 L 6.020 13.700 6.020 14.620 C 6.020 15.473,6.027 15.562,6.114 15.840 C 6.419 16.818,7.164 17.569,8.140 17.882 C 8.383 17.960,8.531 17.974,9.260 17.990 C 9.805 18.002,10.158 17.993,10.264 17.964 C 10.497 17.901,10.737 17.714,10.867 17.492 C 10.964 17.327,10.980 17.257,10.980 17.000 C 10.980 16.746,10.963 16.672,10.872 16.516 C 10.760 16.325,10.567 16.154,10.373 16.073 C 10.307 16.045,9.934 16.016,9.480 16.003 C 8.724 15.981,8.694 15.977,8.516 15.872 C 8.326 15.760,8.155 15.568,8.072 15.373 C 8.043 15.305,8.015 14.947,8.002 14.480 C 7.981 13.724,7.977 13.694,7.872 13.516 C 7.628 13.101,7.150 12.915,6.695 13.057 M15.499 13.042 C 14.376 13.236,13.461 14.048,13.114 15.160 L 13.020 15.460 13.020 18.000 L 13.020 20.540 13.114 20.840 C 13.422 21.827,14.173 22.578,15.160 22.886 L 15.460 22.980 18.000 22.980 L 20.540 22.980 20.840 22.886 C 21.827 22.578,22.578 21.827,22.886 20.840 L 22.980 20.540 22.980 18.000 L 22.980 15.460 22.886 15.160 C 22.581 14.181,21.829 13.425,20.861 13.122 L 20.540 13.022 18.120 13.015 C 16.789 13.011,15.609 13.023,15.499 13.042 M20.310 15.061 C 20.589 15.144,20.856 15.411,20.939 15.690 C 21.025 15.978,21.030 20.007,20.945 20.290 C 20.872 20.533,20.707 20.740,20.484 20.872 L 20.300 20.980 18.000 20.980 L 15.700 20.980 15.516 20.872 C 15.303 20.747,15.141 20.550,15.058 20.316 C 14.970 20.065,14.972 15.988,15.061 15.690 C 15.136 15.438,15.404 15.153,15.650 15.067 C 15.906 14.976,20.008 14.971,20.310 15.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const SendToBack = /*@__PURE__*/ forwardRef<ComponentInternals, SendToBackProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    