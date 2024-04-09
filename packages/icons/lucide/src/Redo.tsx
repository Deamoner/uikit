
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type RedoProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-redo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.695 6.057 C 20.466 6.129,20.256 6.299,20.128 6.516 L 20.020 6.700 20.009 8.710 C 20.002 9.816,19.988 10.720,19.977 10.720 C 19.966 10.720,19.629 10.424,19.228 10.062 C 18.827 9.700,18.349 9.287,18.167 9.143 C 15.915 7.369,12.995 6.652,10.154 7.178 C 8.590 7.467,7.118 8.136,5.800 9.154 C 5.005 9.769,4.015 10.884,3.470 11.780 C 2.550 13.291,1.993 15.208,2.002 16.834 C 2.004 17.367,2.146 17.654,2.511 17.869 C 2.673 17.964,2.744 17.980,3.003 17.980 C 3.271 17.980,3.329 17.966,3.503 17.859 C 3.743 17.711,3.948 17.420,3.975 17.189 C 3.986 17.096,4.013 16.759,4.035 16.440 C 4.111 15.356,4.354 14.441,4.816 13.500 C 6.459 10.156,10.111 8.398,13.740 9.204 C 14.456 9.363,15.229 9.657,15.860 10.010 C 16.550 10.396,16.911 10.668,17.836 11.499 L 18.372 11.980 16.556 12.000 C 15.227 12.015,14.710 12.033,14.627 12.070 C 14.428 12.158,14.239 12.328,14.128 12.516 C 14.037 12.672,14.020 12.746,14.020 13.000 C 14.020 13.256,14.036 13.328,14.131 13.489 C 14.256 13.702,14.449 13.864,14.670 13.943 C 14.790 13.986,15.451 13.997,18.020 13.998 L 21.220 13.999 21.420 13.906 C 21.657 13.796,21.845 13.595,21.936 13.354 C 21.996 13.196,22.001 12.874,21.991 9.940 L 21.980 6.700 21.872 6.516 C 21.628 6.101,21.150 5.915,20.695 6.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Redo = /*@__PURE__*/ forwardRef<ComponentInternals, RedoProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    