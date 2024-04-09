
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type BadgeSwissFrancProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-badge-swiss-franc" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.520 1.025 C 10.322 1.177,9.339 1.637,8.516 2.429 L 8.172 2.760 7.776 2.760 C 6.553 2.761,5.352 3.207,4.473 3.989 C 3.372 4.967,2.760 6.304,2.760 7.730 L 2.760 8.169 2.484 8.439 C 1.535 9.365,1.000 10.650,1.000 12.000 C 1.000 13.349,1.531 14.624,2.484 15.564 L 2.760 15.836 2.760 16.273 C 2.760 17.455,3.212 18.653,3.988 19.526 C 4.969 20.630,6.301 21.240,7.731 21.240 L 8.172 21.240 8.536 21.591 C 9.456 22.478,10.547 22.939,11.840 22.988 C 13.216 23.039,14.462 22.561,15.457 21.599 L 15.828 21.240 16.244 21.240 C 17.696 21.239,19.029 20.633,20.012 19.526 C 20.789 18.652,21.240 17.456,21.240 16.269 L 21.240 15.828 21.573 15.483 C 22.257 14.773,22.698 13.936,22.908 12.948 C 23.004 12.496,23.004 11.504,22.908 11.052 C 22.698 10.064,22.257 9.227,21.573 8.517 L 21.240 8.172 21.240 7.731 C 21.240 6.780,20.943 5.791,20.418 5.000 C 19.490 3.599,17.922 2.761,16.224 2.760 L 15.828 2.760 15.484 2.429 C 14.780 1.751,13.880 1.279,12.953 1.100 C 12.618 1.036,11.781 0.992,11.520 1.025 M12.460 3.056 C 13.279 3.181,13.925 3.585,14.476 4.318 C 14.645 4.543,14.754 4.644,14.920 4.732 C 15.134 4.845,15.150 4.848,15.500 4.816 C 16.090 4.762,16.711 4.777,17.000 4.853 C 18.023 5.119,18.881 5.977,19.147 7.000 C 19.223 7.289,19.238 7.910,19.184 8.500 C 19.152 8.850,19.155 8.866,19.268 9.080 C 19.356 9.246,19.457 9.355,19.682 9.524 C 20.647 10.249,21.102 11.264,20.959 12.370 C 20.847 13.233,20.442 13.900,19.674 14.484 C 19.431 14.670,19.344 14.765,19.258 14.942 C 19.153 15.155,19.150 15.180,19.183 15.512 C 19.239 16.071,19.223 16.708,19.147 17.000 C 18.934 17.818,18.335 18.553,17.580 18.921 C 16.981 19.213,16.717 19.247,15.440 19.195 C 14.919 19.174,14.814 19.236,14.360 19.836 C 14.085 20.199,13.754 20.473,13.340 20.680 C 12.858 20.921,12.589 20.980,11.980 20.979 C 11.495 20.978,11.433 20.968,11.065 20.842 C 10.423 20.622,9.958 20.267,9.492 19.642 C 9.352 19.454,9.240 19.352,9.080 19.268 C 8.880 19.163,8.835 19.155,8.580 19.176 C 7.673 19.252,7.427 19.250,7.080 19.164 C 5.983 18.893,5.146 18.077,4.857 16.998 C 4.779 16.703,4.762 16.095,4.816 15.532 C 4.850 15.179,4.848 15.156,4.744 14.945 C 4.656 14.764,4.574 14.679,4.282 14.462 C 3.711 14.036,3.345 13.540,3.131 12.900 C 3.035 12.612,3.024 12.522,3.024 12.000 C 3.024 11.478,3.035 11.388,3.131 11.100 C 3.345 10.460,3.693 9.986,4.268 9.554 C 4.572 9.325,4.654 9.240,4.743 9.057 C 4.848 8.843,4.850 8.822,4.816 8.468 C 4.762 7.907,4.779 7.297,4.857 7.000 C 5.126 5.976,5.925 5.161,6.942 4.874 C 7.292 4.776,7.834 4.755,8.500 4.816 C 8.850 4.848,8.866 4.845,9.080 4.732 C 9.246 4.644,9.355 4.543,9.524 4.318 C 10.062 3.601,10.719 3.183,11.500 3.059 C 11.925 2.991,12.036 2.991,12.460 3.056 M10.695 7.057 C 10.466 7.129,10.256 7.299,10.128 7.516 L 10.020 7.700 10.009 11.350 L 9.998 15.000 9.446 15.000 C 8.648 15.000,8.367 15.110,8.128 15.516 C 8.037 15.672,8.020 15.746,8.020 16.000 C 8.020 16.256,8.036 16.328,8.131 16.489 C 8.256 16.702,8.449 16.864,8.670 16.943 C 8.768 16.978,9.022 16.997,9.405 16.998 L 9.991 17.000 10.018 17.179 C 10.054 17.422,10.258 17.712,10.497 17.859 C 10.671 17.966,10.729 17.980,11.000 17.980 C 11.271 17.980,11.329 17.966,11.503 17.859 C 11.742 17.712,11.946 17.422,11.982 17.179 L 12.009 17.000 12.595 16.998 C 12.978 16.997,13.232 16.978,13.330 16.943 C 13.551 16.864,13.744 16.702,13.869 16.489 C 13.964 16.328,13.980 16.256,13.980 16.000 C 13.980 15.746,13.963 15.672,13.872 15.516 C 13.633 15.110,13.352 15.000,12.554 15.000 L 12.000 15.000 12.000 14.000 L 12.000 13.000 13.090 12.998 C 14.262 12.996,14.357 12.983,14.619 12.783 C 14.696 12.725,14.808 12.592,14.869 12.489 C 14.964 12.328,14.980 12.256,14.980 12.000 C 14.980 11.746,14.963 11.672,14.872 11.516 C 14.813 11.415,14.698 11.282,14.618 11.221 C 14.356 11.022,14.203 11.000,13.054 11.000 L 12.000 11.000 12.000 10.000 L 12.000 9.000 13.590 8.998 C 15.300 8.996,15.346 8.991,15.619 8.783 C 15.696 8.725,15.808 8.592,15.869 8.489 C 15.964 8.328,15.980 8.256,15.980 8.000 C 15.980 7.746,15.963 7.672,15.872 7.516 C 15.740 7.293,15.533 7.128,15.290 7.055 C 15.033 6.978,10.943 6.979,10.695 7.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const BadgeSwissFranc = /*@__PURE__*/ forwardRef<ComponentInternals, BadgeSwissFrancProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    