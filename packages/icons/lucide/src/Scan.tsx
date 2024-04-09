
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type ScanProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-scan" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.383 2.230,2.461 3.048,2.114 4.160 C 2.023 4.451,2.020 4.503,2.020 5.883 L 2.020 7.306 2.141 7.503 C 2.543 8.156,3.457 8.156,3.859 7.503 L 3.980 7.307 4.000 6.023 C 4.023 4.581,4.025 4.571,4.321 4.283 C 4.592 4.021,4.716 4.000,6.037 3.998 C 7.266 3.996,7.356 3.984,7.619 3.783 C 7.696 3.725,7.808 3.592,7.869 3.489 C 7.964 3.328,7.980 3.256,7.980 3.000 C 7.980 2.746,7.963 2.672,7.872 2.516 C 7.813 2.415,7.698 2.282,7.618 2.221 C 7.350 2.016,7.216 2.000,5.904 2.005 C 5.242 2.007,4.609 2.025,4.499 2.043 M16.695 2.055 C 16.464 2.130,16.255 2.300,16.128 2.516 C 16.037 2.672,16.020 2.746,16.020 3.000 C 16.020 3.256,16.036 3.328,16.131 3.489 C 16.192 3.592,16.304 3.725,16.381 3.783 C 16.644 3.984,16.734 3.996,17.963 3.998 C 19.284 4.000,19.408 4.021,19.679 4.283 C 19.975 4.571,19.977 4.581,20.000 6.023 L 20.020 7.307 20.141 7.503 C 20.543 8.156,21.457 8.156,21.859 7.503 L 21.980 7.306 21.980 5.883 C 21.980 4.503,21.977 4.451,21.886 4.160 C 21.581 3.181,20.825 2.421,19.861 2.124 C 19.551 2.028,19.495 2.025,18.200 2.014 C 17.166 2.005,16.822 2.014,16.695 2.055 M2.695 16.057 C 2.466 16.129,2.256 16.299,2.128 16.516 L 2.020 16.700 2.020 18.120 C 2.020 19.497,2.023 19.549,2.114 19.840 C 2.419 20.817,3.158 21.563,4.140 21.884 C 4.404 21.970,4.495 21.976,5.764 21.991 C 6.647 22.001,7.163 21.992,7.268 21.963 C 7.498 21.901,7.737 21.713,7.867 21.492 C 7.964 21.327,7.980 21.257,7.980 21.000 C 7.980 20.746,7.963 20.672,7.872 20.516 C 7.761 20.327,7.569 20.156,7.373 20.071 C 7.296 20.038,6.854 20.016,5.980 20.001 L 4.700 19.980 4.516 19.872 C 4.327 19.761,4.157 19.570,4.071 19.373 C 4.037 19.295,4.015 18.865,4.001 17.980 L 3.980 16.700 3.872 16.516 C 3.628 16.101,3.150 15.915,2.695 16.057 M20.695 16.057 C 20.466 16.129,20.256 16.299,20.128 16.516 L 20.020 16.700 19.999 17.980 C 19.984 18.854,19.962 19.296,19.929 19.373 C 19.844 19.569,19.673 19.761,19.484 19.872 L 19.300 19.980 18.020 20.001 C 17.146 20.016,16.704 20.038,16.627 20.071 C 16.431 20.156,16.239 20.327,16.128 20.516 C 16.037 20.672,16.020 20.746,16.020 21.000 C 16.020 21.257,16.036 21.327,16.133 21.492 C 16.263 21.713,16.502 21.901,16.732 21.963 C 16.837 21.992,17.353 22.001,18.236 21.991 C 19.505 21.976,19.596 21.970,19.860 21.884 C 20.842 21.563,21.581 20.817,21.886 19.840 C 21.977 19.549,21.980 19.497,21.980 18.120 L 21.980 16.700 21.872 16.516 C 21.628 16.101,21.150 15.915,20.695 16.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Scan = /*@__PURE__*/ forwardRef<ComponentInternals, ScanProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    