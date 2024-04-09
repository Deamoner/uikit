
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DivideCircleProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-divide-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.280 1.023 C 11.203 1.032,10.951 1.059,10.720 1.083 C 8.832 1.283,6.991 2.023,5.360 3.235 C 4.751 3.688,3.684 4.755,3.226 5.367 C 0.728 8.714,0.301 13.032,2.097 16.780 C 2.643 17.918,3.276 18.801,4.238 19.762 C 5.199 20.724,6.082 21.357,7.220 21.903 C 10.967 23.699,15.288 23.270,18.637 20.770 C 19.246 20.316,20.316 19.246,20.770 18.637 C 23.744 14.652,23.744 9.348,20.770 5.363 C 20.316 4.755,19.247 3.686,18.640 3.235 C 17.045 2.049,15.365 1.360,13.423 1.096 C 13.000 1.038,11.574 0.990,11.280 1.023 M13.320 3.101 C 15.883 3.488,18.124 4.931,19.560 7.120 C 19.863 7.583,20.303 8.479,20.492 9.020 C 20.838 10.013,20.977 10.865,20.977 12.000 C 20.977 13.493,20.720 14.621,20.080 15.940 C 19.375 17.394,18.311 18.607,16.927 19.532 C 16.138 20.060,14.876 20.588,13.908 20.797 C 11.266 21.366,8.479 20.708,6.370 19.019 C 4.857 17.807,3.722 16.029,3.267 14.160 C 3.081 13.397,3.023 12.888,3.023 12.000 C 3.023 10.507,3.280 9.379,3.920 8.060 C 4.971 5.891,6.877 4.221,9.160 3.466 C 9.865 3.233,10.432 3.118,11.340 3.024 C 11.662 2.991,12.911 3.039,13.320 3.101 M11.695 7.057 C 11.466 7.129,11.256 7.299,11.128 7.516 C 11.036 7.672,11.020 7.746,11.020 8.003 C 11.020 8.271,11.034 8.329,11.141 8.503 C 11.446 8.999,12.077 9.144,12.548 8.828 C 12.654 8.756,12.791 8.613,12.859 8.503 C 12.966 8.329,12.980 8.271,12.980 8.003 C 12.980 7.746,12.964 7.672,12.872 7.516 C 12.628 7.101,12.150 6.915,11.695 7.057 M7.695 11.057 C 7.466 11.129,7.256 11.299,7.128 11.516 C 7.037 11.672,7.020 11.746,7.020 12.000 C 7.020 12.256,7.036 12.328,7.131 12.489 C 7.256 12.702,7.449 12.864,7.670 12.943 C 7.892 13.022,16.108 13.022,16.330 12.943 C 16.551 12.864,16.744 12.702,16.869 12.489 C 16.964 12.328,16.980 12.256,16.980 12.000 C 16.980 11.746,16.963 11.672,16.872 11.516 C 16.740 11.293,16.533 11.128,16.290 11.055 C 16.029 10.976,7.946 10.979,7.695 11.057 M11.695 15.057 C 11.466 15.129,11.256 15.299,11.128 15.516 C 11.036 15.672,11.020 15.746,11.020 16.003 C 11.020 16.271,11.034 16.329,11.141 16.503 C 11.543 17.156,12.457 17.156,12.859 16.503 C 12.966 16.329,12.980 16.271,12.980 16.003 C 12.980 15.746,12.964 15.672,12.872 15.516 C 12.628 15.101,12.150 14.915,11.695 15.057 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const DivideCircle = /*@__PURE__*/ forwardRef<ComponentInternals, DivideCircleProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    