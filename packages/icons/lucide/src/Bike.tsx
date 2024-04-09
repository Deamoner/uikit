
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BikeProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-bike" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.477 3.073 C 13.806 3.249,13.238 3.823,13.060 4.508 C 12.941 4.962,13.003 5.492,13.225 5.930 C 13.361 6.199,13.801 6.639,14.070 6.775 C 14.657 7.073,15.345 7.071,15.937 6.771 C 16.197 6.639,16.639 6.197,16.771 5.937 C 16.994 5.498,17.052 5.007,16.940 4.529 C 16.858 4.182,16.720 3.927,16.465 3.653 C 15.948 3.097,15.211 2.882,14.477 3.073 M12.689 7.043 C 12.616 7.065,11.587 7.810,10.402 8.699 C 7.940 10.545,8.020 10.468,8.020 11.000 C 8.020 11.254,8.036 11.327,8.127 11.480 C 8.186 11.579,8.857 12.281,9.617 13.040 L 11.000 14.420 11.000 16.060 L 11.001 17.700 11.095 17.900 C 11.276 18.281,11.595 18.488,12.000 18.488 C 12.405 18.488,12.724 18.281,12.905 17.900 L 12.999 17.700 13.000 15.777 C 13.000 14.095,12.992 13.830,12.934 13.657 C 12.876 13.484,12.724 13.315,11.698 12.280 L 10.527 11.100 11.490 10.380 C 12.020 9.984,12.521 9.610,12.604 9.548 L 12.756 9.436 13.513 10.568 C 13.937 11.202,14.327 11.741,14.397 11.792 C 14.662 11.986,14.770 12.000,16.015 11.998 C 17.268 11.996,17.355 11.985,17.619 11.783 C 17.696 11.725,17.808 11.592,17.869 11.489 C 17.964 11.328,17.980 11.256,17.980 11.000 C 17.980 10.746,17.963 10.672,17.872 10.516 C 17.813 10.415,17.698 10.282,17.618 10.221 C 17.369 10.032,17.184 10.000,16.320 10.000 L 15.534 10.000 14.617 8.630 C 13.577 7.076,13.556 7.054,13.078 7.020 C 12.936 7.010,12.761 7.020,12.689 7.043 M4.900 13.045 C 3.431 13.229,2.051 14.245,1.421 15.609 C 0.787 16.981,0.883 18.574,1.677 19.864 C 2.287 20.855,3.242 21.550,4.437 21.871 C 4.778 21.963,4.895 21.974,5.500 21.974 C 6.105 21.974,6.222 21.963,6.563 21.871 C 8.550 21.337,9.890 19.711,9.988 17.717 C 10.126 14.921,7.702 12.695,4.900 13.045 M17.900 13.045 C 16.431 13.229,15.051 14.245,14.421 15.609 C 13.787 16.981,13.883 18.574,14.677 19.864 C 15.287 20.855,16.242 21.550,17.437 21.871 C 17.778 21.963,17.895 21.974,18.500 21.974 C 19.105 21.974,19.222 21.963,19.563 21.871 C 21.550 21.337,22.890 19.711,22.988 17.717 C 23.126 14.921,20.702 12.695,17.900 13.045 M6.020 15.060 C 6.741 15.211,7.395 15.713,7.715 16.362 C 8.087 17.118,8.090 17.878,7.723 18.620 C 7.439 19.195,6.932 19.646,6.320 19.868 C 6.052 19.965,5.965 19.976,5.500 19.976 C 5.035 19.976,4.948 19.965,4.680 19.868 C 3.495 19.438,2.803 18.206,3.060 16.980 C 3.339 15.644,4.674 14.778,6.020 15.060 M19.020 15.060 C 19.741 15.211,20.395 15.713,20.715 16.362 C 21.087 17.118,21.090 17.878,20.723 18.620 C 20.439 19.195,19.932 19.646,19.320 19.868 C 19.052 19.965,18.965 19.976,18.500 19.976 C 18.035 19.976,17.948 19.965,17.680 19.868 C 17.068 19.646,16.561 19.195,16.277 18.620 C 15.347 16.740,16.972 14.631,19.020 15.060 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Bike = /*@__PURE__*/ forwardRef<ComponentInternals, BikeProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    