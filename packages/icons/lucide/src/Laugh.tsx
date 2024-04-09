
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type LaughProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-laugh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.280 1.023 C 11.203 1.032,10.951 1.059,10.720 1.083 C 8.832 1.283,6.991 2.023,5.360 3.235 C 4.751 3.688,3.684 4.755,3.226 5.367 C 0.728 8.714,0.301 13.032,2.097 16.780 C 2.643 17.918,3.276 18.801,4.238 19.762 C 5.199 20.724,6.082 21.357,7.220 21.903 C 10.967 23.699,15.288 23.270,18.637 20.770 C 19.246 20.316,20.316 19.246,20.770 18.637 C 23.744 14.652,23.744 9.348,20.770 5.363 C 20.316 4.755,19.247 3.686,18.640 3.235 C 17.045 2.049,15.365 1.360,13.423 1.096 C 13.000 1.038,11.574 0.990,11.280 1.023 M13.320 3.101 C 15.883 3.488,18.124 4.931,19.560 7.120 C 19.863 7.583,20.303 8.479,20.492 9.020 C 20.838 10.013,20.977 10.865,20.977 12.000 C 20.977 13.493,20.720 14.621,20.080 15.940 C 19.375 17.394,18.311 18.607,16.927 19.532 C 16.138 20.060,14.876 20.588,13.908 20.797 C 11.266 21.366,8.479 20.708,6.370 19.019 C 4.857 17.807,3.722 16.029,3.267 14.160 C 3.081 13.397,3.023 12.888,3.023 12.000 C 3.023 10.507,3.280 9.379,3.920 8.060 C 4.971 5.891,6.877 4.221,9.160 3.466 C 9.865 3.233,10.432 3.118,11.340 3.024 C 11.662 2.991,12.911 3.039,13.320 3.101 M8.695 8.055 C 8.464 8.130,8.255 8.300,8.128 8.516 C 8.037 8.672,8.020 8.746,8.020 9.000 C 8.020 9.257,8.036 9.327,8.133 9.492 C 8.651 10.374,9.998 10.018,9.998 9.000 C 9.998 8.623,9.792 8.281,9.463 8.112 C 9.265 8.010,8.911 7.984,8.695 8.055 M14.695 8.055 C 14.464 8.130,14.255 8.300,14.128 8.516 C 14.037 8.672,14.020 8.746,14.020 9.000 C 14.020 9.257,14.036 9.327,14.133 9.492 C 14.651 10.374,15.998 10.018,15.998 9.000 C 15.998 8.623,15.792 8.281,15.463 8.112 C 15.265 8.010,14.911 7.984,14.695 8.055 M5.643 12.069 C 5.296 12.192,5.000 12.614,5.000 12.988 C 5.000 13.263,5.230 14.142,5.427 14.620 C 6.301 16.739,8.138 18.305,10.353 18.822 C 11.363 19.057,12.637 19.057,13.647 18.822 C 16.078 18.255,18.072 16.395,18.773 14.040 C 18.942 13.473,19.012 13.088,18.986 12.871 C 18.941 12.492,18.665 12.168,18.290 12.055 C 18.138 12.009,17.060 12.001,11.964 12.003 C 6.506 12.006,5.800 12.013,5.643 12.069 M16.555 14.250 C 16.089 15.173,15.202 16.044,14.260 16.503 C 12.888 17.171,11.139 17.173,9.748 16.507 C 8.812 16.059,7.914 15.180,7.445 14.249 L 7.319 14.000 12.000 14.000 L 16.681 14.000 16.555 14.250 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Laugh = /*@__PURE__*/ forwardRef<ComponentInternals, LaughProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    