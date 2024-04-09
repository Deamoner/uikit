
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Navigation2OffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-navigation-2-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.036 1.672,1.020 1.745,1.021 2.000 C 1.021 2.212,1.043 2.341,1.095 2.440 C 1.135 2.517,2.739 4.155,4.659 6.080 L 8.149 9.580 6.089 15.160 C 4.889 18.408,4.020 20.818,4.009 20.926 C 3.967 21.345,4.259 21.797,4.660 21.934 C 4.886 22.011,5.038 22.016,5.260 21.956 C 5.348 21.932,6.901 21.067,8.710 20.033 L 12.000 18.154 15.268 20.022 C 17.065 21.049,18.606 21.914,18.693 21.944 C 19.110 22.092,19.596 21.919,19.838 21.537 L 19.946 21.366 20.643 22.065 C 21.485 22.911,21.587 22.980,22.000 22.980 C 22.257 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M11.574 1.118 C 11.433 1.189,11.280 1.305,11.217 1.387 C 11.049 1.608,9.840 4.907,9.840 5.146 C 9.840 5.427,9.918 5.629,10.108 5.840 C 10.398 6.163,10.859 6.253,11.263 6.065 C 11.534 5.939,11.675 5.756,11.837 5.322 C 11.911 5.123,11.984 4.960,11.997 4.960 C 12.011 4.960,12.371 5.910,12.796 7.070 C 13.222 8.230,13.617 9.267,13.674 9.374 C 13.850 9.706,14.238 9.908,14.621 9.868 C 14.997 9.830,15.280 9.625,15.437 9.280 C 15.610 8.898,15.641 9.006,14.203 5.093 C 13.264 2.540,12.853 1.470,12.773 1.370 C 12.618 1.178,12.331 1.037,12.051 1.013 C 11.850 0.996,11.788 1.009,11.574 1.118 M13.365 14.790 C 16.849 18.278,17.080 18.523,17.080 18.723 C 17.080 18.740,16.050 18.166,14.790 17.446 C 13.530 16.726,12.437 16.111,12.360 16.080 C 12.283 16.048,12.121 16.022,12.000 16.022 C 11.879 16.022,11.717 16.048,11.640 16.080 C 11.563 16.111,10.467 16.728,9.205 17.449 C 7.423 18.467,6.916 18.741,6.933 18.674 C 6.984 18.479,9.696 11.160,9.717 11.160 C 9.730 11.160,11.371 12.793,13.365 14.790 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Navigation2Off = /*@__PURE__*/ forwardRef<ComponentInternals, Navigation2OffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    