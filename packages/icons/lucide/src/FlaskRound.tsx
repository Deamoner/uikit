
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FlaskRoundProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-flask-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.240 1.037 C 7.793 1.175,7.512 1.546,7.512 2.000 C 7.512 2.405,7.719 2.724,8.100 2.905 C 8.263 2.982,8.365 2.999,8.650 3.000 L 9.000 3.000 9.000 5.810 L 8.999 8.620 8.650 8.786 C 7.843 9.169,6.813 9.990,6.203 10.736 C 5.004 12.204,4.406 14.056,4.524 15.936 C 4.671 18.290,5.878 20.395,7.840 21.722 C 9.172 22.622,10.913 23.081,12.530 22.958 C 16.078 22.688,18.896 20.061,19.420 16.535 C 19.506 15.955,19.507 14.941,19.422 14.420 C 19.191 13.006,18.652 11.783,17.797 10.736 C 17.187 9.990,16.157 9.169,15.350 8.786 L 15.001 8.620 15.000 5.810 L 15.000 3.000 15.350 3.000 C 15.635 2.999,15.737 2.982,15.900 2.905 C 16.281 2.724,16.488 2.405,16.488 2.000 C 16.488 1.615,16.293 1.297,15.940 1.106 L 15.780 1.020 12.060 1.013 C 10.014 1.009,8.295 1.020,8.240 1.037 M13.000 6.233 C 13.000 9.827,12.990 9.689,13.268 9.975 C 13.438 10.149,13.534 10.204,13.884 10.324 C 14.702 10.604,15.646 11.262,16.197 11.937 C 16.849 12.734,17.244 13.593,17.418 14.590 C 17.452 14.782,17.480 14.954,17.480 14.970 C 17.480 14.987,15.014 15.000,12.000 15.000 C 8.986 15.000,6.520 14.987,6.520 14.970 C 6.520 14.954,6.548 14.782,6.582 14.590 C 6.756 13.593,7.151 12.734,7.803 11.937 C 8.364 11.250,9.319 10.589,10.140 10.319 C 10.605 10.167,10.863 9.940,10.961 9.597 C 10.985 9.513,11.000 8.213,11.000 6.230 L 11.000 3.000 12.000 3.000 L 13.000 3.000 13.000 6.233 M17.280 17.018 C 17.280 17.083,17.042 17.675,16.910 17.938 C 16.245 19.265,15.105 20.250,13.712 20.701 C 13.106 20.897,12.636 20.971,12.000 20.971 C 9.901 20.971,8.031 19.816,7.090 17.938 C 6.958 17.675,6.720 17.083,6.720 17.018 C 6.720 17.008,9.096 17.000,12.000 17.000 C 14.904 17.000,17.280 17.008,17.280 17.018 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FlaskRound = /*@__PURE__*/ forwardRef<ComponentInternals, FlaskRoundProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    