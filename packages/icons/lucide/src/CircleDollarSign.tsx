
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type CircleDollarSignProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.280 1.023 C 11.203 1.032,10.951 1.059,10.720 1.083 C 8.832 1.283,6.991 2.023,5.360 3.235 C 4.751 3.688,3.684 4.755,3.226 5.367 C 0.728 8.714,0.301 13.032,2.097 16.780 C 2.643 17.918,3.276 18.801,4.238 19.762 C 5.199 20.724,6.082 21.357,7.220 21.903 C 10.967 23.699,15.288 23.270,18.637 20.770 C 19.246 20.316,20.316 19.246,20.770 18.637 C 23.744 14.652,23.744 9.348,20.770 5.363 C 20.316 4.755,19.247 3.686,18.640 3.235 C 17.045 2.049,15.365 1.360,13.423 1.096 C 13.000 1.038,11.574 0.990,11.280 1.023 M13.320 3.101 C 15.883 3.488,18.124 4.931,19.560 7.120 C 19.863 7.583,20.303 8.479,20.492 9.020 C 20.838 10.013,20.977 10.865,20.977 12.000 C 20.977 13.493,20.720 14.621,20.080 15.940 C 19.375 17.394,18.311 18.607,16.927 19.532 C 16.138 20.060,14.876 20.588,13.908 20.797 C 11.266 21.366,8.479 20.708,6.370 19.019 C 4.857 17.807,3.722 16.029,3.267 14.160 C 3.081 13.397,3.023 12.888,3.023 12.000 C 3.023 10.507,3.280 9.379,3.920 8.060 C 4.971 5.891,6.877 4.221,9.160 3.466 C 9.865 3.233,10.432 3.118,11.340 3.024 C 11.662 2.991,12.911 3.039,13.320 3.101 M11.695 5.057 C 11.466 5.129,11.256 5.299,11.128 5.516 C 11.025 5.692,11.019 5.728,11.007 6.345 L 10.993 6.991 10.227 7.010 C 9.567 7.027,9.415 7.043,9.139 7.126 C 8.181 7.415,7.419 8.180,7.114 9.160 C 6.979 9.594,6.979 10.406,7.114 10.840 C 7.418 11.817,8.165 12.570,9.140 12.882 C 9.379 12.958,9.536 12.974,10.210 12.990 L 11.000 13.009 11.000 14.005 L 11.000 15.000 9.446 15.000 C 7.758 15.000,7.658 15.011,7.382 15.221 C 7.302 15.282,7.187 15.415,7.128 15.516 C 7.037 15.672,7.020 15.746,7.020 16.000 C 7.020 16.256,7.036 16.328,7.131 16.489 C 7.192 16.592,7.304 16.725,7.381 16.783 C 7.654 16.991,7.700 16.996,9.407 16.998 L 10.993 17.000 11.007 17.653 C 11.020 18.300,11.021 18.308,11.141 18.503 C 11.543 19.156,12.457 19.156,12.859 18.503 C 12.979 18.309,12.980 18.300,12.993 17.658 L 13.007 17.009 13.793 16.990 C 14.464 16.974,14.621 16.958,14.860 16.882 C 15.835 16.570,16.582 15.817,16.886 14.840 C 17.021 14.406,17.021 13.594,16.886 13.160 C 16.581 12.180,15.819 11.415,14.861 11.126 C 14.584 11.043,14.433 11.027,13.770 11.010 L 13.000 10.991 13.000 9.995 L 13.000 9.000 14.590 8.998 C 16.300 8.996,16.346 8.991,16.619 8.783 C 16.696 8.725,16.808 8.592,16.869 8.489 C 16.964 8.328,16.980 8.256,16.980 8.000 C 16.980 7.746,16.963 7.672,16.872 7.516 C 16.813 7.415,16.698 7.282,16.618 7.221 C 16.342 7.011,16.241 7.000,14.557 7.000 L 13.007 7.000 12.993 6.350 C 12.981 5.728,12.975 5.692,12.872 5.516 C 12.628 5.101,12.150 4.915,11.695 5.057 M11.000 10.003 L 11.000 11.007 10.350 10.993 C 9.728 10.981,9.692 10.975,9.516 10.872 C 8.935 10.530,8.833 9.774,9.304 9.303 C 9.554 9.052,9.727 9.006,10.430 9.003 L 11.000 9.000 11.000 10.003 M14.310 13.061 C 14.688 13.173,15.000 13.598,15.000 14.001 C 15.000 14.331,14.784 14.696,14.484 14.872 C 14.308 14.975,14.272 14.981,13.650 14.993 L 13.000 15.007 13.000 14.003 L 13.000 13.000 13.553 13.000 C 13.931 13.000,14.170 13.019,14.310 13.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const CircleDollarSign = /*@__PURE__*/ forwardRef<ComponentInternals, CircleDollarSignProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    