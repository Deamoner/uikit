
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type RatProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-rat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.438 1.041 C 11.095 1.369,9.604 3.544,10.102 5.908 C 10.133 6.053,10.163 6.039,9.640 6.120 C 9.162 6.193,8.456 6.392,7.980 6.586 C 5.359 7.655,3.576 9.900,3.094 12.740 C 2.996 13.319,2.995 14.505,3.093 14.959 C 3.232 15.606,3.468 16.177,3.821 16.725 L 3.992 16.990 3.710 17.018 C 2.496 17.138,1.484 17.973,1.114 19.160 C 0.979 19.594,0.979 20.406,1.114 20.840 C 1.417 21.815,2.149 22.553,3.140 22.886 L 3.420 22.980 8.272 22.991 C 11.491 22.998,13.175 22.988,13.276 22.961 C 13.498 22.901,13.739 22.710,13.867 22.492 C 13.964 22.327,13.980 22.257,13.980 22.000 C 13.980 21.746,13.963 21.672,13.872 21.516 C 13.761 21.328,13.572 21.158,13.373 21.070 C 13.285 21.031,12.184 21.015,8.480 21.000 L 3.700 20.980 3.516 20.872 C 2.935 20.530,2.833 19.774,3.303 19.303 C 3.629 18.977,3.122 19.000,10.037 18.998 C 15.064 18.997,16.207 18.987,16.330 18.943 C 16.551 18.864,16.744 18.702,16.869 18.489 C 16.964 18.328,16.980 18.256,16.980 18.000 C 16.980 17.746,16.963 17.672,16.872 17.516 C 16.626 17.098,16.360 17.000,15.469 17.000 C 14.945 17.000,14.835 16.990,14.853 16.945 C 14.871 16.896,14.926 16.521,15.041 15.645 C 15.146 14.852,15.783 14.189,16.577 14.043 C 17.002 13.966,17.310 13.990,18.005 14.157 C 20.185 14.681,20.769 14.718,21.517 14.375 C 22.227 14.049,22.688 13.487,22.863 12.733 C 22.937 12.415,22.882 11.756,22.752 11.407 C 22.706 11.282,22.418 10.742,22.112 10.207 C 21.806 9.672,21.536 9.192,21.512 9.139 C 21.473 9.053,21.491 9.022,21.709 8.808 C 22.164 8.360,22.469 7.876,22.680 7.268 C 23.371 5.272,22.462 3.159,20.555 2.333 C 19.966 2.078,19.699 2.027,18.940 2.024 C 18.182 2.022,17.810 2.091,17.345 2.322 L 17.109 2.439 16.853 2.181 C 16.140 1.460,15.203 1.056,14.160 1.020 C 13.907 1.012,13.582 1.021,13.438 1.041 M14.680 3.106 C 14.985 3.206,15.345 3.462,15.568 3.738 C 15.814 4.043,15.951 4.425,15.998 4.935 C 16.042 5.408,16.154 5.627,16.452 5.828 C 16.923 6.144,17.554 5.998,17.859 5.503 C 17.978 5.309,17.980 5.297,17.980 4.765 L 17.980 4.225 18.200 4.126 C 18.497 3.990,19.114 3.958,19.462 4.059 C 20.129 4.253,20.571 4.648,20.793 5.248 C 21.131 6.160,20.716 7.262,19.871 7.700 C 19.350 7.970,19.214 8.120,19.123 8.525 C 19.052 8.843,19.119 8.995,20.023 10.579 C 20.776 11.899,20.880 12.102,20.880 12.254 C 20.880 12.714,20.481 12.701,18.320 12.174 L 17.580 11.993 16.980 12.014 C 15.820 12.054,14.947 12.403,14.196 13.126 L 13.971 13.342 13.704 13.094 C 13.023 12.461,12.167 12.086,11.247 12.016 C 10.795 11.982,10.556 12.053,10.306 12.296 C 9.762 12.825,10.003 13.774,10.728 13.951 C 10.823 13.974,11.050 14.012,11.233 14.035 C 11.687 14.093,12.023 14.261,12.364 14.599 C 12.959 15.189,13.115 15.985,12.794 16.792 L 12.709 17.004 10.065 16.992 L 7.420 16.979 7.113 16.875 C 6.607 16.703,6.297 16.505,5.900 16.104 C 5.165 15.360,4.937 14.681,5.034 13.522 C 5.181 11.774,5.999 10.254,7.340 9.241 C 8.507 8.359,9.681 8.001,11.405 8.000 C 12.000 8.000,12.180 7.960,12.423 7.775 C 12.719 7.550,12.864 7.104,12.763 6.732 C 12.738 6.639,12.655 6.486,12.579 6.392 C 12.054 5.744,11.916 5.275,12.043 4.577 C 12.179 3.835,12.805 3.194,13.540 3.044 C 13.818 2.988,14.417 3.020,14.680 3.106 M15.695 8.055 C 15.464 8.130,15.255 8.300,15.128 8.516 C 15.037 8.672,15.020 8.746,15.020 9.000 C 15.020 9.257,15.036 9.327,15.133 9.492 C 15.651 10.374,16.998 10.018,16.998 9.000 C 16.998 8.623,16.792 8.281,16.463 8.112 C 16.265 8.010,15.911 7.984,15.695 8.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Rat = /*@__PURE__*/ forwardRef<ComponentInternals, RatProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    