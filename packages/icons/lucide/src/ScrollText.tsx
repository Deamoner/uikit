
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ScrollTextProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-scroll-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.043 C 2.380 2.232,1.461 3.048,1.114 4.160 C 1.021 4.457,1.020 4.479,1.020 6.380 L 1.020 8.300 1.131 8.489 C 1.192 8.592,1.304 8.725,1.381 8.783 C 1.654 8.991,1.700 8.996,3.409 8.998 L 4.998 9.000 5.009 14.290 L 5.020 19.580 5.114 19.860 C 5.446 20.851,6.184 21.582,7.160 21.886 L 7.460 21.980 14.000 21.980 L 20.540 21.980 20.840 21.886 C 21.827 21.578,22.578 20.827,22.886 19.840 C 22.977 19.549,22.980 19.497,22.980 18.120 L 22.980 16.700 22.872 16.516 C 22.813 16.415,22.698 16.282,22.618 16.221 C 22.356 16.022,22.203 16.000,21.055 16.000 L 20.002 16.000 19.991 10.210 L 19.980 4.420 19.886 4.140 C 19.556 3.158,18.821 2.425,17.861 2.121 L 17.540 2.020 10.620 2.014 C 6.814 2.011,3.609 2.024,3.499 2.043 M4.310 4.061 C 4.452 4.103,4.571 4.178,4.697 4.303 C 4.978 4.584,5.000 4.703,5.000 5.947 L 5.000 7.000 4.000 7.000 L 3.000 7.000 3.000 5.947 C 3.000 4.702,3.022 4.585,3.304 4.303 C 3.583 4.024,3.916 3.944,4.310 4.061 M17.310 4.061 C 17.589 4.144,17.856 4.411,17.939 4.690 C 17.992 4.869,18.000 5.593,18.000 10.447 L 18.000 16.000 13.946 16.000 C 9.547 16.000,9.680 15.994,9.382 16.221 C 9.302 16.282,9.187 16.415,9.128 16.516 L 9.020 16.700 8.999 17.980 C 8.984 18.854,8.962 19.296,8.929 19.373 C 8.844 19.569,8.673 19.761,8.484 19.872 C 8.328 19.963,8.254 19.980,8.000 19.980 C 7.746 19.980,7.672 19.963,7.516 19.872 C 7.328 19.761,7.158 19.572,7.070 19.373 C 7.031 19.284,7.016 17.658,7.000 11.840 C 6.981 4.925,6.975 4.406,6.910 4.220 C 6.872 4.110,6.841 4.016,6.840 4.010 C 6.840 4.005,9.150 4.000,11.973 4.000 C 16.451 4.000,17.132 4.008,17.310 4.061 M9.695 7.057 C 9.466 7.129,9.256 7.299,9.128 7.516 C 9.037 7.672,9.020 7.746,9.020 8.000 C 9.020 8.256,9.036 8.328,9.131 8.489 C 9.256 8.702,9.449 8.864,9.670 8.943 C 9.890 9.021,15.110 9.021,15.330 8.943 C 15.551 8.864,15.744 8.702,15.869 8.489 C 15.964 8.328,15.980 8.256,15.980 8.000 C 15.980 7.746,15.963 7.672,15.872 7.516 C 15.740 7.293,15.533 7.128,15.290 7.055 C 15.031 6.977,9.944 6.979,9.695 7.057 M9.695 11.057 C 9.466 11.129,9.256 11.299,9.128 11.516 C 9.037 11.672,9.020 11.746,9.020 12.000 C 9.020 12.256,9.036 12.328,9.131 12.489 C 9.256 12.702,9.449 12.864,9.670 12.943 C 9.890 13.021,15.110 13.021,15.330 12.943 C 15.551 12.864,15.744 12.702,15.869 12.489 C 15.964 12.328,15.980 12.256,15.980 12.000 C 15.980 11.746,15.963 11.672,15.872 11.516 C 15.740 11.293,15.533 11.128,15.290 11.055 C 15.031 10.977,9.944 10.979,9.695 11.057 M21.000 18.554 C 21.000 19.352,20.890 19.633,20.484 19.872 L 20.300 19.980 15.570 19.991 C 12.968 19.996,10.840 19.996,10.840 19.991 C 10.841 19.985,10.870 19.890,10.906 19.780 C 10.953 19.634,10.976 19.365,10.990 18.790 L 11.009 18.000 16.005 18.000 L 21.000 18.000 21.000 18.554 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const ScrollText = /*@__PURE__*/ forwardRef<ComponentInternals, ScrollTextProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    