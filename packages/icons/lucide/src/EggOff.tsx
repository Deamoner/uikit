
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type EggOffProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-egg-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.670 1.061 C 1.448 1.142,1.250 1.309,1.128 1.516 C 1.037 1.672,1.020 1.746,1.020 2.000 C 1.020 2.254,1.036 2.327,1.127 2.480 C 1.187 2.579,2.117 3.541,3.194 4.617 L 5.154 6.574 4.991 6.897 C 4.613 7.649,4.199 8.716,3.942 9.600 C 3.433 11.352,3.318 13.270,3.604 15.240 C 3.933 17.510,4.816 19.419,6.150 20.744 C 7.583 22.170,9.427 22.912,11.720 22.986 C 13.790 23.054,15.705 22.480,17.161 21.355 C 17.569 21.040,18.133 20.489,18.383 20.162 L 18.537 19.959 19.979 21.395 C 20.771 22.185,21.483 22.865,21.560 22.905 C 21.659 22.957,21.788 22.979,22.000 22.979 C 22.258 22.980,22.327 22.964,22.492 22.867 C 22.968 22.587,23.139 21.967,22.865 21.508 C 22.810 21.416,18.215 16.793,12.653 11.235 C 3.300 1.889,2.525 1.125,2.343 1.065 C 2.107 0.987,1.874 0.986,1.670 1.061 M11.600 1.025 C 10.646 1.146,9.876 1.445,8.986 2.040 C 8.405 2.429,8.104 2.712,8.023 2.948 C 7.894 3.327,7.963 3.665,8.227 3.960 C 8.433 4.189,8.656 4.287,8.965 4.285 C 9.239 4.284,9.395 4.223,9.660 4.013 C 10.201 3.586,10.872 3.222,11.360 3.092 C 11.747 2.989,12.341 2.999,12.718 3.115 C 13.463 3.345,14.175 3.816,14.962 4.600 C 16.203 5.835,17.186 7.441,17.879 9.360 C 18.349 10.664,18.520 11.677,18.533 13.240 C 18.540 14.084,18.545 14.150,18.628 14.305 C 19.036 15.068,20.095 15.053,20.435 14.280 C 20.545 14.028,20.579 13.285,20.523 12.349 C 20.432 10.817,20.104 9.449,19.456 7.893 C 17.950 4.275,15.324 1.566,12.873 1.101 C 12.527 1.035,11.842 0.995,11.600 1.025 M16.930 18.777 C 16.645 19.154,16.053 19.716,15.675 19.970 C 14.593 20.694,13.203 21.050,11.700 20.987 C 9.498 20.896,7.835 20.006,6.775 18.352 C 5.996 17.137,5.562 15.587,5.483 13.740 C 5.398 11.739,5.689 10.257,6.558 8.262 L 6.644 8.064 11.879 13.299 L 17.114 18.534 16.930 18.777 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const EggOff = /*@__PURE__*/ forwardRef<ComponentInternals, EggOffProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    