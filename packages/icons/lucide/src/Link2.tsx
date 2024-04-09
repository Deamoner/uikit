
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type Link2Props = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-link-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.380 6.043 C 3.784 6.299,1.681 8.215,1.114 10.840 C 0.984 11.446,0.984 12.554,1.114 13.160 C 1.636 15.578,3.403 17.352,5.820 17.883 C 6.179 17.962,6.366 17.973,7.662 17.989 C 8.633 18.001,9.157 17.993,9.266 17.964 C 9.497 17.901,9.737 17.713,9.867 17.492 C 9.964 17.327,9.980 17.257,9.980 17.000 C 9.980 16.746,9.963 16.672,9.872 16.516 C 9.813 16.415,9.698 16.282,9.618 16.221 C 9.350 16.017,9.217 16.000,7.870 16.000 C 6.777 16.000,6.585 15.990,6.227 15.917 C 4.566 15.579,3.309 14.265,3.058 12.605 C 2.986 12.121,2.986 11.879,3.058 11.395 C 3.280 9.926,4.324 8.690,5.755 8.203 C 6.224 8.044,6.694 8.001,7.980 7.998 C 9.270 7.996,9.354 7.985,9.619 7.783 C 9.696 7.725,9.808 7.592,9.869 7.489 C 9.964 7.328,9.980 7.256,9.980 7.000 C 9.980 6.746,9.963 6.672,9.872 6.516 C 9.740 6.293,9.533 6.128,9.290 6.055 C 9.086 5.993,6.967 5.984,6.380 6.043 M14.695 6.057 C 14.466 6.129,14.256 6.299,14.128 6.516 C 14.037 6.672,14.020 6.746,14.020 7.000 C 14.020 7.256,14.036 7.328,14.131 7.489 C 14.192 7.592,14.304 7.725,14.381 7.783 C 14.646 7.985,14.730 7.996,16.020 7.998 C 17.669 8.001,18.062 8.066,18.840 8.464 C 19.739 8.924,20.462 9.771,20.797 10.755 C 20.897 11.050,21.000 11.680,21.000 12.000 C 21.000 12.322,20.897 12.951,20.796 13.245 C 20.321 14.632,19.195 15.628,17.773 15.917 C 17.415 15.990,17.223 16.000,16.130 16.000 C 14.783 16.000,14.650 16.017,14.382 16.221 C 14.302 16.282,14.187 16.415,14.128 16.516 C 14.037 16.672,14.020 16.746,14.020 17.000 C 14.020 17.257,14.036 17.327,14.133 17.492 C 14.263 17.713,14.503 17.901,14.734 17.964 C 14.843 17.993,15.367 18.001,16.338 17.989 C 17.634 17.973,17.821 17.962,18.180 17.883 C 20.603 17.350,22.366 15.581,22.885 13.160 C 23.015 12.554,23.015 11.446,22.885 10.840 C 22.626 9.631,22.109 8.660,21.269 7.805 C 20.258 6.775,19.009 6.180,17.564 6.039 C 16.970 5.982,14.895 5.994,14.695 6.057 M7.695 11.057 C 7.466 11.129,7.256 11.299,7.128 11.516 C 7.037 11.672,7.020 11.746,7.020 12.000 C 7.020 12.256,7.036 12.328,7.131 12.489 C 7.256 12.702,7.449 12.864,7.670 12.943 C 7.892 13.022,16.108 13.022,16.330 12.943 C 16.551 12.864,16.744 12.702,16.869 12.489 C 16.964 12.328,16.980 12.256,16.980 12.000 C 16.980 11.746,16.963 11.672,16.872 11.516 C 16.740 11.293,16.533 11.128,16.290 11.055 C 16.029 10.976,7.946 10.979,7.695 11.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Link2 = /*@__PURE__*/ forwardRef<ComponentInternals, Link2Props>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    