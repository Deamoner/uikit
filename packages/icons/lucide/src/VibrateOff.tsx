
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type VibrateOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-vibrate-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.037 1.672,1.020 1.746,1.020 2.000 C 1.020 2.254,1.036 2.327,1.127 2.480 C 1.188 2.581,2.495 3.919,4.117 5.540 L 7.000 8.420 7.000 13.341 C 7.000 17.634,7.008 18.293,7.061 18.499 C 7.237 19.172,7.797 19.739,8.471 19.926 C 8.721 19.995,8.945 20.000,11.971 20.000 C 15.569 20.000,15.542 20.002,15.986 19.735 C 16.425 19.472,16.781 19.035,16.906 18.607 L 16.969 18.390 19.194 20.611 C 20.418 21.832,21.483 22.865,21.560 22.905 C 21.659 22.957,21.788 22.979,22.000 22.979 C 22.258 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M10.400 4.037 C 9.954 4.173,9.672 4.546,9.672 5.000 C 9.672 5.405,9.879 5.724,10.260 5.905 L 10.460 5.999 12.730 6.000 L 15.000 6.000 15.000 8.270 L 15.001 10.540 15.095 10.740 C 15.276 11.121,15.595 11.328,16.000 11.328 C 16.405 11.328,16.724 11.121,16.905 10.740 L 16.999 10.540 17.000 8.139 C 17.000 5.923,16.994 5.718,16.926 5.471 C 16.785 4.964,16.399 4.482,15.929 4.228 C 15.527 4.011,15.396 4.001,12.840 4.004 C 11.553 4.006,10.455 4.021,10.400 4.037 M1.670 7.061 C 1.448 7.142,1.250 7.309,1.128 7.516 C 1.036 7.672,1.020 7.745,1.021 8.000 C 1.021 8.213,1.043 8.340,1.096 8.440 C 1.136 8.517,1.486 8.900,1.873 9.290 L 2.577 10.000 1.873 10.710 C 1.486 11.101,1.136 11.483,1.096 11.560 C 1.043 11.660,1.022 11.785,1.022 12.000 C 1.022 12.215,1.043 12.340,1.096 12.440 C 1.136 12.517,1.486 12.900,1.873 13.290 L 2.577 14.000 1.873 14.710 C 1.486 15.101,1.139 15.481,1.101 15.555 C 0.872 16.008,1.056 16.601,1.508 16.867 C 1.673 16.964,1.743 16.980,2.000 16.980 C 2.254 16.980,2.328 16.964,2.480 16.873 C 2.703 16.740,4.803 14.633,4.905 14.440 C 5.007 14.246,5.007 13.754,4.904 13.560 C 4.864 13.483,4.514 13.101,4.127 12.710 L 3.423 12.000 4.127 11.290 C 4.514 10.900,4.864 10.517,4.904 10.440 C 4.957 10.340,4.979 10.213,4.979 10.000 C 4.980 9.746,4.964 9.672,4.873 9.520 C 4.815 9.421,4.266 8.843,3.653 8.236 C 2.680 7.271,2.515 7.124,2.343 7.066 C 2.108 6.987,1.875 6.985,1.670 7.061 M21.640 7.069 C 21.492 7.121,21.265 7.325,20.347 8.236 C 19.734 8.843,19.185 9.421,19.127 9.520 C 19.036 9.672,19.020 9.746,19.021 10.000 C 19.021 10.213,19.043 10.340,19.096 10.440 C 19.136 10.517,19.486 10.900,19.873 11.290 L 20.577 12.000 19.873 12.710 C 19.486 13.101,19.136 13.483,19.096 13.560 C 18.993 13.754,18.993 14.246,19.095 14.440 C 19.197 14.633,21.297 16.740,21.520 16.873 C 21.672 16.964,21.746 16.980,22.000 16.980 C 22.257 16.980,22.327 16.964,22.492 16.867 C 22.714 16.737,22.901 16.498,22.965 16.264 C 23.019 16.061,22.989 15.733,22.899 15.555 C 22.861 15.481,22.514 15.101,22.127 14.710 L 21.423 14.000 22.127 13.290 C 22.514 12.900,22.864 12.517,22.904 12.440 C 22.957 12.340,22.978 12.215,22.978 12.000 C 22.978 11.785,22.957 11.660,22.904 11.560 C 22.864 11.483,22.514 11.101,22.127 10.710 L 21.423 10.000 22.127 9.290 C 22.514 8.900,22.864 8.517,22.904 8.440 C 22.957 8.340,22.979 8.213,22.979 8.000 C 22.980 7.745,22.964 7.672,22.872 7.516 C 22.617 7.083,22.120 6.902,21.640 7.069 M15.000 17.210 L 15.000 18.000 12.000 18.000 L 9.000 18.000 9.000 14.210 L 9.000 10.420 12.000 13.420 L 15.000 16.420 15.000 17.210 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const VibrateOff = /*@__PURE__*/ forwardRef<ComponentInternals, VibrateOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    