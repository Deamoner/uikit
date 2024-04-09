
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type PowerOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-power-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.037 1.672,1.020 1.746,1.020 2.000 C 1.020 2.254,1.036 2.327,1.127 2.480 C 1.187 2.579,2.017 3.441,2.973 4.396 L 4.712 6.131 4.430 6.456 C 3.195 7.878,2.415 9.528,2.074 11.440 C 1.956 12.107,1.926 13.513,2.017 14.220 C 2.401 17.224,4.013 19.811,6.520 21.449 C 7.786 22.276,9.363 22.832,10.920 23.001 C 11.452 23.059,12.557 23.059,13.023 23.000 C 15.089 22.741,16.930 21.945,18.431 20.662 L 18.869 20.288 20.104 21.527 C 20.784 22.208,21.421 22.814,21.520 22.873 C 21.672 22.964,21.746 22.980,22.000 22.980 C 22.257 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M11.695 1.057 C 11.466 1.129,11.256 1.299,11.128 1.516 L 11.020 1.700 11.020 4.003 L 11.020 6.306 11.141 6.503 C 11.543 7.156,12.457 7.156,12.859 6.503 L 12.980 6.306 12.980 4.003 L 12.980 1.700 12.872 1.516 C 12.628 1.101,12.150 0.915,11.695 1.057 M18.055 5.697 C 17.826 5.769,17.616 5.939,17.488 6.156 C 17.396 6.312,17.380 6.385,17.381 6.640 C 17.382 7.007,17.428 7.101,17.801 7.504 C 19.149 8.958,19.868 10.660,19.981 12.665 C 20.012 13.199,19.960 13.868,19.836 14.557 C 19.744 15.068,19.755 15.205,19.910 15.490 C 20.275 16.165,21.295 16.156,21.642 15.476 C 21.798 15.170,21.949 14.239,21.986 13.360 C 22.096 10.698,21.063 7.995,19.211 6.094 C 18.945 5.820,18.859 5.757,18.679 5.704 C 18.426 5.628,18.279 5.627,18.055 5.697 M17.232 19.055 C 16.129 20.068,14.556 20.771,12.887 20.999 C 12.416 21.063,11.418 21.055,10.905 20.982 C 9.089 20.725,7.557 19.963,6.280 18.681 C 4.781 17.178,3.960 15.187,3.960 13.059 C 3.960 11.122,4.651 9.255,5.896 7.827 L 6.134 7.554 11.789 13.207 L 17.444 18.860 17.232 19.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const PowerOff = /*@__PURE__*/ forwardRef<ComponentInternals, PowerOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    