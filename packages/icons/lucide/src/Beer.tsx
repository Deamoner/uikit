
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BeerProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-beer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.512 1.045 C 10.211 1.083,9.684 1.264,9.405 1.424 C 9.156 1.567,8.856 1.792,8.403 2.173 L 8.027 2.490 7.763 2.467 C 7.619 2.454,7.251 2.371,6.947 2.284 C 6.193 2.066,5.672 1.983,5.262 2.014 C 3.774 2.129,2.575 3.100,2.133 4.548 C 2.038 4.863,2.026 4.963,2.026 5.500 C 2.026 6.037,2.038 6.137,2.133 6.452 C 2.328 7.091,2.629 7.587,3.088 8.026 C 3.336 8.264,3.769 8.572,3.923 8.621 C 3.996 8.644,3.999 8.814,4.009 14.612 L 4.020 20.580 4.114 20.860 C 4.446 21.851,5.184 22.582,6.160 22.886 L 6.460 22.980 11.000 22.980 L 15.540 22.980 15.840 22.886 C 16.817 22.581,17.563 21.841,17.884 20.860 C 17.969 20.597,17.976 20.502,17.991 19.290 L 18.007 18.000 18.187 18.000 C 18.286 18.000,18.543 17.964,18.757 17.921 C 20.117 17.643,21.193 16.755,21.704 15.488 C 21.994 14.769,22.070 13.977,21.921 13.243 C 21.628 11.806,20.637 10.680,19.245 10.204 C 18.998 10.120,18.336 10.001,18.110 10.000 L 18.000 10.000 18.001 9.330 L 18.002 8.660 18.291 8.500 C 18.706 8.270,19.281 7.686,19.531 7.240 C 20.798 4.978,19.321 2.211,16.742 2.015 C 16.332 1.984,15.984 2.037,15.160 2.260 C 14.796 2.358,14.387 2.454,14.249 2.473 C 13.959 2.512,13.993 2.530,13.449 2.071 C 12.943 1.645,12.789 1.537,12.440 1.362 C 11.805 1.043,11.242 0.951,10.512 1.045 M11.349 3.060 C 11.565 3.125,11.799 3.288,12.380 3.780 C 13.006 4.311,13.415 4.487,14.020 4.487 C 14.478 4.487,14.725 4.443,15.656 4.194 C 16.327 4.014,16.439 3.995,16.661 4.019 C 17.172 4.073,17.646 4.420,17.866 4.900 C 17.961 5.106,17.977 5.192,17.977 5.500 C 17.977 5.808,17.961 5.894,17.866 6.100 C 17.722 6.415,17.414 6.724,17.104 6.867 C 16.730 7.039,16.384 7.025,15.641 6.807 C 14.812 6.564,14.442 6.507,13.840 6.531 C 13.402 6.549,13.242 6.578,12.540 6.763 L 11.740 6.974 11.000 6.974 L 10.260 6.974 9.460 6.763 C 8.184 6.426,7.631 6.434,6.359 6.807 C 5.616 7.025,5.270 7.039,4.896 6.867 C 4.586 6.724,4.278 6.415,4.134 6.100 C 4.039 5.894,4.023 5.808,4.023 5.500 C 4.023 5.192,4.039 5.106,4.134 4.900 C 4.359 4.410,4.832 4.070,5.360 4.019 C 5.570 3.999,5.693 4.014,6.000 4.097 C 6.894 4.341,7.321 4.439,7.641 4.473 C 8.399 4.553,8.880 4.377,9.640 3.743 C 10.229 3.251,10.358 3.162,10.612 3.074 C 10.869 2.986,11.084 2.982,11.349 3.060 M8.985 8.703 C 10.537 9.103,11.471 9.102,13.022 8.700 C 13.939 8.462,14.166 8.464,15.060 8.711 C 15.390 8.803,15.737 8.897,15.830 8.920 L 16.000 8.963 16.000 14.535 C 16.000 19.141,15.990 20.139,15.945 20.290 C 15.872 20.533,15.707 20.740,15.484 20.872 L 15.300 20.980 11.000 20.980 L 6.700 20.980 6.516 20.872 C 6.415 20.813,6.284 20.700,6.225 20.623 C 5.987 20.311,6.000 20.652,6.000 14.557 L 6.000 8.963 6.170 8.920 C 6.264 8.897,6.601 8.807,6.920 8.721 C 7.666 8.520,7.610 8.530,7.967 8.525 C 8.212 8.521,8.418 8.557,8.985 8.703 M8.695 11.057 C 8.466 11.129,8.256 11.299,8.128 11.516 L 8.020 11.700 8.020 15.003 L 8.020 18.306 8.141 18.503 C 8.543 19.156,9.457 19.156,9.859 18.503 L 9.980 18.306 9.980 15.003 L 9.980 11.700 9.872 11.516 C 9.628 11.101,9.150 10.915,8.695 11.057 M12.695 11.057 C 12.466 11.129,12.256 11.299,12.128 11.516 L 12.020 11.700 12.020 15.003 L 12.020 18.306 12.141 18.503 C 12.543 19.156,13.457 19.156,13.859 18.503 L 13.980 18.306 13.980 15.003 L 13.980 11.700 13.872 11.516 C 13.628 11.101,13.150 10.915,12.695 11.057 M18.523 12.073 C 19.262 12.266,19.850 12.924,19.967 13.690 C 20.067 14.343,19.873 14.933,19.403 15.404 C 19.042 15.766,18.544 16.000,18.132 16.000 L 18.000 16.000 18.000 14.000 L 18.000 12.000 18.130 12.002 C 18.202 12.004,18.378 12.036,18.523 12.073 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Beer = /*@__PURE__*/ forwardRef<ComponentInternals, BeerProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    