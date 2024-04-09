
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TrophyProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-trophy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.695 1.057 C 5.466 1.129,5.256 1.299,5.128 1.516 C 5.025 1.692,5.019 1.728,5.007 2.344 L 4.993 2.989 4.467 3.011 C 3.883 3.036,3.494 3.120,3.062 3.316 C 2.123 3.742,1.445 4.527,1.133 5.548 C 1.038 5.863,1.026 5.963,1.026 6.500 C 1.026 7.037,1.038 7.137,1.133 7.452 C 1.501 8.657,2.353 9.509,3.548 9.864 C 3.832 9.948,4.014 9.972,4.487 9.989 L 5.075 10.011 5.101 10.175 C 5.192 10.749,5.459 11.561,5.737 12.114 C 6.405 13.441,7.519 14.571,8.798 15.219 L 9.000 15.321 9.000 16.174 C 9.000 17.165,9.038 17.073,8.500 17.362 C 7.648 17.818,7.069 18.426,6.601 19.357 C 6.420 19.718,6.204 20.344,6.120 20.750 L 6.069 21.000 4.981 21.000 C 3.794 21.000,3.645 21.021,3.382 21.221 C 3.302 21.282,3.187 21.415,3.128 21.516 C 3.037 21.672,3.020 21.746,3.020 22.000 C 3.020 22.256,3.036 22.328,3.131 22.489 C 3.256 22.702,3.449 22.864,3.670 22.943 C 3.893 23.022,20.107 23.022,20.330 22.943 C 20.551 22.864,20.744 22.702,20.869 22.489 C 20.964 22.328,20.980 22.256,20.980 22.000 C 20.980 21.746,20.963 21.672,20.872 21.516 C 20.813 21.415,20.698 21.282,20.618 21.221 C 20.355 21.021,20.206 21.000,19.019 21.000 L 17.931 21.000 17.880 20.750 C 17.800 20.361,17.583 19.723,17.419 19.397 C 16.938 18.437,16.357 17.821,15.500 17.362 C 14.962 17.073,15.000 17.165,15.000 16.174 L 15.000 15.321 15.202 15.219 C 16.278 14.674,17.316 13.712,17.954 12.669 C 18.409 11.926,18.774 10.961,18.900 10.170 L 18.927 10.000 19.354 10.000 C 20.445 9.999,21.238 9.683,21.960 8.960 C 22.516 8.404,22.836 7.786,22.959 7.031 C 23.200 5.545,22.397 4.026,21.018 3.357 C 20.549 3.130,20.153 3.037,19.533 3.011 L 19.007 2.989 18.993 2.344 C 18.981 1.728,18.975 1.692,18.872 1.516 C 18.740 1.293,18.533 1.128,18.290 1.055 C 18.028 0.976,5.947 0.978,5.695 1.057 M17.000 6.082 C 17.000 9.243,16.983 9.670,16.839 10.240 C 16.491 11.612,15.498 12.841,14.232 13.467 C 13.487 13.835,12.857 13.980,12.000 13.980 C 11.142 13.980,10.513 13.835,9.765 13.465 C 8.497 12.838,7.514 11.620,7.162 10.240 C 7.017 9.672,7.000 9.245,7.000 6.082 L 7.000 3.000 12.000 3.000 L 17.000 3.000 17.000 6.082 M5.000 6.504 L 5.000 8.009 4.570 7.993 C 4.046 7.974,3.771 7.866,3.453 7.552 C 3.143 7.248,3.024 6.955,3.024 6.500 C 3.023 6.191,3.039 6.106,3.134 5.900 C 3.328 5.477,3.755 5.124,4.174 5.042 C 4.265 5.024,4.489 5.007,4.670 5.004 L 5.000 5.000 5.000 6.504 M20.105 5.137 C 20.416 5.279,20.725 5.587,20.865 5.896 C 20.960 6.104,20.976 6.192,20.976 6.500 C 20.977 6.809,20.961 6.894,20.866 7.100 C 20.721 7.416,20.414 7.724,20.104 7.866 C 19.897 7.960,19.794 7.979,19.430 7.993 L 19.000 8.009 19.000 6.499 L 19.000 4.989 19.435 5.009 C 19.794 5.026,19.912 5.049,20.105 5.137 M12.000 15.980 C 12.363 15.980,12.737 15.966,12.830 15.950 L 13.000 15.919 13.000 16.571 C 13.000 17.281,13.042 17.528,13.225 17.891 C 13.469 18.376,13.863 18.752,14.454 19.066 C 15.157 19.439,15.571 19.983,15.858 20.910 L 15.885 21.000 12.000 21.000 L 8.115 21.000 8.142 20.910 C 8.428 19.984,8.843 19.439,9.545 19.066 C 10.160 18.740,10.583 18.321,10.810 17.814 C 10.965 17.469,11.000 17.236,11.000 16.534 L 11.000 15.919 11.170 15.950 C 11.263 15.966,11.637 15.980,12.000 15.980 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Trophy = /*@__PURE__*/ forwardRef<ComponentInternals, TrophyProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    