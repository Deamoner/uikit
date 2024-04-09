
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type TagsProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-tags" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.477 4.072 C 1.804 4.250,1.238 4.823,1.060 5.508 C 0.974 5.838,0.972 11.361,1.058 11.766 C 1.135 12.129,1.301 12.533,1.491 12.820 C 1.662 13.078,7.377 18.838,7.840 19.219 C 8.182 19.500,8.616 19.730,9.060 19.864 C 9.381 19.962,9.483 19.974,10.000 19.974 C 10.515 19.974,10.620 19.961,10.932 19.866 C 11.317 19.749,11.582 19.626,11.920 19.407 C 12.159 19.253,15.864 15.592,16.219 15.160 C 16.500 14.818,16.730 14.383,16.864 13.940 C 16.962 13.619,16.974 13.517,16.974 13.000 C 16.974 12.483,16.962 12.381,16.864 12.060 C 16.730 11.616,16.500 11.182,16.219 10.840 C 15.904 10.457,10.091 4.672,9.880 4.531 C 9.622 4.359,9.341 4.223,9.020 4.115 L 8.740 4.021 5.740 4.012 C 3.000 4.004,2.717 4.009,2.477 4.072 M14.670 4.061 C 14.448 4.142,14.250 4.309,14.128 4.516 C 14.036 4.672,14.020 4.745,14.021 5.000 C 14.021 5.212,14.043 5.341,14.095 5.440 C 14.135 5.517,15.658 7.074,17.478 8.900 C 21.210 12.644,20.978 12.373,20.978 13.000 C 20.978 13.615,21.095 13.471,18.478 16.100 C 17.208 17.376,16.136 18.483,16.095 18.560 C 16.043 18.659,16.021 18.787,16.021 19.000 C 16.020 19.258,16.036 19.327,16.133 19.492 C 16.263 19.714,16.502 19.901,16.736 19.965 C 16.939 20.019,17.267 19.989,17.445 19.899 C 17.611 19.816,21.917 15.534,22.247 15.125 C 23.253 13.875,23.253 12.126,22.247 10.875 C 22.116 10.713,20.553 9.129,18.774 7.355 C 15.826 4.416,15.523 4.125,15.343 4.065 C 15.107 3.987,14.874 3.986,14.670 4.061 M8.620 6.107 C 8.847 6.231,14.729 12.133,14.833 12.342 C 15.025 12.727,15.025 13.274,14.833 13.658 C 14.781 13.760,14.033 14.540,12.806 15.772 C 10.562 18.023,10.614 17.981,10.001 17.978 C 9.371 17.975,9.608 18.174,6.207 14.784 C 4.474 13.056,3.157 11.712,3.107 11.620 C 3.020 11.461,3.020 11.449,3.009 8.729 L 2.998 5.998 5.729 6.009 C 8.449 6.020,8.461 6.020,8.620 6.107 M6.174 8.039 C 5.750 8.129,5.329 8.477,5.132 8.900 C 5.035 9.107,5.020 9.190,5.020 9.500 C 5.020 9.811,5.035 9.894,5.133 10.104 C 5.276 10.413,5.585 10.721,5.900 10.868 C 6.107 10.965,6.190 10.980,6.500 10.980 C 6.810 10.980,6.893 10.965,7.100 10.868 C 7.415 10.721,7.724 10.413,7.867 10.104 C 7.965 9.894,7.980 9.811,7.980 9.500 C 7.980 9.189,7.965 9.106,7.867 8.896 C 7.727 8.592,7.415 8.278,7.119 8.143 C 6.870 8.030,6.441 7.982,6.174 8.039 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Tags = /*@__PURE__*/ forwardRef<ComponentInternals, TagsProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    