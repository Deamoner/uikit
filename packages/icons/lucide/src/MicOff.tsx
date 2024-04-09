
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type MicOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-mic-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.036 1.672,1.020 1.745,1.021 2.000 C 1.021 2.212,1.043 2.341,1.095 2.440 C 1.135 2.517,2.704 4.119,4.582 6.000 L 7.995 9.420 8.011 11.040 C 8.025 12.574,8.031 12.677,8.116 12.979 C 8.321 13.707,8.690 14.343,9.195 14.840 C 10.413 16.039,12.238 16.336,13.766 15.583 L 14.033 15.452 14.781 16.201 L 15.529 16.949 15.394 17.050 C 14.588 17.657,12.913 18.183,12.240 18.040 C 12.052 18.000,11.955 18.000,11.751 18.041 C 11.148 18.161,9.840 17.793,8.906 17.241 C 7.730 16.547,6.730 15.295,6.302 13.983 C 6.055 13.224,6.029 12.993,6.004 11.280 L 5.980 9.700 5.871 9.514 C 5.479 8.848,4.521 8.848,4.129 9.514 L 4.020 9.700 4.008 11.100 C 3.992 12.979,4.060 13.587,4.404 14.620 C 5.266 17.210,7.393 19.182,10.058 19.859 C 10.345 19.932,10.673 20.004,10.788 20.019 L 10.995 20.047 11.008 21.177 L 11.020 22.307 11.141 22.503 C 11.543 23.156,12.457 23.156,12.859 22.503 L 12.980 22.307 12.992 21.176 L 13.005 20.046 13.172 20.020 C 14.453 19.817,15.764 19.278,16.717 18.563 C 16.837 18.473,16.945 18.400,16.957 18.400 C 16.970 18.400,17.961 19.382,19.160 20.583 C 20.363 21.787,21.421 22.813,21.520 22.873 C 21.673 22.964,21.746 22.980,22.000 22.980 C 22.257 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M11.611 1.045 C 10.746 1.122,9.793 1.569,9.173 2.188 C 8.727 2.635,8.374 3.209,8.333 3.557 C 8.240 4.344,9.098 4.923,9.793 4.541 C 9.966 4.446,10.046 4.362,10.229 4.084 C 10.590 3.536,10.941 3.252,11.440 3.104 C 11.719 3.021,12.281 3.021,12.563 3.104 C 13.242 3.303,13.795 3.899,13.941 4.589 C 13.987 4.806,13.999 5.323,14.000 7.200 L 14.001 9.540 14.095 9.740 C 14.276 10.122,14.595 10.328,15.003 10.328 C 15.292 10.328,15.536 10.221,15.724 10.013 C 16.015 9.690,16.005 9.799,15.990 6.939 C 15.977 4.408,15.976 4.376,15.884 4.040 C 15.684 3.306,15.311 2.676,14.765 2.150 C 13.911 1.326,12.807 0.940,11.611 1.045 M18.695 9.057 C 18.466 9.129,18.256 9.299,18.128 9.516 L 18.020 9.700 17.996 11.140 C 17.983 11.932,17.950 12.751,17.922 12.960 C 17.874 13.319,17.876 13.353,17.957 13.566 C 18.069 13.861,18.311 14.088,18.617 14.184 C 18.813 14.246,18.875 14.249,19.072 14.208 C 19.352 14.149,19.584 13.988,19.734 13.748 C 19.936 13.426,19.977 13.004,19.979 11.240 L 19.980 9.700 19.872 9.516 C 19.628 9.101,19.150 8.915,18.695 9.057 M12.471 13.942 C 12.458 13.956,12.305 13.977,12.133 13.989 C 11.560 14.028,11.020 13.826,10.618 13.423 C 10.180 12.984,10.041 12.638,10.012 11.920 L 9.992 11.420 11.244 12.668 C 11.933 13.355,12.485 13.928,12.471 13.942 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const MicOff = /*@__PURE__*/ forwardRef<ComponentInternals, MicOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    