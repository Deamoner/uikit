
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type RadioProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-radio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.447 4.024 C 3.967 4.263,2.840 5.705,2.246 6.840 C 0.729 9.739,0.563 13.107,1.787 16.160 C 2.282 17.394,2.936 18.428,3.897 19.495 C 4.243 19.879,4.444 20.023,4.703 20.069 C 5.416 20.195,5.995 19.615,5.869 18.901 C 5.827 18.666,5.759 18.563,5.368 18.140 C 3.969 16.627,3.104 14.582,3.008 12.560 C 2.883 9.946,3.687 7.683,5.401 5.824 C 5.582 5.628,5.764 5.392,5.805 5.298 C 5.946 4.979,5.906 4.596,5.701 4.315 C 5.422 3.931,4.884 3.806,4.447 4.024 M18.644 4.025 C 18.250 4.222,18.036 4.668,18.128 5.102 C 18.178 5.339,18.249 5.446,18.614 5.840 C 19.235 6.510,19.723 7.226,20.125 8.060 C 20.735 9.323,20.999 10.489,21.000 11.921 C 21.000 13.052,20.891 13.759,20.559 14.769 C 20.156 15.995,19.542 17.035,18.640 18.020 C 18.438 18.240,18.237 18.499,18.193 18.595 C 18.093 18.811,18.086 19.162,18.178 19.382 C 18.323 19.730,18.726 19.999,19.100 19.999 C 19.426 19.999,19.650 19.866,20.071 19.421 C 21.610 17.795,22.570 15.781,22.923 13.440 C 23.036 12.693,23.047 11.352,22.947 10.616 C 22.627 8.271,21.720 6.307,20.146 4.555 C 19.689 4.045,19.482 3.920,19.100 3.920 C 18.916 3.920,18.803 3.946,18.644 4.025 M7.369 6.804 C 7.080 6.948,6.482 7.654,6.091 8.313 C 4.693 10.669,4.750 13.614,6.238 15.846 C 6.583 16.363,7.101 16.952,7.319 17.075 C 7.782 17.335,8.391 17.162,8.667 16.692 C 8.764 16.527,8.780 16.458,8.779 16.200 C 8.778 15.839,8.738 15.753,8.379 15.352 C 6.649 13.412,6.652 10.505,8.387 8.548 C 8.668 8.232,8.799 7.962,8.799 7.700 C 8.799 7.330,8.530 6.923,8.191 6.782 C 7.972 6.691,7.577 6.702,7.369 6.804 M15.895 6.857 C 15.666 6.929,15.456 7.099,15.328 7.316 C 15.236 7.472,15.220 7.545,15.221 7.800 C 15.222 8.161,15.262 8.247,15.621 8.648 C 16.812 9.984,17.207 11.756,16.700 13.498 C 16.506 14.165,16.062 14.958,15.590 15.480 C 15.114 16.006,15.072 16.520,15.467 16.960 C 15.671 17.187,15.897 17.288,16.200 17.288 C 16.540 17.288,16.724 17.191,17.045 16.845 C 18.616 15.149,19.261 12.706,18.740 10.420 C 18.473 9.245,17.841 8.068,17.028 7.233 C 16.781 6.979,16.692 6.915,16.517 6.863 C 16.266 6.788,16.119 6.787,15.895 6.857 M11.499 9.040 C 10.363 9.246,9.460 10.049,9.114 11.160 C 8.979 11.594,8.979 12.406,9.114 12.840 C 9.421 13.826,10.174 14.579,11.160 14.886 C 11.594 15.021,12.406 15.021,12.840 14.886 C 13.826 14.579,14.579 13.826,14.886 12.840 C 15.021 12.406,15.021 11.594,14.886 11.160 C 14.581 10.179,13.810 9.407,12.861 9.129 C 12.500 9.023,11.832 8.980,11.499 9.040 M12.310 11.061 C 12.688 11.173,13.000 11.598,13.000 12.001 C 13.000 12.331,12.784 12.696,12.484 12.872 C 12.328 12.963,12.254 12.980,12.000 12.980 C 11.746 12.980,11.672 12.963,11.516 12.872 C 10.935 12.530,10.833 11.774,11.304 11.303 C 11.583 11.024,11.916 10.944,12.310 11.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Radio = /*@__PURE__*/ forwardRef<ComponentInternals, RadioProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    