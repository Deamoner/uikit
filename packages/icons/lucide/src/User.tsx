
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type UserProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.400 2.044 C 9.761 2.229,8.261 3.290,7.526 4.785 C 7.158 5.533,7.020 6.136,7.020 7.000 C 7.020 7.670,7.078 8.044,7.268 8.600 C 7.846 10.291,9.253 11.525,11.040 11.907 C 11.511 12.008,12.489 12.008,12.960 11.907 C 14.488 11.580,15.748 10.630,16.433 9.288 C 16.838 8.494,16.980 7.899,16.980 7.000 C 16.980 6.101,16.838 5.506,16.433 4.713 C 15.794 3.461,14.604 2.510,13.240 2.162 C 12.669 2.016,12.019 1.974,11.400 2.044 M12.861 4.129 C 13.804 4.405,14.584 5.183,14.875 6.139 C 14.958 6.412,14.973 6.542,14.973 7.000 C 14.973 7.458,14.958 7.588,14.875 7.861 C 14.582 8.822,13.819 9.581,12.840 9.886 C 12.406 10.021,11.594 10.021,11.160 9.886 C 10.181 9.581,9.418 8.822,9.125 7.861 C 9.042 7.588,9.027 7.458,9.027 7.000 C 9.027 6.542,9.042 6.412,9.125 6.139 C 9.456 5.054,10.371 4.245,11.499 4.040 C 11.832 3.980,12.500 4.023,12.861 4.129 M8.400 14.044 C 6.761 14.229,5.261 15.290,4.526 16.785 C 4.333 17.177,4.187 17.599,4.093 18.040 C 4.030 18.334,4.020 18.579,4.020 19.843 L 4.020 21.306 4.141 21.503 C 4.543 22.156,5.457 22.156,5.859 21.503 L 5.980 21.307 6.003 19.883 C 6.025 18.522,6.031 18.446,6.124 18.139 C 6.420 17.173,7.215 16.388,8.178 16.112 L 8.500 16.020 12.000 16.020 L 15.500 16.020 15.822 16.112 C 16.785 16.388,17.580 17.173,17.876 18.139 C 17.969 18.446,17.975 18.522,17.997 19.883 L 18.020 21.307 18.141 21.503 C 18.543 22.156,19.457 22.156,19.859 21.503 L 19.980 21.306 19.980 19.843 C 19.980 18.579,19.970 18.334,19.907 18.040 C 19.625 16.721,18.863 15.576,17.800 14.874 C 17.046 14.375,16.396 14.135,15.552 14.043 C 15.087 13.992,8.853 13.993,8.400 14.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const User = /*@__PURE__*/ forwardRef<ComponentInternals, UserProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    