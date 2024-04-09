
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type MagnetProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-magnet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.460 1.263 C 11.654 1.392,10.123 1.944,8.720 2.971 C 8.432 3.182,7.477 4.110,4.787 6.795 C 2.751 8.827,1.189 10.417,1.127 10.520 C 1.036 10.672,1.020 10.746,1.020 11.000 C 1.020 11.254,1.036 11.328,1.127 11.480 C 1.261 11.705,5.368 15.805,5.560 15.905 C 5.756 16.007,6.247 16.007,6.440 15.904 C 6.517 15.863,8.032 14.383,9.807 12.617 C 11.899 10.534,13.094 9.373,13.207 9.313 C 13.443 9.188,13.900 9.185,14.160 9.305 C 14.385 9.410,14.612 9.638,14.726 9.872 C 14.848 10.124,14.846 10.548,14.722 10.809 C 14.652 10.956,13.926 11.697,11.433 14.167 C 9.501 16.081,8.192 17.408,8.127 17.518 C 8.037 17.672,8.020 17.747,8.020 18.000 C 8.020 18.254,8.036 18.328,8.127 18.480 C 8.261 18.705,12.368 22.805,12.560 22.905 C 12.659 22.957,12.788 22.979,13.000 22.979 C 13.256 22.980,13.327 22.964,13.486 22.871 C 13.692 22.750,20.495 15.918,20.846 15.480 C 21.808 14.278,22.461 12.707,22.678 11.067 C 22.749 10.538,22.730 9.369,22.641 8.767 C 22.076 4.928,19.062 1.907,15.234 1.344 C 14.814 1.282,13.826 1.237,13.460 1.263 M15.172 3.364 C 17.934 3.861,20.097 6.037,20.627 8.851 C 20.726 9.377,20.726 10.718,20.627 11.220 C 20.378 12.481,19.906 13.481,19.116 14.420 C 18.968 14.596,18.206 15.379,17.423 16.160 L 16.000 17.580 14.710 16.287 L 13.420 14.995 14.824 13.607 C 16.331 12.119,16.420 12.011,16.642 11.402 C 16.887 10.730,16.889 9.970,16.647 9.287 C 16.500 8.870,16.320 8.575,16.002 8.231 C 15.342 7.515,14.449 7.152,13.500 7.214 C 13.022 7.246,12.737 7.323,12.280 7.546 L 11.900 7.731 10.459 9.165 L 9.018 10.599 7.722 9.302 L 6.426 8.005 7.409 6.993 C 8.758 5.602,9.480 4.903,9.871 4.611 C 11.381 3.478,13.300 3.027,15.172 3.364 M6.300 10.720 L 7.580 12.000 6.790 12.790 L 6.000 13.580 4.710 12.290 L 3.420 11.000 4.200 10.220 C 4.629 9.791,4.989 9.440,5.000 9.440 C 5.011 9.440,5.596 10.016,6.300 10.720 M13.300 17.720 L 14.580 19.000 13.790 19.790 L 13.000 20.580 11.710 19.290 L 10.420 18.000 11.200 17.220 C 11.629 16.791,11.989 16.440,12.000 16.440 C 12.011 16.440,12.596 17.016,13.300 17.720 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Magnet = /*@__PURE__*/ forwardRef<ComponentInternals, MagnetProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    