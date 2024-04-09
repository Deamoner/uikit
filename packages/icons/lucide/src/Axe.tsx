
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type AxeProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-axe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.640 2.068 C 12.486 2.121,12.151 2.438,10.347 4.235 C 9.166 5.411,8.187 6.419,8.127 6.520 C 8.036 6.673,8.020 6.745,8.021 7.000 C 8.021 7.213,8.043 7.340,8.096 7.440 C 8.136 7.517,8.486 7.900,8.874 8.290 L 9.578 9.001 5.556 13.030 C 2.893 15.697,1.481 17.140,1.380 17.297 C 1.018 17.856,0.855 18.477,0.893 19.158 C 0.905 19.390,0.945 19.688,0.981 19.820 C 1.259 20.844,2.156 21.741,3.180 22.019 C 3.312 22.055,3.610 22.095,3.842 22.107 C 4.523 22.145,5.144 21.982,5.703 21.620 C 5.860 21.519,7.302 20.107,9.968 17.446 L 13.996 13.425 14.008 14.863 L 14.020 16.300 14.133 16.492 C 14.263 16.713,14.501 16.901,14.736 16.966 C 15.055 17.054,16.126 16.856,17.040 16.540 C 17.592 16.349,18.485 15.911,18.960 15.599 C 19.978 14.928,20.928 13.979,21.600 12.958 C 21.911 12.485,22.350 11.591,22.538 11.043 C 22.821 10.224,23.026 9.224,22.985 8.866 C 22.958 8.626,22.811 8.368,22.618 8.221 C 22.347 8.015,22.225 8.000,20.765 8.000 L 19.422 8.000 16.481 5.065 C 13.804 2.394,13.522 2.125,13.343 2.065 C 13.102 1.985,12.878 1.986,12.640 2.068 M15.739 7.155 C 18.211 9.621,18.478 9.875,18.657 9.935 C 18.817 9.988,19.033 10.000,19.807 10.000 C 20.331 10.000,20.760 10.015,20.760 10.033 C 20.760 10.122,20.540 10.695,20.366 11.059 C 19.684 12.487,18.588 13.606,17.180 14.311 C 16.824 14.490,16.135 14.760,16.037 14.760 C 16.015 14.760,16.000 14.361,16.000 13.807 C 16.000 13.033,15.988 12.817,15.935 12.657 C 15.875 12.478,15.620 12.210,13.145 9.730 L 10.421 6.999 11.700 5.720 C 12.404 5.016,12.988 4.440,12.999 4.440 C 13.009 4.440,14.243 5.662,15.739 7.155 M11.800 11.220 L 12.580 12.000 8.620 15.961 C 5.709 18.872,4.612 19.945,4.481 20.009 C 3.944 20.270,3.277 20.038,3.000 19.495 C 2.871 19.244,2.860 18.787,2.977 18.540 C 3.028 18.431,4.306 17.124,7.016 14.410 C 9.196 12.227,10.989 10.440,11.000 10.440 C 11.011 10.440,11.371 10.791,11.800 11.220 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Axe = /*@__PURE__*/ forwardRef<ComponentInternals, AxeProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    