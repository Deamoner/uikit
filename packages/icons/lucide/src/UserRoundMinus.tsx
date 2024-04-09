
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type UserRoundMinusProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-user-round-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.380 2.043 C 6.784 2.299,4.681 4.215,4.114 6.840 C 3.984 7.446,3.984 8.554,4.114 9.160 C 4.406 10.511,5.075 11.656,6.097 12.551 C 6.228 12.665,6.327 12.765,6.317 12.773 C 6.308 12.780,6.102 12.890,5.860 13.017 C 4.707 13.621,3.770 14.386,2.992 15.360 C 2.142 16.424,1.511 17.726,1.224 19.006 C 1.082 19.641,0.989 20.466,1.007 20.924 C 1.021 21.269,1.035 21.331,1.142 21.505 C 1.541 22.152,2.458 22.155,2.854 21.511 C 2.961 21.337,2.973 21.278,3.005 20.771 C 3.075 19.674,3.264 18.888,3.658 18.060 C 4.389 16.522,5.437 15.454,6.940 14.717 C 8.181 14.108,9.464 13.891,10.827 14.060 C 12.228 14.233,13.384 14.733,14.515 15.654 C 14.865 15.939,15.091 16.024,15.398 15.988 C 15.948 15.923,16.319 15.465,16.272 14.911 C 16.262 14.795,16.221 14.630,16.180 14.545 C 16.032 14.235,14.954 13.429,14.113 13.000 C 13.886 12.884,13.692 12.782,13.683 12.774 C 13.674 12.766,13.781 12.656,13.922 12.530 C 14.976 11.581,15.593 10.523,15.885 9.160 C 16.015 8.554,16.015 7.446,15.885 6.840 C 15.626 5.631,15.109 4.660,14.269 3.805 C 12.978 2.490,11.230 1.860,9.380 2.043 M10.605 4.058 C 12.074 4.280,13.310 5.324,13.797 6.755 C 13.897 7.050,14.000 7.680,14.000 8.000 C 14.000 8.322,13.897 8.951,13.796 9.245 C 13.321 10.632,12.195 11.628,10.773 11.917 C 8.563 12.368,6.396 10.845,6.058 8.605 C 5.986 8.121,5.986 7.879,6.058 7.395 C 6.314 5.698,7.675 4.324,9.358 4.061 C 9.816 3.990,10.144 3.989,10.605 4.058 M15.695 18.057 C 15.466 18.129,15.256 18.299,15.128 18.516 C 15.037 18.672,15.020 18.746,15.020 19.000 C 15.020 19.256,15.036 19.328,15.131 19.489 C 15.256 19.702,15.449 19.864,15.670 19.943 C 15.891 20.022,22.109 20.022,22.330 19.943 C 22.551 19.864,22.744 19.702,22.869 19.489 C 22.964 19.328,22.980 19.256,22.980 19.000 C 22.980 18.746,22.963 18.672,22.872 18.516 C 22.740 18.293,22.533 18.128,22.290 18.055 C 22.030 17.977,15.945 17.979,15.695 18.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const UserRoundMinus = /*@__PURE__*/ forwardRef<ComponentInternals, UserRoundMinusProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    