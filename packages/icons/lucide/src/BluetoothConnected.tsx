
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BluetoothConnectedProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-bluetooth-connected" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.695 1.055 C 11.464 1.130,11.255 1.300,11.128 1.516 L 11.020 1.700 11.009 5.638 L 10.998 9.576 9.269 7.852 C 7.616 6.203,7.530 6.125,7.323 6.064 C 7.057 5.986,6.946 5.984,6.710 6.055 C 6.467 6.128,6.260 6.293,6.128 6.516 C 6.036 6.672,6.020 6.745,6.021 7.000 C 6.021 7.212,6.043 7.341,6.095 7.440 C 6.135 7.517,7.161 8.575,8.374 9.790 L 10.579 12.000 8.374 14.210 C 7.161 15.426,6.135 16.483,6.095 16.560 C 6.043 16.659,6.021 16.788,6.021 17.000 C 6.020 17.258,6.036 17.327,6.133 17.492 C 6.263 17.714,6.502 17.901,6.736 17.965 C 6.939 18.019,7.267 17.989,7.445 17.899 C 7.519 17.862,8.350 17.064,9.290 16.126 L 11.000 14.421 11.000 18.286 C 11.000 22.491,10.991 22.316,11.225 22.623 C 11.284 22.700,11.415 22.813,11.516 22.872 C 11.672 22.963,11.746 22.980,12.000 22.980 C 12.254 22.980,12.328 22.964,12.480 22.873 C 12.706 22.738,17.805 17.632,17.905 17.440 C 18.007 17.246,18.007 16.754,17.905 16.560 C 17.865 16.483,16.839 15.426,15.626 14.210 L 13.421 12.000 15.626 9.790 C 16.839 8.575,17.865 7.517,17.905 7.440 C 17.957 7.341,17.979 7.212,17.979 7.000 C 17.980 6.745,17.964 6.673,17.873 6.520 C 17.719 6.262,12.622 1.192,12.427 1.103 C 12.222 1.010,11.897 0.989,11.695 1.055 M14.290 8.290 L 13.000 9.580 13.000 7.000 L 13.000 4.420 14.290 5.710 L 15.580 7.000 14.290 8.290 M2.695 11.057 C 2.466 11.129,2.256 11.299,2.128 11.516 C 2.037 11.672,2.020 11.746,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.256 12.702,2.449 12.864,2.670 12.943 C 2.888 13.021,6.112 13.021,6.330 12.943 C 6.551 12.864,6.744 12.702,6.869 12.489 C 6.964 12.328,6.980 12.256,6.980 12.000 C 6.980 11.746,6.963 11.672,6.872 11.516 C 6.740 11.293,6.533 11.128,6.290 11.055 C 6.035 10.978,2.941 10.980,2.695 11.057 M17.695 11.057 C 17.466 11.129,17.256 11.299,17.128 11.516 C 17.037 11.672,17.020 11.746,17.020 12.000 C 17.020 12.256,17.036 12.328,17.131 12.489 C 17.256 12.702,17.449 12.864,17.670 12.943 C 17.888 13.021,21.112 13.021,21.330 12.943 C 21.551 12.864,21.744 12.702,21.869 12.489 C 21.964 12.328,21.980 12.256,21.980 12.000 C 21.980 11.746,21.963 11.672,21.872 11.516 C 21.740 11.293,21.533 11.128,21.290 11.055 C 21.035 10.978,17.941 10.980,17.695 11.057 M14.290 18.290 L 13.000 19.580 13.000 17.000 L 13.000 14.420 14.290 15.710 L 15.580 17.000 14.290 18.290 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BluetoothConnected = /*@__PURE__*/ forwardRef<ComponentInternals, BluetoothConnectedProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    