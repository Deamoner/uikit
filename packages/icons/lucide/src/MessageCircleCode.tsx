
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type MessageCircleCodeProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-message-circle-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.860 2.063 C 8.276 2.375,5.998 3.611,4.301 5.620 C 3.667 6.371,2.955 7.611,2.624 8.540 C 2.178 9.793,1.964 11.123,2.015 12.315 C 2.070 13.586,2.332 14.793,2.782 15.844 L 2.921 16.168 1.975 18.954 C 1.455 20.486,1.021 21.816,1.010 21.910 C 0.966 22.275,1.172 22.670,1.508 22.867 C 1.670 22.962,1.744 22.980,1.980 22.979 C 2.239 22.978,2.466 22.908,5.045 22.028 L 7.831 21.079 8.156 21.218 C 8.880 21.528,9.900 21.801,10.800 21.926 C 11.345 22.001,12.786 21.991,13.332 21.907 C 15.342 21.600,17.049 20.836,18.500 19.591 C 20.471 17.902,21.703 15.536,21.963 12.943 C 22.029 12.284,21.990 11.040,21.885 10.418 C 21.525 8.301,20.636 6.541,19.162 5.026 C 17.478 3.295,15.362 2.283,12.926 2.041 C 12.377 1.987,11.406 1.997,10.860 2.063 M12.982 4.063 C 14.809 4.302,16.380 5.070,17.655 6.345 C 19.639 8.328,20.424 11.146,19.766 13.920 C 19.433 15.322,18.593 16.757,17.495 17.797 C 16.315 18.915,14.992 19.574,13.300 19.887 C 12.665 20.004,11.475 20.014,10.840 19.907 C 9.998 19.765,9.260 19.535,8.500 19.178 C 8.226 19.049,8.140 19.027,7.900 19.027 C 7.642 19.027,7.464 19.080,5.620 19.710 C 4.521 20.086,3.617 20.390,3.613 20.386 C 3.608 20.382,3.913 19.479,4.289 18.379 C 5.109 15.982,5.093 16.076,4.784 15.400 C 4.178 14.079,3.948 12.874,4.040 11.502 C 4.171 9.545,4.908 7.861,6.245 6.461 C 7.973 4.652,10.530 3.741,12.982 4.063 M9.640 9.069 C 9.492 9.121,9.265 9.325,8.347 10.236 C 7.734 10.843,7.185 11.421,7.127 11.520 C 7.037 11.672,7.020 11.747,7.020 12.000 C 7.020 12.254,7.036 12.328,7.127 12.480 C 7.260 12.703,9.367 14.803,9.560 14.905 C 9.659 14.957,9.787 14.979,10.000 14.979 C 10.258 14.980,10.327 14.964,10.492 14.867 C 10.714 14.737,10.901 14.498,10.965 14.264 C 11.019 14.061,10.989 13.733,10.899 13.555 C 10.861 13.481,10.514 13.101,10.127 12.710 L 9.423 12.000 10.127 11.290 C 10.514 10.900,10.864 10.517,10.904 10.440 C 10.957 10.340,10.979 10.213,10.979 10.000 C 10.980 9.745,10.964 9.672,10.872 9.516 C 10.617 9.083,10.120 8.902,9.640 9.069 M13.670 9.061 C 13.448 9.142,13.250 9.309,13.128 9.516 C 13.036 9.672,13.020 9.745,13.021 10.000 C 13.021 10.213,13.043 10.340,13.096 10.440 C 13.136 10.517,13.486 10.900,13.873 11.290 L 14.577 12.000 13.873 12.710 C 13.486 13.101,13.139 13.481,13.101 13.555 C 12.872 14.008,13.056 14.601,13.508 14.867 C 13.673 14.964,13.742 14.980,14.000 14.979 C 14.213 14.979,14.341 14.957,14.440 14.905 C 14.633 14.803,16.740 12.703,16.873 12.480 C 16.964 12.328,16.980 12.254,16.980 12.000 C 16.980 11.747,16.963 11.672,16.873 11.520 C 16.815 11.421,16.266 10.843,15.653 10.236 C 14.680 9.271,14.515 9.124,14.343 9.066 C 14.108 8.987,13.875 8.985,13.670 9.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const MessageCircleCode = /*@__PURE__*/ forwardRef<ComponentInternals, MessageCircleCodeProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    