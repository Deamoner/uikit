
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TruckProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-truck" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 3.043 C 2.389 3.232,1.488 4.024,1.114 5.140 L 1.020 5.420 1.009 11.319 C 1.002 15.343,1.012 17.283,1.040 17.422 C 1.115 17.779,1.300 18.108,1.591 18.399 C 2.084 18.892,2.416 19.000,3.442 19.000 L 4.147 19.000 4.312 19.330 C 4.682 20.069,5.355 20.635,6.160 20.886 C 6.594 21.021,7.406 21.021,7.840 20.886 C 8.645 20.635,9.318 20.069,9.688 19.330 L 9.853 19.000 12.000 19.000 L 14.147 19.000 14.312 19.330 C 14.682 20.069,15.355 20.635,16.160 20.886 C 16.412 20.964,16.547 20.979,17.000 20.979 C 17.453 20.979,17.588 20.964,17.840 20.886 C 18.645 20.635,19.318 20.069,19.688 19.330 L 19.853 19.000 20.558 19.000 C 21.325 19.000,21.563 18.961,21.930 18.775 C 22.196 18.640,22.638 18.200,22.771 17.937 C 22.994 17.498,23.000 17.424,23.000 15.202 C 23.000 12.946,22.988 12.813,22.757 12.408 C 22.626 12.178,19.045 7.687,18.856 7.515 C 18.686 7.360,18.419 7.203,18.164 7.108 C 17.954 7.029,17.846 7.023,16.475 7.009 L 15.009 6.995 14.990 6.207 C 14.974 5.536,14.958 5.379,14.882 5.140 C 14.573 4.174,13.823 3.425,12.861 3.121 L 12.540 3.020 8.120 3.014 C 5.689 3.011,3.609 3.024,3.499 3.043 M12.310 5.061 C 12.589 5.144,12.856 5.411,12.939 5.690 C 12.992 5.869,13.000 6.593,13.000 11.447 L 13.000 17.000 11.427 17.000 L 9.853 17.000 9.688 16.670 C 9.321 15.938,8.642 15.363,7.861 15.125 C 7.588 15.042,7.458 15.027,7.000 15.027 C 6.542 15.027,6.412 15.042,6.139 15.125 C 5.358 15.363,4.679 15.938,4.312 16.670 L 4.147 17.000 3.573 17.000 L 3.000 17.000 3.000 11.447 C 3.000 5.190,2.978 5.628,3.304 5.303 C 3.618 4.989,3.346 5.006,7.983 5.003 C 11.563 5.000,12.132 5.008,12.310 5.061 M19.260 11.175 L 21.000 13.350 21.000 15.175 L 21.000 17.000 20.427 17.000 L 19.853 17.000 19.688 16.670 C 19.321 15.937,18.641 15.362,17.861 15.125 C 17.405 14.987,16.643 14.981,16.180 15.113 C 15.825 15.215,15.429 15.416,15.170 15.627 L 15.000 15.765 15.000 12.383 L 15.000 9.000 16.260 9.000 L 17.520 9.000 19.260 11.175 M7.310 17.061 C 7.688 17.173,8.000 17.598,8.000 18.001 C 8.000 18.331,7.784 18.696,7.484 18.872 C 7.328 18.963,7.254 18.980,7.000 18.980 C 6.746 18.980,6.672 18.963,6.516 18.872 C 5.935 18.530,5.833 17.774,6.304 17.303 C 6.583 17.024,6.916 16.944,7.310 17.061 M17.310 17.061 C 17.688 17.173,18.000 17.598,18.000 18.001 C 18.000 18.331,17.784 18.696,17.484 18.872 C 17.328 18.963,17.254 18.980,17.000 18.980 C 16.746 18.980,16.672 18.963,16.516 18.872 C 15.932 18.528,15.831 17.775,16.307 17.299 C 16.582 17.024,16.918 16.944,17.310 17.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Truck = /*@__PURE__*/ forwardRef<ComponentInternals, TruckProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    