
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DessertProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-dessert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.499 1.040 C 10.776 1.171,10.172 1.524,9.692 2.094 L 9.514 2.306 8.967 2.457 C 6.837 3.042,4.827 4.362,3.436 6.089 C 2.539 7.203,1.824 8.584,1.421 9.980 C 1.025 11.349,0.888 13.121,1.120 13.860 C 1.299 14.430,1.617 14.901,2.103 15.316 C 2.326 15.506,2.333 15.519,2.500 16.025 C 3.488 19.017,5.778 21.337,8.757 22.364 C 11.463 23.297,14.432 23.026,16.919 21.617 C 18.638 20.644,20.099 19.098,20.958 17.345 C 21.215 16.821,21.556 15.948,21.618 15.654 C 21.636 15.568,21.718 15.467,21.882 15.328 C 22.385 14.903,22.701 14.435,22.886 13.840 C 22.971 13.569,22.980 13.468,22.978 12.800 C 22.973 11.155,22.623 9.695,21.861 8.140 C 20.483 5.328,17.987 3.263,14.973 2.440 C 14.489 2.308,14.486 2.306,14.308 2.095 C 13.730 1.408,13.007 1.052,12.120 1.019 C 11.889 1.011,11.609 1.020,11.499 1.040 M12.308 3.060 C 12.577 3.140,12.797 3.357,12.911 3.655 C 13.014 3.925,13.021 4.039,12.945 4.290 C 12.872 4.533,12.707 4.740,12.484 4.872 C 12.328 4.963,12.254 4.980,12.000 4.980 C 11.746 4.980,11.672 4.963,11.516 4.872 C 11.303 4.747,11.141 4.550,11.058 4.316 C 10.978 4.087,10.985 3.926,11.089 3.655 C 11.287 3.137,11.771 2.901,12.308 3.060 M9.353 5.420 C 9.712 6.091,10.400 6.649,11.160 6.886 C 11.594 7.021,12.406 7.021,12.840 6.886 C 13.430 6.702,13.894 6.391,14.321 5.891 C 14.571 5.599,14.748 5.270,14.878 4.852 L 14.981 4.523 15.360 4.676 C 16.546 5.153,17.506 5.785,18.379 6.662 C 19.982 8.272,20.853 10.267,20.979 12.620 C 21.020 13.374,20.885 13.671,20.401 13.890 C 20.180 13.990,20.105 14.005,19.910 13.988 C 19.541 13.955,19.219 13.719,19.072 13.373 C 19.043 13.304,19.014 12.902,18.998 12.340 C 18.974 11.546,18.958 11.382,18.881 11.140 C 18.573 10.173,17.813 9.415,16.861 9.125 C 16.588 9.042,16.458 9.027,16.000 9.027 C 15.542 9.027,15.412 9.042,15.139 9.125 C 14.189 9.415,13.439 10.161,13.115 11.140 C 13.024 11.417,13.023 11.448,13.001 13.840 C 12.985 15.641,12.967 16.289,12.930 16.373 C 12.842 16.571,12.673 16.761,12.484 16.872 C 12.328 16.963,12.254 16.980,12.000 16.980 C 11.746 16.980,11.672 16.963,11.516 16.872 C 11.328 16.761,11.158 16.572,11.070 16.373 C 11.033 16.288,11.015 15.651,10.999 13.840 C 10.978 11.446,10.976 11.417,10.885 11.140 C 10.561 10.161,9.811 9.415,8.861 9.125 C 8.588 9.042,8.458 9.027,8.000 9.027 C 7.542 9.027,7.412 9.042,7.139 9.125 C 6.187 9.415,5.426 10.174,5.119 11.140 C 5.042 11.381,5.026 11.550,5.002 12.340 C 4.985 12.888,4.955 13.306,4.927 13.373 C 4.783 13.717,4.459 13.955,4.090 13.988 C 3.895 14.005,3.820 13.990,3.599 13.890 C 3.313 13.760,3.158 13.595,3.055 13.311 C 2.953 13.027,3.035 11.912,3.222 11.054 C 3.587 9.377,4.401 7.888,5.621 6.662 C 6.494 5.785,7.454 5.153,8.640 4.676 L 9.019 4.523 9.122 4.852 C 9.178 5.032,9.282 5.288,9.353 5.420 M8.308 11.060 C 8.438 11.099,8.571 11.179,8.679 11.283 C 8.993 11.589,8.977 11.448,9.001 14.160 C 9.023 16.553,9.024 16.583,9.115 16.860 C 9.441 17.846,10.184 18.582,11.160 18.886 C 11.594 19.021,12.406 19.021,12.840 18.886 C 13.816 18.582,14.559 17.846,14.885 16.860 C 14.976 16.583,14.977 16.553,14.999 14.160 C 15.023 11.448,15.007 11.589,15.321 11.283 C 15.490 11.120,15.777 11.000,16.000 11.000 C 16.223 11.000,16.510 11.120,16.679 11.283 C 16.956 11.552,16.972 11.623,17.003 12.660 C 17.026 13.452,17.042 13.619,17.119 13.860 C 17.422 14.812,18.164 15.564,19.099 15.865 C 19.279 15.923,19.375 15.974,19.367 16.008 C 19.360 16.036,19.267 16.240,19.159 16.460 C 18.500 17.804,17.434 18.964,16.120 19.767 C 15.094 20.395,13.886 20.776,12.577 20.884 C 10.996 21.016,9.238 20.597,7.880 19.767 C 6.566 18.964,5.500 17.804,4.841 16.460 C 4.733 16.240,4.640 16.036,4.633 16.008 C 4.625 15.974,4.721 15.923,4.901 15.865 C 5.836 15.564,6.578 14.812,6.881 13.860 C 6.958 13.619,6.974 13.452,6.997 12.660 C 7.028 11.622,7.044 11.552,7.322 11.283 C 7.588 11.024,7.928 10.947,8.308 11.060 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Dessert = /*@__PURE__*/ forwardRef<ComponentInternals, DessertProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    