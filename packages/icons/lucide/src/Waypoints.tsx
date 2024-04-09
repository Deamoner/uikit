
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type WaypointsProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-waypoints" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.580 1.024 C 10.701 1.153,9.814 1.642,9.294 2.286 C 9.063 2.572,8.845 2.953,8.724 3.280 C 8.395 4.170,8.450 5.247,8.865 6.049 L 8.928 6.172 7.554 7.546 C 6.798 8.302,6.162 8.913,6.140 8.903 C 5.791 8.746,5.463 8.631,5.221 8.582 C 4.846 8.504,4.145 8.503,3.782 8.580 C 1.926 8.973,0.711 10.788,1.063 12.641 C 1.378 14.303,2.808 15.487,4.500 15.487 C 5.957 15.487,7.252 14.599,7.765 13.250 L 7.860 13.000 12.000 13.000 L 16.140 13.000 16.275 13.345 L 16.411 13.689 15.056 15.044 C 14.310 15.790,13.680 16.400,13.656 16.400 C 13.631 16.400,13.496 16.348,13.356 16.285 C 12.958 16.105,12.526 16.021,12.000 16.021 C 11.407 16.021,11.017 16.109,10.494 16.362 C 9.250 16.962,8.512 18.131,8.512 19.500 C 8.513 20.363,8.795 21.131,9.347 21.770 C 10.760 23.406,13.240 23.406,14.653 21.770 C 15.205 21.131,15.487 20.362,15.487 19.500 C 15.487 18.914,15.394 18.521,15.097 17.860 C 15.087 17.838,15.698 17.202,16.454 16.446 L 17.828 15.072 17.951 15.135 C 18.767 15.558,19.877 15.606,20.764 15.258 C 22.102 14.734,23.000 13.425,23.000 12.000 C 23.000 10.364,21.826 8.921,20.218 8.580 C 19.861 8.505,19.139 8.505,18.782 8.580 C 17.630 8.824,16.644 9.664,16.235 10.750 L 16.140 11.000 12.000 11.000 L 7.860 11.000 7.725 10.655 L 7.589 10.311 8.951 8.949 L 10.312 7.588 10.626 7.713 C 11.082 7.895,11.370 7.962,11.808 7.988 C 13.304 8.078,14.706 7.175,15.258 5.764 C 15.569 4.972,15.569 4.028,15.258 3.236 C 15.035 2.665,14.647 2.142,14.165 1.759 C 13.842 1.502,13.187 1.186,12.800 1.099 C 12.503 1.033,11.811 0.990,11.580 1.024 M12.344 3.053 C 12.648 3.117,12.962 3.314,13.162 3.567 C 13.703 4.252,13.542 5.274,12.817 5.754 C 12.561 5.923,12.361 5.978,12.000 5.978 C 11.639 5.978,11.439 5.923,11.183 5.754 C 10.290 5.162,10.299 3.818,11.199 3.241 C 11.544 3.019,11.903 2.960,12.344 3.053 M5.047 10.615 C 5.729 10.896,6.084 11.544,5.960 12.281 C 5.811 13.161,4.835 13.716,3.991 13.401 C 2.704 12.919,2.679 11.139,3.953 10.615 C 4.126 10.544,4.256 10.522,4.500 10.522 C 4.744 10.522,4.874 10.544,5.047 10.615 M20.047 10.615 C 20.729 10.896,21.084 11.544,20.960 12.281 C 20.843 12.972,20.221 13.484,19.500 13.484 C 18.781 13.484,18.162 12.977,18.039 12.287 C 17.869 11.339,18.545 10.522,19.500 10.522 C 19.744 10.522,19.874 10.544,20.047 10.615 M12.344 18.053 C 12.648 18.117,12.962 18.314,13.162 18.567 C 13.703 19.252,13.542 20.274,12.817 20.754 C 12.561 20.923,12.361 20.978,12.000 20.978 C 11.639 20.978,11.439 20.923,11.183 20.754 C 10.289 20.161,10.299 18.818,11.202 18.239 C 11.407 18.107,11.732 18.009,11.980 18.004 C 12.046 18.003,12.210 18.025,12.344 18.053 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Waypoints = /*@__PURE__*/ forwardRef<ComponentInternals, WaypointsProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    