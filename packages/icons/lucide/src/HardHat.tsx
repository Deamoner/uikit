
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type HardHatProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-hard-hat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.477 3.073 C 9.806 3.249,9.238 3.823,9.060 4.508 C 9.027 4.634,9.000 4.813,9.000 4.907 C 9.000 5.072,8.996 5.077,8.850 5.100 C 6.184 5.527,3.909 7.599,3.236 10.214 C 3.054 10.918,3.034 11.135,3.012 12.582 L 2.992 13.983 2.686 14.032 C 2.508 14.060,2.271 14.133,2.120 14.207 C 1.802 14.362,1.375 14.774,1.225 15.070 C 1.018 15.479,1.000 15.632,1.000 17.000 C 1.000 18.368,1.018 18.521,1.225 18.930 C 1.361 19.199,1.801 19.639,2.070 19.775 C 2.543 20.015,1.888 20.000,12.000 20.000 C 22.112 20.000,21.457 20.015,21.930 19.775 C 22.196 19.640,22.638 19.200,22.771 18.937 C 22.979 18.527,23.000 18.352,22.999 17.014 C 22.999 15.673,22.975 15.464,22.775 15.069 C 22.625 14.774,22.198 14.362,21.880 14.207 C 21.729 14.133,21.492 14.060,21.314 14.032 L 21.008 13.983 20.988 12.582 C 20.963 10.910,20.915 10.572,20.573 9.620 C 19.725 7.262,17.603 5.493,15.150 5.100 C 15.008 5.078,15.000 5.068,14.999 4.928 C 14.999 4.709,14.894 4.306,14.781 4.083 C 14.551 3.628,14.022 3.203,13.523 3.073 C 13.134 2.972,10.866 2.972,10.477 3.073 M13.009 7.653 L 13.020 10.306 13.141 10.503 C 13.543 11.156,14.457 11.156,14.859 10.503 L 14.980 10.306 14.992 8.709 L 15.003 7.112 15.152 7.139 C 15.404 7.185,15.884 7.363,16.240 7.541 C 17.520 8.183,18.486 9.381,18.838 10.760 C 18.961 11.240,19.000 11.763,19.000 12.918 L 19.000 14.000 12.000 14.000 L 5.000 14.000 5.000 12.918 C 5.000 11.763,5.039 11.240,5.162 10.760 C 5.514 9.381,6.483 8.181,7.760 7.541 C 8.116 7.362,8.597 7.185,8.848 7.139 L 8.997 7.112 9.008 8.709 L 9.020 10.306 9.141 10.503 C 9.543 11.156,10.457 11.156,10.859 10.503 L 10.980 10.306 10.991 7.653 L 11.002 5.000 12.000 5.000 L 12.998 5.000 13.009 7.653 M21.000 17.000 L 21.000 18.000 12.000 18.000 L 3.000 18.000 3.000 17.000 L 3.000 16.000 12.000 16.000 L 21.000 16.000 21.000 17.000 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const HardHat = /*@__PURE__*/ forwardRef<ComponentInternals, HardHatProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    