
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type DatabaseProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.720 1.025 C 6.326 1.241,3.049 2.408,2.246 4.040 C 2.155 4.227,2.062 4.477,2.040 4.595 C 1.985 4.890,1.985 19.110,2.040 19.405 C 2.062 19.523,2.154 19.772,2.245 19.957 C 2.618 20.716,3.517 21.383,4.860 21.900 C 6.140 22.392,7.674 22.718,9.600 22.908 C 10.595 23.005,13.405 23.005,14.400 22.908 C 15.956 22.755,17.048 22.553,18.280 22.192 C 20.058 21.671,21.307 20.867,21.755 19.957 C 21.846 19.772,21.938 19.523,21.960 19.405 C 22.015 19.110,22.015 4.890,21.960 4.595 C 21.938 4.477,21.845 4.227,21.754 4.040 C 21.021 2.550,18.252 1.449,14.360 1.099 C 13.694 1.040,11.380 0.992,10.720 1.025 M13.380 3.041 C 15.749 3.169,17.637 3.567,18.985 4.221 C 19.391 4.418,19.565 4.529,19.755 4.709 C 19.890 4.837,20.000 4.964,20.000 4.991 C 20.000 5.063,19.730 5.350,19.535 5.483 C 18.579 6.141,16.663 6.664,14.320 6.907 C 13.381 7.004,10.619 7.004,9.680 6.907 C 7.374 6.668,5.533 6.174,4.540 5.529 C 4.292 5.369,4.000 5.077,4.000 4.991 C 4.000 4.964,4.110 4.837,4.245 4.709 C 4.822 4.160,6.409 3.585,8.120 3.305 C 9.742 3.039,11.616 2.945,13.380 3.041 M4.857 7.899 C 6.141 8.392,7.673 8.718,9.600 8.908 C 10.595 9.005,13.405 9.005,14.400 8.908 C 15.956 8.755,17.048 8.553,18.280 8.192 C 18.761 8.051,19.489 7.778,19.793 7.624 L 20.000 7.519 20.000 9.779 L 20.000 12.040 19.852 12.203 C 19.284 12.833,17.532 13.460,15.500 13.761 C 14.289 13.941,13.729 13.975,12.000 13.975 C 10.271 13.975,9.711 13.941,8.500 13.761 C 6.470 13.460,4.711 12.831,4.150 12.207 L 4.000 12.040 4.000 9.779 L 4.000 7.519 4.207 7.624 C 4.321 7.681,4.613 7.805,4.857 7.899 M4.857 14.899 C 6.141 15.392,7.673 15.718,9.600 15.908 C 10.595 16.005,13.405 16.005,14.400 15.908 C 15.956 15.755,17.048 15.553,18.280 15.192 C 18.761 15.051,19.489 14.778,19.793 14.624 L 20.000 14.519 20.000 16.779 L 20.000 19.040 19.852 19.203 C 19.284 19.833,17.532 20.460,15.500 20.761 C 14.289 20.941,13.729 20.975,12.000 20.975 C 10.271 20.975,9.711 20.941,8.500 20.761 C 6.470 20.460,4.711 19.831,4.150 19.207 L 4.000 19.040 4.000 16.779 L 4.000 14.519 4.207 14.624 C 4.321 14.681,4.613 14.805,4.857 14.899 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Database = /*@__PURE__*/ forwardRef<ComponentInternals, DatabaseProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    