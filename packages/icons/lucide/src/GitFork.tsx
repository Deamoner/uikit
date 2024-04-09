
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type GitForkProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-git-fork" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.358 2.061 C 3.731 2.315,2.417 3.584,2.083 5.227 C 1.700 7.105,2.756 9.031,4.540 9.711 C 4.716 9.778,4.891 9.843,4.930 9.855 C 4.993 9.875,5.000 9.946,5.001 10.569 C 5.001 11.329,5.048 11.621,5.225 11.970 C 5.360 12.237,5.763 12.640,6.030 12.775 C 6.456 12.991,6.559 12.999,8.871 12.999 L 11.002 13.000 10.991 13.563 L 10.980 14.126 10.720 14.217 C 9.825 14.531,9.024 15.177,8.569 15.953 C 7.320 18.083,8.233 20.785,10.512 21.704 C 12.558 22.528,14.877 21.538,15.704 19.488 C 16.560 17.365,15.464 14.982,13.280 14.217 L 13.020 14.126 13.009 13.563 L 12.998 13.000 15.121 13.000 C 17.494 13.000,17.601 12.990,18.026 12.735 C 18.327 12.555,18.548 12.337,18.721 12.053 C 18.942 11.688,18.995 11.406,18.998 10.589 C 19.000 9.948,19.007 9.875,19.070 9.855 C 20.342 9.450,21.237 8.646,21.704 7.488 C 22.090 6.530,22.090 5.469,21.705 4.516 C 21.172 3.197,20.001 2.269,18.605 2.058 C 18.121 1.986,17.879 1.986,17.395 2.058 C 15.156 2.396,13.632 4.563,14.082 6.772 C 14.359 8.128,15.281 9.231,16.540 9.711 C 16.716 9.778,16.892 9.843,16.930 9.855 C 16.992 9.875,17.000 9.939,17.000 10.439 L 17.000 11.000 12.000 11.000 L 7.000 11.000 7.000 10.439 C 7.000 9.939,7.008 9.875,7.070 9.855 C 8.342 9.450,9.237 8.646,9.704 7.488 C 10.090 6.530,10.090 5.469,9.705 4.516 C 9.172 3.197,8.001 2.269,6.605 2.058 C 6.144 1.989,5.816 1.990,5.358 2.061 M6.523 4.073 C 7.262 4.266,7.850 4.924,7.967 5.690 C 8.029 6.098,7.967 6.522,7.793 6.880 C 7.638 7.198,7.227 7.625,6.930 7.775 C 6.492 7.997,5.962 8.059,5.508 7.940 C 4.823 7.762,4.249 7.194,4.073 6.523 C 3.683 5.028,5.028 3.683,6.523 4.073 M18.523 4.073 C 19.262 4.266,19.850 4.924,19.967 5.690 C 20.029 6.098,19.967 6.522,19.793 6.880 C 19.638 7.198,19.227 7.625,18.930 7.775 C 18.492 7.997,17.962 8.059,17.508 7.940 C 16.823 7.762,16.249 7.194,16.073 6.523 C 15.683 5.028,17.028 3.683,18.523 4.073 M12.523 16.073 C 13.262 16.266,13.850 16.924,13.967 17.690 C 14.067 18.343,13.873 18.933,13.403 19.404 C 13.002 19.807,12.547 20.000,12.000 20.000 C 11.485 20.000,11.038 19.822,10.653 19.465 C 9.323 18.229,10.189 16.005,12.000 16.005 C 12.143 16.005,12.378 16.036,12.523 16.073 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const GitFork = /*@__PURE__*/ forwardRef<ComponentInternals, GitForkProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    