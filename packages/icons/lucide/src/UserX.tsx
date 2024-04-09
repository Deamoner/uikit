
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type UserXProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-user-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.400 2.044 C 6.761 2.229,5.261 3.290,4.526 4.785 C 4.158 5.533,4.020 6.136,4.020 7.000 C 4.020 7.670,4.078 8.044,4.268 8.600 C 4.846 10.291,6.253 11.525,8.040 11.907 C 8.511 12.008,9.489 12.008,9.960 11.907 C 11.488 11.580,12.748 10.630,13.433 9.288 C 13.838 8.494,13.980 7.899,13.980 7.000 C 13.980 6.101,13.838 5.506,13.433 4.713 C 12.794 3.461,11.604 2.510,10.240 2.162 C 9.669 2.016,9.019 1.974,8.400 2.044 M9.861 4.129 C 10.804 4.405,11.584 5.183,11.875 6.139 C 11.958 6.412,11.973 6.542,11.973 7.000 C 11.973 7.458,11.958 7.588,11.875 7.861 C 11.582 8.822,10.819 9.581,9.840 9.886 C 9.406 10.021,8.594 10.021,8.160 9.886 C 7.181 9.581,6.418 8.822,6.125 7.861 C 6.042 7.588,6.027 7.458,6.027 7.000 C 6.027 6.542,6.042 6.412,6.125 6.139 C 6.456 5.054,7.371 4.245,8.499 4.040 C 8.832 3.980,9.500 4.023,9.861 4.129 M16.670 7.061 C 16.448 7.142,16.250 7.309,16.128 7.516 C 16.037 7.672,16.020 7.746,16.020 8.000 C 16.020 8.254,16.036 8.328,16.127 8.480 C 16.186 8.579,16.650 9.074,17.157 9.579 L 18.079 10.499 17.124 11.459 C 16.599 11.988,16.138 12.481,16.101 12.555 C 15.872 13.009,16.056 13.601,16.508 13.867 C 16.673 13.964,16.743 13.980,17.000 13.980 C 17.254 13.980,17.328 13.964,17.480 13.873 C 17.579 13.814,18.074 13.350,18.579 12.843 L 19.499 11.921 20.459 12.876 C 20.988 13.401,21.483 13.864,21.560 13.905 C 21.659 13.957,21.787 13.979,22.000 13.979 C 22.258 13.980,22.327 13.964,22.492 13.867 C 22.714 13.737,22.901 13.498,22.965 13.264 C 23.019 13.061,22.989 12.733,22.899 12.555 C 22.862 12.481,22.401 11.988,21.876 11.459 L 20.921 10.499 21.843 9.579 C 22.350 9.074,22.814 8.579,22.873 8.480 C 22.964 8.328,22.980 8.254,22.980 8.000 C 22.980 7.746,22.963 7.672,22.872 7.516 C 22.618 7.084,22.136 6.905,21.657 7.066 C 21.486 7.124,21.330 7.262,20.480 8.104 L 19.500 9.076 18.520 8.104 C 17.671 7.262,17.514 7.124,17.343 7.066 C 17.108 6.987,16.875 6.985,16.670 7.061 M5.400 14.044 C 3.761 14.229,2.261 15.290,1.526 16.785 C 1.333 17.177,1.187 17.599,1.093 18.040 C 1.030 18.334,1.020 18.579,1.020 19.843 L 1.020 21.306 1.141 21.503 C 1.543 22.156,2.457 22.156,2.859 21.503 L 2.980 21.307 3.004 19.883 C 3.030 18.292,3.041 18.218,3.320 17.660 C 3.690 16.923,4.393 16.337,5.178 16.112 L 5.500 16.020 9.000 16.020 L 12.500 16.020 12.822 16.112 C 13.785 16.388,14.580 17.173,14.876 18.139 C 14.969 18.446,14.975 18.522,14.997 19.883 L 15.020 21.307 15.141 21.503 C 15.543 22.156,16.457 22.156,16.859 21.503 L 16.980 21.306 16.980 19.843 C 16.980 18.579,16.970 18.334,16.907 18.040 C 16.625 16.721,15.863 15.576,14.800 14.874 C 14.046 14.375,13.396 14.135,12.552 14.043 C 12.087 13.992,5.853 13.993,5.400 14.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const UserX = /*@__PURE__*/ forwardRef<ComponentInternals, UserXProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    