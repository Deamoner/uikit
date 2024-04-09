
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SlidersHorizontalProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.695 1.057 C 13.466 1.129,13.256 1.299,13.128 1.516 L 13.020 1.700 13.020 4.003 L 13.020 6.306 13.141 6.503 C 13.543 7.156,14.457 7.156,14.859 6.503 C 14.979 6.308,14.980 6.300,14.993 5.653 L 15.007 5.000 18.093 4.998 C 20.567 4.997,21.210 4.986,21.330 4.943 C 21.551 4.864,21.744 4.702,21.869 4.489 C 21.964 4.328,21.980 4.256,21.980 4.000 C 21.980 3.746,21.963 3.672,21.872 3.516 C 21.813 3.415,21.698 3.282,21.618 3.221 C 21.325 2.997,21.367 3.000,18.057 3.000 L 15.007 3.000 14.993 2.350 C 14.981 1.728,14.975 1.692,14.872 1.516 C 14.628 1.101,14.150 0.915,13.695 1.057 M2.695 3.057 C 2.466 3.129,2.256 3.299,2.128 3.516 C 2.037 3.672,2.020 3.746,2.020 4.000 C 2.020 4.256,2.036 4.328,2.131 4.489 C 2.256 4.702,2.449 4.864,2.670 4.943 C 2.891 5.022,10.109 5.022,10.330 4.943 C 10.551 4.864,10.744 4.702,10.869 4.489 C 10.964 4.328,10.980 4.256,10.980 4.000 C 10.980 3.746,10.963 3.672,10.872 3.516 C 10.740 3.293,10.533 3.128,10.290 3.055 C 10.030 2.977,2.945 2.979,2.695 3.057 M7.695 9.057 C 7.466 9.129,7.256 9.299,7.128 9.516 C 7.025 9.692,7.019 9.728,7.007 10.350 L 6.993 11.000 4.943 11.000 C 2.718 11.000,2.666 11.004,2.382 11.221 C 2.302 11.282,2.187 11.415,2.128 11.516 C 2.037 11.672,2.020 11.746,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.256 12.702,2.449 12.864,2.670 12.943 C 2.788 12.985,3.268 12.997,4.907 12.998 L 6.993 13.000 7.007 13.653 C 7.020 14.300,7.021 14.308,7.141 14.503 C 7.543 15.156,8.457 15.156,8.859 14.503 L 8.980 14.306 8.980 12.003 L 8.980 9.700 8.872 9.516 C 8.628 9.101,8.150 8.915,7.695 9.057 M11.695 11.057 C 11.466 11.129,11.256 11.299,11.128 11.516 C 11.037 11.672,11.020 11.746,11.020 12.000 C 11.020 12.256,11.036 12.328,11.131 12.489 C 11.256 12.702,11.449 12.864,11.670 12.943 C 11.892 13.022,21.108 13.022,21.330 12.943 C 21.551 12.864,21.744 12.702,21.869 12.489 C 21.964 12.328,21.980 12.256,21.980 12.000 C 21.980 11.746,21.963 11.672,21.872 11.516 C 21.740 11.293,21.533 11.128,21.290 11.055 C 21.029 10.976,11.946 10.978,11.695 11.057 M15.695 17.057 C 15.466 17.129,15.256 17.299,15.128 17.516 L 15.020 17.700 15.020 20.003 L 15.020 22.306 15.141 22.503 C 15.543 23.156,16.457 23.156,16.859 22.503 C 16.979 22.308,16.980 22.300,16.993 21.653 L 17.007 21.000 19.093 20.998 C 20.732 20.997,21.212 20.985,21.330 20.943 C 21.551 20.864,21.744 20.702,21.869 20.489 C 21.964 20.328,21.980 20.256,21.980 20.000 C 21.980 19.746,21.963 19.672,21.872 19.516 C 21.813 19.415,21.698 19.282,21.618 19.221 C 21.334 19.004,21.282 19.000,19.057 19.000 L 17.007 19.000 16.993 18.350 C 16.981 17.728,16.975 17.692,16.872 17.516 C 16.628 17.101,16.150 16.915,15.695 17.057 M2.695 19.057 C 2.466 19.129,2.256 19.299,2.128 19.516 C 2.037 19.672,2.020 19.746,2.020 20.000 C 2.020 20.256,2.036 20.328,2.131 20.489 C 2.256 20.702,2.449 20.864,2.670 20.943 C 2.892 21.022,12.108 21.022,12.330 20.943 C 12.551 20.864,12.744 20.702,12.869 20.489 C 12.964 20.328,12.980 20.256,12.980 20.000 C 12.980 19.746,12.963 19.672,12.872 19.516 C 12.740 19.293,12.533 19.128,12.290 19.055 C 12.029 18.976,2.946 18.978,2.695 19.057 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const SlidersHorizontal = /*@__PURE__*/ forwardRef<ComponentInternals, SlidersHorizontalProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    