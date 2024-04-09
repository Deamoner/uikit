
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type WalletCardsProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-wallet-cards" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.452 4.103,19.571 4.178,19.697 4.303 C 19.955 4.561,20.000 4.743,20.000 5.530 C 20.000 6.116,19.995 6.164,19.930 6.145 C 19.514 6.020,19.493 6.020,12.000 6.020 C 4.507 6.020,4.486 6.020,4.070 6.145 C 4.005 6.164,4.000 6.116,4.000 5.530 C 4.000 4.743,4.045 4.561,4.304 4.303 C 4.421 4.185,4.552 4.100,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M19.310 8.061 C 19.452 8.103,19.571 8.178,19.697 8.303 C 19.948 8.554,20.000 8.751,20.000 9.447 L 20.000 10.000 18.963 10.000 C 18.392 10.000,17.786 10.019,17.615 10.043 C 16.991 10.130,16.228 10.444,15.751 10.811 C 15.496 11.007,14.862 11.532,14.202 12.093 C 13.455 12.728,12.973 12.945,12.219 12.988 C 11.395 13.035,10.656 12.770,10.026 12.201 C 9.913 12.099,9.613 11.846,9.360 11.639 C 9.107 11.433,8.779 11.151,8.632 11.014 C 8.156 10.572,7.668 10.307,7.000 10.129 C 6.639 10.033,6.556 10.027,5.310 10.010 L 4.000 9.992 4.000 9.443 C 4.000 8.751,4.052 8.554,4.304 8.303 C 4.421 8.185,4.552 8.100,4.673 8.063 C 4.964 7.974,19.009 7.971,19.310 8.061 M6.471 12.060 C 6.811 12.140,7.015 12.251,7.278 12.497 C 7.473 12.679,8.499 13.541,9.033 13.970 C 9.875 14.648,11.123 15.043,12.249 14.990 C 13.468 14.932,14.482 14.503,15.502 13.613 C 16.252 12.960,17.044 12.339,17.276 12.222 C 17.672 12.024,17.855 12.000,18.982 12.000 L 20.000 12.000 20.000 15.554 C 20.000 19.410,20.005 19.322,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.992 19.317,4.000 19.464,4.000 15.575 L 4.000 12.000 5.110 12.001 C 5.949 12.001,6.281 12.016,6.471 12.060 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const WalletCards = /*@__PURE__*/ forwardRef<ComponentInternals, WalletCardsProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    