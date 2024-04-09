
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DiamondProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-diamond" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.502 1.042 C 11.006 1.120,10.519 1.306,10.092 1.584 C 9.822 1.758,2.130 9.407,1.753 9.875 C 0.811 11.046,0.744 12.633,1.583 13.900 C 1.885 14.357,9.718 22.183,10.140 22.450 C 11.412 23.255,12.977 23.172,14.140 22.238 C 14.555 21.905,22.254 14.160,22.408 13.920 C 22.628 13.579,22.750 13.315,22.866 12.932 C 22.959 12.626,22.973 12.507,22.976 12.020 C 22.979 11.417,22.919 11.110,22.702 10.620 C 22.447 10.045,22.375 9.967,18.204 5.796 C 15.145 2.737,14.113 1.729,13.900 1.591 C 13.569 1.376,13.115 1.177,12.776 1.098 C 12.457 1.024,11.802 0.995,11.502 1.042 M12.261 3.044 C 12.391 3.068,12.570 3.123,12.659 3.168 C 12.884 3.279,20.722 11.119,20.834 11.344 C 21.027 11.733,21.029 12.265,20.838 12.648 C 20.779 12.767,19.551 14.023,16.846 16.733 C 14.698 18.885,12.863 20.700,12.769 20.765 C 12.523 20.938,12.235 21.013,11.900 20.991 C 11.351 20.956,11.614 21.191,7.233 16.812 C 3.926 13.506,3.227 12.789,3.133 12.604 C 3.034 12.407,3.020 12.337,3.021 12.020 C 3.022 11.364,2.700 11.733,7.173 7.253 C 9.956 4.465,11.191 3.254,11.326 3.181 C 11.631 3.014,11.895 2.976,12.261 3.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Diamond = /*@__PURE__*/ forwardRef<ComponentInternals, DiamondProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    