
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ImageMinusProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-image-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.383 2.230,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 14.120 L 21.980 8.700 21.871 8.514 C 21.479 7.848,20.521 7.848,20.129 8.514 L 20.020 8.700 20.009 10.636 L 19.997 12.571 19.189 11.773 C 18.744 11.334,18.299 10.920,18.200 10.853 C 17.668 10.492,17.193 10.352,16.500 10.352 C 15.809 10.352,15.343 10.489,14.800 10.851 C 14.701 10.917,12.584 13.004,10.095 15.490 L 5.570 20.009 5.135 19.994 C 4.750 19.981,4.679 19.967,4.516 19.872 C 4.415 19.812,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 4.006,3.975 4.631,4.303 4.303 C 4.621 3.985,4.414 4.000,8.537 3.998 C 11.476 3.997,12.209 3.986,12.330 3.943 C 12.551 3.864,12.744 3.702,12.869 3.489 C 12.964 3.328,12.980 3.256,12.980 3.000 C 12.980 2.746,12.963 2.672,12.872 2.516 C 12.813 2.415,12.698 2.282,12.618 2.221 C 12.320 1.994,12.426 2.000,8.404 2.005 C 6.367 2.007,4.609 2.025,4.499 2.043 M15.695 4.057 C 15.466 4.129,15.256 4.299,15.128 4.516 C 15.037 4.672,15.020 4.746,15.020 5.000 C 15.020 5.256,15.036 5.328,15.131 5.489 C 15.256 5.702,15.449 5.864,15.670 5.943 C 15.891 6.022,22.109 6.022,22.330 5.943 C 22.551 5.864,22.744 5.702,22.869 5.489 C 22.964 5.328,22.980 5.256,22.980 5.000 C 22.980 4.746,22.963 4.672,22.872 4.516 C 22.740 4.293,22.533 4.128,22.290 4.055 C 22.030 3.977,15.945 3.979,15.695 4.057 M8.499 6.040 C 7.363 6.246,6.460 7.049,6.114 8.160 C 5.979 8.594,5.979 9.406,6.114 9.840 C 6.421 10.826,7.174 11.579,8.160 11.886 C 8.594 12.021,9.406 12.021,9.840 11.886 C 10.826 11.579,11.579 10.826,11.886 9.840 C 12.021 9.406,12.021 8.594,11.886 8.160 C 11.581 7.179,10.810 6.407,9.861 6.129 C 9.500 6.023,8.832 5.980,8.499 6.040 M9.310 8.061 C 9.688 8.173,10.000 8.598,10.000 9.001 C 10.000 9.331,9.784 9.696,9.484 9.872 C 9.328 9.963,9.254 9.980,9.000 9.980 C 8.746 9.980,8.672 9.963,8.516 9.872 C 7.935 9.530,7.833 8.774,8.304 8.303 C 8.583 8.024,8.916 7.944,9.310 8.061 M16.920 12.425 C 17.010 12.462,17.587 13.009,18.530 13.951 L 20.000 15.420 20.000 17.263 C 20.000 19.265,19.993 19.337,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 13.860 19.990 L 8.420 20.001 12.160 16.258 C 14.217 14.199,15.949 12.489,16.009 12.457 C 16.274 12.316,16.625 12.304,16.920 12.425 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ImageMinus = /*@__PURE__*/ forwardRef<ComponentInternals, ImageMinusProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    