
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SparkleProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-sparkle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.660 2.070 C 11.420 2.175,11.299 2.268,11.188 2.432 C 11.091 2.575,10.901 3.133,9.681 6.865 C 9.371 7.813,9.071 8.659,9.016 8.745 C 8.960 8.830,8.858 8.941,8.787 8.991 C 8.715 9.043,7.404 9.496,5.740 10.044 C 4.134 10.573,2.739 11.035,2.640 11.072 C 2.283 11.204,2.000 11.614,2.000 12.000 C 2.000 12.350,2.271 12.773,2.576 12.901 C 2.648 12.931,4.019 13.385,5.623 13.911 C 7.227 14.437,8.594 14.896,8.661 14.930 C 8.808 15.006,8.990 15.183,9.059 15.319 C 9.088 15.375,9.546 16.743,10.078 18.360 C 10.610 19.977,11.082 21.377,11.126 21.470 C 11.269 21.771,11.647 22.000,12.000 22.000 C 12.350 22.000,12.773 21.729,12.901 21.424 C 12.931 21.352,13.385 19.981,13.911 18.377 C 14.437 16.773,14.896 15.406,14.930 15.339 C 15.006 15.192,15.183 15.010,15.319 14.941 C 15.375 14.912,16.743 14.454,18.360 13.922 C 19.977 13.390,21.377 12.918,21.470 12.874 C 21.771 12.731,22.000 12.353,22.000 12.000 C 22.000 11.640,21.735 11.235,21.411 11.098 C 21.328 11.063,19.955 10.607,18.360 10.084 C 16.765 9.561,15.406 9.104,15.339 9.070 C 15.192 8.994,15.010 8.817,14.941 8.681 C 14.912 8.625,14.453 7.257,13.921 5.640 C 13.388 4.023,12.930 2.646,12.902 2.580 C 12.719 2.140,12.089 1.881,11.660 2.070 M12.552 7.875 C 12.912 8.952,13.133 9.551,13.232 9.720 C 13.560 10.275,14.135 10.757,14.748 10.992 C 14.919 11.058,15.659 11.306,16.390 11.543 C 17.122 11.781,17.720 11.985,17.720 11.997 C 17.720 12.010,17.004 12.259,16.130 12.552 C 14.991 12.933,14.464 13.129,14.271 13.244 C 13.710 13.576,13.244 14.130,13.008 14.748 C 12.942 14.919,12.694 15.659,12.457 16.390 C 12.219 17.122,12.015 17.720,12.003 17.720 C 11.990 17.720,11.740 17.002,11.448 16.125 C 11.088 15.048,10.867 14.449,10.768 14.280 C 10.440 13.725,9.865 13.243,9.252 13.008 C 9.081 12.942,8.341 12.694,7.610 12.457 C 6.879 12.219,6.280 12.015,6.280 12.003 C 6.280 11.990,6.998 11.740,7.875 11.448 C 8.952 11.088,9.551 10.867,9.720 10.768 C 10.275 10.440,10.757 9.865,10.992 9.252 C 11.058 9.081,11.306 8.341,11.543 7.610 C 11.781 6.879,11.985 6.280,11.997 6.280 C 12.010 6.280,12.260 6.998,12.552 7.875 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Sparkle = /*@__PURE__*/ forwardRef<ComponentInternals, SparkleProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    