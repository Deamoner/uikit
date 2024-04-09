
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type AlignCenterVerticalProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-align-center-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.695 1.057 C 11.466 1.129,11.256 1.299,11.128 1.516 L 11.020 1.700 11.020 12.003 L 11.020 22.306 11.141 22.503 C 11.543 23.156,12.457 23.156,12.859 22.503 L 12.980 22.306 12.980 12.003 L 12.980 1.700 12.872 1.516 C 12.628 1.101,12.150 0.915,11.695 1.057 M3.499 3.043 C 2.860 3.150,2.395 3.398,1.896 3.896 C 1.496 4.297,1.295 4.613,1.125 5.113 L 1.020 5.420 1.020 6.980 C 1.020 8.504,1.022 8.547,1.114 8.840 C 1.419 9.816,2.153 10.557,3.140 10.885 C 3.418 10.978,3.435 10.978,5.768 10.991 C 7.321 11.000,8.169 10.990,8.272 10.962 C 8.498 10.901,8.738 10.711,8.867 10.492 C 8.964 10.327,8.980 10.257,8.980 10.000 C 8.980 9.746,8.963 9.672,8.872 9.516 C 8.761 9.328,8.572 9.158,8.373 9.070 C 8.289 9.033,7.681 9.015,5.980 9.000 L 3.700 8.980 3.516 8.872 C 3.415 8.813,3.283 8.700,3.224 8.621 C 3.007 8.337,2.994 8.238,3.008 6.935 C 3.019 5.848,3.027 5.726,3.097 5.584 C 3.196 5.385,3.385 5.196,3.584 5.097 C 3.731 5.024,3.868 5.019,6.020 5.000 L 8.300 4.980 8.492 4.867 C 9.248 4.423,9.123 3.306,8.290 3.055 C 8.144 3.011,7.666 3.001,5.904 3.005 C 4.692 3.007,3.609 3.025,3.499 3.043 M15.695 3.056 C 15.465 3.129,15.255 3.300,15.128 3.516 C 15.037 3.672,15.020 3.746,15.020 4.000 C 15.020 4.256,15.036 4.328,15.131 4.489 C 15.256 4.702,15.449 4.864,15.670 4.943 C 15.788 4.985,16.278 4.997,17.963 4.998 C 20.415 5.000,20.391 4.998,20.697 5.303 C 20.980 5.587,21.000 5.697,21.000 7.001 C 21.000 8.207,20.980 8.354,20.779 8.618 C 20.718 8.698,20.585 8.813,20.484 8.872 L 20.300 8.980 18.020 9.000 C 16.319 9.015,15.711 9.033,15.627 9.070 C 15.428 9.158,15.239 9.328,15.128 9.516 C 15.037 9.672,15.020 9.746,15.020 10.000 C 15.020 10.257,15.036 10.327,15.133 10.492 C 15.262 10.711,15.502 10.901,15.728 10.962 C 15.831 10.990,16.679 11.000,18.232 10.991 C 20.565 10.978,20.582 10.978,20.860 10.885 C 21.847 10.557,22.581 9.816,22.886 8.840 C 22.978 8.547,22.980 8.503,22.980 7.000 C 22.980 5.497,22.978 5.453,22.886 5.160 C 22.581 4.181,21.829 3.425,20.861 3.122 L 20.540 3.022 18.200 3.013 C 16.351 3.005,15.825 3.014,15.695 3.056 M6.499 13.043 C 5.860 13.150,5.395 13.398,4.896 13.896 C 4.496 14.297,4.295 14.613,4.125 15.113 L 4.020 15.420 4.020 16.980 C 4.020 18.504,4.022 18.547,4.114 18.840 C 4.419 19.818,5.164 20.569,6.140 20.882 C 6.383 20.960,6.531 20.974,7.260 20.990 C 7.805 21.002,8.158 20.993,8.264 20.964 C 8.497 20.901,8.737 20.714,8.867 20.492 C 8.964 20.327,8.980 20.257,8.980 20.000 C 8.980 19.746,8.963 19.672,8.872 19.516 C 8.760 19.325,8.567 19.154,8.373 19.073 C 8.307 19.045,7.934 19.016,7.480 19.003 C 6.724 18.981,6.694 18.977,6.516 18.872 C 6.415 18.813,6.283 18.700,6.224 18.621 C 6.007 18.337,5.994 18.238,6.008 16.935 C 6.021 15.612,6.028 15.575,6.301 15.301 C 6.552 15.051,6.660 15.024,7.520 15.001 C 8.286 14.980,8.303 14.978,8.492 14.867 C 9.248 14.423,9.123 13.306,8.290 13.055 C 8.084 12.993,6.845 12.985,6.499 13.043 M15.695 13.055 C 15.464 13.130,15.255 13.300,15.128 13.516 C 15.037 13.672,15.020 13.746,15.020 14.000 C 15.020 14.256,15.036 14.328,15.131 14.489 C 15.192 14.592,15.304 14.725,15.381 14.783 C 15.622 14.967,15.770 14.996,16.463 14.998 C 17.257 15.000,17.439 15.045,17.697 15.303 C 17.980 15.587,18.000 15.697,18.000 17.001 C 18.000 18.207,17.980 18.354,17.779 18.618 C 17.718 18.698,17.585 18.813,17.484 18.872 C 17.306 18.977,17.276 18.981,16.520 19.003 C 16.066 19.016,15.693 19.045,15.627 19.073 C 15.433 19.154,15.240 19.325,15.128 19.516 C 15.037 19.672,15.020 19.746,15.020 20.000 C 15.020 20.257,15.036 20.327,15.133 20.492 C 15.263 20.714,15.503 20.901,15.736 20.964 C 15.842 20.993,16.195 21.002,16.740 20.990 C 17.469 20.974,17.617 20.960,17.860 20.882 C 18.836 20.569,19.581 19.818,19.886 18.840 C 19.978 18.547,19.980 18.503,19.980 17.000 C 19.980 15.497,19.978 15.453,19.886 15.160 C 19.580 14.180,18.820 13.416,17.861 13.125 C 17.574 13.039,17.451 13.027,16.700 13.015 C 16.072 13.004,15.818 13.015,15.695 13.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const AlignCenterVertical = /*@__PURE__*/ forwardRef<ComponentInternals, AlignCenterVerticalProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    